import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import readline from 'node:readline';

const BLOG_DIR = './blogger/';
const TEMPLATE_FILE = './template/blogg-template.md';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/å/g, 'a')
    .replace(/ø/g, 'o')
    .replace(/æ/g, 'ae')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '_')
    .replace(/^-+|-+$/g, '');
}

async function setupNewBlog() {
  const template = readFileSync(TEMPLATE_FILE, 'utf8');

  const title = await question('Tittel: ');
  if (!title.trim()) {
    rl.close();
    process.exit(1);
  }

  const slug = slugify(title);
  const filename = `${slug}.md`;
  const filepath = join(BLOG_DIR, filename);

  if (existsSync(filepath)) {
    rl.close();
    process.exit(1);
  }

  const content = template
    .replace(/^title:\s*$/m, `title: ${title}`)
    .replace(/^# \s*$/m, `# ${title}`);

  writeFileSync(filepath, content, 'utf8');

  rl.close();
}

setupNewBlog();
