/* API Helper methods
 */

export function parseJSON(response) {
  return response.json();
}

// Simulate network latency by resolving the promise after a timeout, then
// resolve with the supplied argument
export function fakeFetch(resolveWith, timeout = null) {
  const to = (timeout !== null ? timeout : (Math.random() * (800 - 10) + 10));

  return new Promise(resolve =>
    setTimeout(() => {
      resolve(resolveWith);
    }, to)
  );
}
