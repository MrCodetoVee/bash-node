// import pwd from './pwd';
const pwd = require('./pwd')
const fs = require('fs')

process.stdout.write("prompt > ");

    process.stdin.on("data", (data) => {
        const cmd = data.toString().trim();
        if (cmd === "pwd") {
            pwd();
        }
        
});
