// Registering a service worker

const CACHE_NAME = 'data-in-cache';

// Pages to cache
const urlsToCache = [
	'index.html',
	'about.html',
	'formations.html',
	'mutuelle.html',
	'events.html',
	'contact.html',
	'offline.html'
];


const self = this;

// Install SW
self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(cache => {
				console.log('Opened cache');

				return cache.addAll(urlsToCache);
			})
	)
});

// Listen for requests
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
			.then(async () => {
				try {
					return fetch(event.request);
				} catch (err) {
					// console.error(err);
					return await caches.match('offline.html');
				}
			})
	)
});

// Activate the SW
self.addEventListener('activate', event => {
	const cacheWhiteList = []
	cacheWhiteList.push(CACHE_NAME)

	event.waitUntil(
		caches.keys().then(cacheNames => Promise.all(
			// eslint-disable-next-line array-callback-return
			cacheNames.map(cacheName => {
				if(!cacheWhiteList.includes(cacheName)){
					return caches.delete(cacheName)
				}
			})
		))
	)
})
