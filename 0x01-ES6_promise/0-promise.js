export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const a = 2 + 3;
    if (a === 5) {
      resolve('true');
    } else {
      reject(new Error('false'));
    }
  });
}
