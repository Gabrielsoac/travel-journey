import readline from 'readline';

export function doQuestion(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (response) => {
      rl.close();
      resolve(response);
    });
  });
}