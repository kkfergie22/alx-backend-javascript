console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', (readable) => {
  process.stdin.read();
  process.stdout(`Your name is: ${readable.toString()}`);
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
