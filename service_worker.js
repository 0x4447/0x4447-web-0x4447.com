let cache_name = 'v1';

//
//	Listen to the Install event and when this happens add the files to the
//	cash.
//
self.addEventListener('install', function(event) {

	//
	//	1.	All the assets that needs cashing
	//
	let assets = [
		'./',
		'./index.html',
		'./service_worker.js',
		'./assets/js/jquery-3.2.1.min.js',
		'./assets/js/popper-1.13.0.min.js',
		'./assets/js/bootstrap-v4.0.0-beta.2.min.js',
		'./assets/css/bootstrap-3.3.7.min.css',
		'./assets/css/style.css',
		'./assets/logo.png'
	];

	//
	//	2.	Set the promise chain in a clear variable which will help
	//		us more easily reason about the code
	//
	let add_assets = caches.open(cache_name)
		.then(function(cache) {

			return cache.addAll(assets);

		}).catch(function(error) {

			console.log(error)

		});

	//
	//	3.	Tell the event to wait until we finish
	//
	event.waitUntil(add_assets);

});

//
//	Listen to events that run the Worker
//
self.addEventListener('activate', function(event) {

	//
	//	1.	Make a clear variable to help us have more clear code
	//
	let delete_action = caches.keys()
		.then(function(cacheNames) {

			//
			//	1.	Loop over each element
			//
			return Promise.all(cacheNames.map(function(thisCacheName) {

				//
				//	1.	If a cached item is saved under a previous cacheName
				//
				if(thisCacheName !== cache_name)
				{
					//
					//	->	Delete that cached file
					//
					return caches.delete(thisCacheName);
				}

			}));

		});

	//
	//	2.	Tell the event to wait until we finish
	//
	event.waitUntil(delete_action);

});

//
//	Listen to Fetch events which happens when the browser wants to make a
//	resource request, this way we can intercept this action and provide the
//	browser the requested file from the cash if they re there.
//
self.addEventListener('fetch', function(event) {

	//
	//	1. 	Save the promises in a clear variable which will help us better
	//		see the code.
	//
	let fetch_data = caches
		.match(event.request)
		.then(function(response) {

			//
			//	1.	If the request is in the cache
			//
			if(response)
			{
				//
				//	Return the cached version
				//
				return response;
			}

			//
			// 2.	IMPORTANT: Clone the request. A request is a stream and
			// 		can only be consumed once. Since we are consuming this
			// 		once by cache and once by the browser for fetch, we need
			// 		to clone the response.
			//
			let requestClone = event.request.clone();

			//
			//	3.	Fetch data that is not in the cash and ask the Internet
			//		for it.
			//
			fetch(requestClone)
			.then(function(response) {

				//
				//	1.	Check if there was a response from Fetch
				//
				if(!response)
				{
					return response;
				}

				//
				//	2.	Clone the response which is a stream
				//
				let responseClone = response.clone();

				//
				//	3.	Open the cache
				//
				caches.open(cache_name).then(function(cache) {

					//
					//	1.	Put the fetched response in the cache
					//
					cache.put(event.request, responseClone);

					//
					//	->	Return the response
					//
					return response;

				});

			})
			.catch(function(error) {

				//
				//	->	Log if there was an error
				//
				console.log('Error Fetching & Caching New Data', error);

			});

		});

	//
	//	2.	Tell the event to wait until we finish
	//
	event.respondWith(fetch_data);

});