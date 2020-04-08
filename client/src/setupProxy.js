    const proxy = require('http-proxy-middleware')
     
    module.exports = function(app) {
        app.use(proxy(['/user/signup'], { target: 'http://localhost:3001' }));
    }