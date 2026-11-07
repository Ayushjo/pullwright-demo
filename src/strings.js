/** String helpers for titles and URLs. */

/** "Hello World" -> "hello-world" */
export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9À-ɏ]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Shortens text to at most `max` characters, adding "…" when it was cut. */
export function truncate(text, max) {
  if (text.length <= max) return text
  return text.slice(0, max - 1) + '…'
}
