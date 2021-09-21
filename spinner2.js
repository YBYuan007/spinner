// process.stdout.write('hello from spinner1.js... \r12345\n');
const a = ["|","/","-","\\","|","/","-","\\"] ;
for (let i = 0 ; i< 8; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${a[i]}     `);
    // console.log(i,a[i]);
    if (i === 7){
      process.stdout.write(`\r${a[i]}     \n`);
    }
  }, 200*(i+1))
}