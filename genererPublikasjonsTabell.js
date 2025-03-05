import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, extname } from 'node:path';

// Konfigurasjon
const BLOG_DIR = './blogger/';
const OUTPUT_FILE = 'publiseringer.md';

// Tabell-header
const TABLE_HEADER = `# Publiseringer

| Tittel | Publiseringsdato | Lenke |
|--------|------------------|-------|
`;

/**
 * Hent ut metadata fra blog-header
 * @param {string} content - The content of the blog file
 * @returns {Object|null} - Metadata object or null if not found
 */
function extractMetadata(content) {
  const metadataRegex = /^---\s+([\s\S]*?)\s+---/;
  const match = content.match(metadataRegex);

  if (!match || !match[1]) return null;

  const metadata = {};
  const lines = match[1].split('\n');

  lines.forEach((line) => {
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim();
      metadata[key] = value;
    }
  });

  return metadata;
}

/**
 * Generer markdown-tabellrader fra bloggfilene
 */
function generateTableRows() {
  let tableRows = '';

  try {
    const files = readdirSync(BLOG_DIR);

    files.forEach((file) => {
      if (extname(file).toLowerCase() === '.md') {
        const filePath = join(BLOG_DIR, file);
        const content = readFileSync(filePath, 'utf8');
        const metadata = extractMetadata(content);

        if (metadata?.title && metadata?.date && metadata?.published) {
          const publishedLink = `[Lenke](${metadata.published})`;

          tableRows += `| ${metadata.title} | ${metadata.date} | ${publishedLink} |\n`;
        }
      }
    });

    return tableRows;
  } catch (error) {
    console.error('Generering av tabellrader feilet:', error);
    return '';
  }
}

function updatePublicationTable() {
  try {
    const tableRows = generateTableRows();
    const completeTable = `${TABLE_HEADER}${tableRows}`;

    writeFileSync(OUTPUT_FILE, completeTable, 'utf8');

    console.log(`Publikasjonstabell oppdatert i ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Oppdatering av publikasjonstabell feilet:', error);
  }
}

updatePublicationTable();
