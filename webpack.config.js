var path = require('path');
module.exports={
	entry:"./app/assets/script/app.js",
	output: {
		path:path.resolve(__dirname, "./app/temp/scripts"),
		filename:"app.js"
	}
}