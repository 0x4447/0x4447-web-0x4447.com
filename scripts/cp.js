#!/usr/bin/env node

let ncp = require('ncp').ncp;

//
//	1.
//
let source = './_input';

//
//	2.
//
let target = './_output';


let options = {
	filter: filter
}

//
//	3.
//
ncp(source, target, options, function(error) {

	//
	//	1.	Check if an error occurred
	//
	if(error)
	{
		//
		//	1.	Show the error
		//
		console.log(error);

		//
		//	->	Exit the app
		//
		process.exit(1);
	}

	//
	//	2.	Let the user know the process of coping finished
	//
	console.log("Done");

	//
	//	->	Exit the app
	//
	process.exit();

});

//	 ______  _    _  _   _   _____  _______  _____  ____   _   _   _____
//	|  ____|| |  | || \ | | / ____||__   __||_   _|/ __ \ | \ | | / ____|
//	| |__   | |  | ||  \| || |        | |     | | | |  | ||  \| || (___
//	|  __|  | |  | || . ` || |        | |     | | | |  | || . ` | \___ \
//	| |     | |__| || |\  || |____    | |    _| |_| |__| || |\  | ____) |
//	|_|      \____/ |_| \_| \_____|   |_|   |_____|\____/ |_| \_||_____/
//

function filter(file)
{
	let state = true;

	if(file == '.git')
	{
		state = false;
	}

	if(file == 'output')
	{
		state = false;
	}

	return state;
}


