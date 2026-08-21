import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export function load() {
	const filePath = path.join(process.cwd(), 'content', 'residency.md');
	const raw = fs.readFileSync(filePath, 'utf-8');
	const { data } = matter(raw);

	return { ...data };
}
