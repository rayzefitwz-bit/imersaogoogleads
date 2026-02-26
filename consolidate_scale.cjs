const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = XLSX.readFile('F:/scripts/ESCALA 2026.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// The Excel structure is complex. We need to skip early header rows and map columns.
// Based on raw extraction:
// Row 1 (Index 1) has headers: STATUS, INÍCIO E TÉRMINO DO TRÁFEGO, DATAS, CURSO, CIDADE/UF, LOCAL DO EVENTO, etc.

const headers = rawData[1]; // Index 1 is the 2nd row
const rows = rawData.slice(2);

const structuredData = rows.map(row => {
    if (!row[0] || row[0] === 'STATUS') return null; // Skip empty or header-like rows

    return {
        status: row[0] || '',
        dates: row[2] || '',
        course: row[3] || '',
        city: row[4] || '',
        venue: row[5] || '',
        professor: row[6] || '',
        traffic: row[1] || ''
    };
}).filter(item => item !== null && item.course);

const content = `export const scaleData = ${JSON.stringify(structuredData, null, 2)};`;
fs.writeFileSync(path.join(__dirname, 'components/ScaleData.ts'), content);

console.log(`Structured ${structuredData.length} entries to components/ScaleData.ts`);
