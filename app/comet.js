var Faye   = require('faye'),
    server = new Faye.NodeAdapter({mount: '/comet'});

server.listen(8080);