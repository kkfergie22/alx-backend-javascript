export default function loadBalancer(chinaDownload, USDownload) {
  const results = [chinaDownload, USDownload];
  return Promise.race(results).then((result) => result);
}
