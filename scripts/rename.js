#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let recursive = require('recursive-readdir');

//
//
//
recursive("_output", function (error, files) {

	//
	//
	//
	files.forEach(function(uri) {

		//
		//
		//
		let ext = path.extname(uri);

		//
		//
		//
		let dir = path.dirname(uri);

		//
		//
		//
		let file = path.basename(uri, ext);

		//
		//
		//
		if(ext == '.html')
		{
			//
			//
			//
			let new_file = dir + '/' + file;

			//
			//
			//
			fs.renameSync(uri, new_file)
		}

	})

});