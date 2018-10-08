/**
 * Parses a query string like '?query=value' into an object.
 * 
 * Credit: https://github.com/sindresorhus/query-string/pull/148#issuecomment-399666865
 * 
 * @param {string} queryString 
 */
export function parse(queryString) {
  const query = {};
  const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  
  return query;
}
