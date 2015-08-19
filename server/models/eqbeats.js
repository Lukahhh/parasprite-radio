
var fetchJSON = require('../../scripts/fetcher').fetchJSON
var root = 'https://eqbeats.org'

module.exports = function (config) {

	var API = {
		querySearch: function (query, cb) {
			fetchJSON(root+'/tracks/search/json?q='+encodeURIComponent(query)+'&client='+encodeURIComponent(config.general.clientId), null, function (err, data) {
				cb(err, data)
			})
		}
	}
	return API
}