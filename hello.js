const {exec} = require('child_process')

console.log('hellojs')



const startDBServer = exec('node /Users/user/Desktop/collage/express.js');

startDBServer.stdout.on('data', (pid)=>{
    console.log(pid);
    // TODO format and get pid
    dbServerPID = pid;
});
startDBServer.stderr.on('data', (data)=>{
    console.error(data);
});
/* exec('node /Users/user/Desktop/collage/express.js', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
     // the *entire* stdout and stderr (buffered)
     console.log(`stdout: ${stdout}`);
     console.log(`stderr: ${stderr}`);
    }
  }) */