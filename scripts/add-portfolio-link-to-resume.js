const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

async function addLink() {
  const resumePath = path.resolve(__dirname, '..', 'public', 'Anagha_CR_Resume.pdf');
  if (!fs.existsSync(resumePath)) {
    console.error('Resume file not found at', resumePath);
    process.exit(2);
  }

  const existingPdfBytes = fs.readFileSync(resumePath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();

  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 10;
  const linkText = 'Portfolio: https://anagha310805.github.io/career-growth-suite/';

  // Draw the link text near the bottom-left with a blue color
  const textWidth = helvetica.widthOfTextAtSize(linkText, fontSize);
  const x = 50;
  const y = 30; // 30pt from bottom

  firstPage.drawText(linkText, {
    x,
    y,
    size: fontSize,
    font: helvetica,
    color: rgb(0.05, 0.4, 1)
  });

  const modifiedPdfBytes = await pdfDoc.save();
  fs.writeFileSync(resumePath, modifiedPdfBytes);
  console.log('Updated resume saved to', resumePath);
}

addLink().catch(err => { console.error(err); process.exit(1); });
