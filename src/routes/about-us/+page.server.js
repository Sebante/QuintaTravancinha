import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

export function load() {
	const filePath = path.join(process.cwd(), 'content', 'about-us.md');
	const raw = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(raw);

	return {
		...data,
		html: marked.parse(content)
	};
}
