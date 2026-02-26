const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = XLSX.readFile('F:/scripts/ESCALA 2026.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

const content = `export const scaleData = ${JSON.stringify(data, null, 2)};`;
fs.writeFileSync(path.join(__dirname, 'components/ScaleData.ts'), content);

console.log('Scale data extracted to components/ScaleData.ts');
