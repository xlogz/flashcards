    const proxy = require('http-proxy-middleware')
     
    module.exports = function(app) {
        app.use(proxy(['/user/','/cards/'], { target: 'http://localhost:3001' }));
    }