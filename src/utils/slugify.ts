// utils/slugify.ts
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')        // replace & with 'and'
    .replace(/\s+/g, '-')        // replace spaces with dashes
    .replace(/[^\w-]+/g, '')     // remove all non-word chars except dash
    .replace(/--+/g, '-');       // replace multiple dashes with single dash
}
