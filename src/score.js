const { createWorker } = require('tesseract.js');

const worker = createWorker();

async function transformImageToText(url) {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(url);
  return text;
}

module.exports = { transformImageToText };