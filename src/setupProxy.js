const proxy = require('http-proxy-middleware')
module.exports = function(app) {
	app.use(proxy('/StationList', { target: 'http://localhost:3000' }))
	app.use(proxy('/station/:StationCode/:StationTogether1/', { target: 'http://localhost:3000' }))
}