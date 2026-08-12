import { PRODUCTS, BRAND } from "@/data";

// Build a minimal, valid multi-line PDF entirely client-side.
function buildCataloguePdf() {
  const esc = (s) => s.replace(/([()\\])/g, "\\$1");
  const lines = [];
  lines.push({ t: "Prowave Amplifiers", size: 26, gap: 34 });
  lines.push({ t: "Product Catalogue - Wave Audio Co.", size: 13, gap: 40 });
  PRODUCTS.forEach((p) => {
    lines.push({ t: p.name, size: 15, gap: 20 });
    lines.push({ t: `${p.tag}  |  ${p.spec}`, size: 11, gap: 30 });
  });
  lines.push({ t: "Contact", size: 15, gap: 20 });
  lines.push({ t: `Phone: ${BRAND.phone}`, size: 11, gap: 16 });
  lines.push({ t: `Email: ${BRAND.email}`, size: 11, gap: 16 });
  lines.push({ t: BRAND.address, size: 11, gap: 16 });

  let content = "BT /F1 24 Tf 60 780 Td 16 TL\n";
  let first = true;
  lines.forEach((l) => {
    content += `/F1 ${l.size} Tf\n`;
    if (!first) content += `0 -${l.gap} Td\n`;
    content += `(${esc(l.t)}) Tj\n`;
    first = false;
  });
  content += "ET";

  const objs = [
    "<</Type/Catalog/Pages 2 0 R>>",
    "<</Type/Pages/Kids[3 0 R]/Count 1>>",
    "<</Type/Page/Parent 2 0 R/MediaBox[0 0 595 842]/Resources<</Font<</F1 4 0 R>>>>/Contents 5 0 R>>",
    "<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>",
    `<</Length ${content.length}>>\nstream\n${content}\nendstream`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [];
  objs.forEach((o, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${o}\nendobj\n`;
  });
  const xrefPos = pdf.length;
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((off) => {
    pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<</Size ${objs.length + 1}/Root 1 0 R>>\nstartxref\n${xrefPos}\n%%EOF`;
  return pdf;
}

export function downloadCatalogue() {
  const pdf = buildCataloguePdf();
  const blob = new Blob([pdf], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Prowave-Amplifiers-Catalogue.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
