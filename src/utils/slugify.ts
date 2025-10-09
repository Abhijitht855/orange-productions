export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]/g, '') // Remove all non-word chars (letters, digits, -, _)
    .replace(/--+/g, '-'); // Replace multiple hyphens with single hyphen
}