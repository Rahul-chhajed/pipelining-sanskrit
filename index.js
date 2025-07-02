// speak.js
const tts = require("sanskrit-tts");
const fs = require("fs");
const path = require("path");

const text = process.argv[2];
const filename = process.argv[3] || "output.mp3";
const outputDir = path.join(__dirname, "outputs");
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}
const filePath = path.join(outputDir, filename)
console.log(`Saving to ${filePath}`);
console.log(`Text: ${text}`);
console.log(`Filename: ${filename}`);
async function generateTts (){
 await tts.saveFile(text, {
  script: "devanagari",
  slow: true,
  fileName: filePath
})
};

generateTts();
