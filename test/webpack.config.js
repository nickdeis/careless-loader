module.exports = {
  entry:{
	 test:"./entry.js"
  },
  output: {
    filename: './[name]-bundle.js',
    libraryTarget: "commonjs"
  },
  target:"node",
  resolve: {
    extensions: ['', '.js']
  },
  externals:[{"careless":true}]
};