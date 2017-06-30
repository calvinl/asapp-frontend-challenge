/* API Helper methods
 */

export function parseJSON(response) {
  return response.json();
}

// Simulate network latency by resolving the promise after a timeout, then
// resolve with the supplied argument
export function fetch(resolveWith) {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(resolveWith);
    }, Math.random() * (1200 - 10) + 10)
  );
}
