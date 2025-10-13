// utils/slugify.ts
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '')       // Remove all spaces completely
    .replace(/[^\w]/g, '');    // Remove non-alphanumeric characters
}
