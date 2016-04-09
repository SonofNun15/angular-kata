var karmaConfig = require('./karma.config')

 module.exports = function(config) {
	 var settings = karmaConfig(config)
	 settings.browsers = ['Chrome']
	 settings.autoWatch = true
	 settings.singleRun = false

	 config.set(settings)
	 return settings
 }
