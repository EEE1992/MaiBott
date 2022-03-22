const { createWorker } = require('tesseract.js');

const worker = createWorker();

async function transformImageToText(image) {
  await worker.load();
  await worker.loadLanguage('equ');
  await worker.initialize('equ');
  await worker.setParameters({
    tessedit_char_whitelist: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ.%',
  });
  const { data: { text } } = await worker.recognize(image);
  return text;
}

module.exports = { transformImageToText };