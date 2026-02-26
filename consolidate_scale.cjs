const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = XLSX.readFile('F:/scripts/ESCALA 2026.xlsx');
const sheetName = '2026';
const worksheet = workbook.Sheets[sheetName];
const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

const rows = rawData;

const structuredData = rows.map(row => {
    // Check if it's a valid data row (Status in column 0 is usually ATIVO or FINALIZADO)
    if (!row[0] || !['ATIVO', 'FINALIZADO'].includes(row[0].toString().toUpperCase())) return null;

    return {
        status: row[0] || '',
        traffic: row[1] || '',
        course: `${row[2] || ''} ${row[3] ? `(${row[3]})` : ''}`.trim(),
        dates: row[4] || '',
        city: row[1] || '', // Using col 1 as city/traffic for 2026
        venue: row[5] || '',
        professor: row[6] || ''
    };
}).filter(item => item !== null && item.course);

const content = `export const scaleData = ${JSON.stringify(structuredData, null, 2)};`;
fs.writeFileSync(path.join(__dirname, 'components/ScaleData.ts'), content);

console.log(`Structured ${structuredData.length} entries from 2026 tab to components/ScaleData.ts`);
