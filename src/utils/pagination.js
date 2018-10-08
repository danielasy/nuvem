/**
 * Returns a valid page number starting from 1.
 * 
 * @param {string} page
 */
export function getPageNumber(page) {
  // Detect undefineds, nulls, empty strings and 0s (which is an invalid page)
  if (!page) {
    return 1;
  }

  // TODO: Detect weird non-numerical strings

  // Make sure page is not negative
  return Math.max(1, page);
}
