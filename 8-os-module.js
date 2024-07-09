const os = require('os'); //Don`t use "./"

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`) // The system uptime is 15426.42 seconds

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);