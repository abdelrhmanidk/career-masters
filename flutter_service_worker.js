'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "275a8d04fe9b60e277787194cd113d8e",
"version.json": "0c0f216726b797dcdd157004732d4231",
"index.html": "65e3a99a0b76d70d68de00559c008329",
"/": "65e3a99a0b76d70d68de00559c008329",
"main.dart.js": "092a37ae4f61f9cadb4505af16ee4a0c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "684dc34190cadf1581d681514e5b4377",
"icons/favicon-16x16.png": "b99af480b805f56b505437b756d6c8cb",
"icons/android-chrome-192x192.png": "2ceb22978d8ea1a9a45869243d3287fd",
"icons/apple-touch-icon.png": "3e5e357baa3fbb48a19aa69e2d4f2cf2",
"icons/android-chrome-512x512.png": "ebf176441f499ae560753991e70cfa34",
"icons/favicon-32x32.png": "3971f4377be1f9f401bd4e6659a5dc1d",
"manifest.json": "053100cb84a50d2ae7f5492f7dd7f25e",
"assets/images/favicon_io.zip": "ce5ca0539ab4d822a9dbca483b615620",
"assets/images/login.png": "5bd6e4d36069ef2e1a0363c7434cf81c",
"assets/images/formpage.png": "7f297c4a7ab8502273a868a3feb99032",
"assets/images/company%2520page.png": "64802f42ff63550f739feaf2b447a8cc",
"assets/images/undraw_Female_avatar_efig.png": "428d038c28d271738e16b1ad6173f2c8",
"assets/images/logotest.jpg": "5fe5fd46c833b00a2b7a36078ac156a7",
"assets/images/student%2520profile%2520page.png": "cd37b0755e9b979e99651d064286840a",
"assets/images/user.png": "e459835010bf256bf5e3f7423b43bc51",
"assets/images/Aboutpage.png": "1e3a46ce9a15e8d805e0ffe0efd1cbd9",
"assets/images/microsoft.png": "01d3f16b2bdab39a69d2e0f2019dd696",
"assets/images/evo.jpeg": "0933b78d5a1290a5bcfb3ede7a523735",
"assets/images/figma.png": "ac00fa7b6768286ad44283e4595dd07e",
"assets/images/contact.png": "4aa5ce88b6b2cf8e3938b00e8e8fab4e",
"assets/images/search.png": "e9612850a6cb55eb547266043e1eef86",
"assets/images/evo.png": "7b56edef3964964bb3136ccb6081233b",
"assets/images/student.png": "9e5c8479a67fc65a1548cccf7ee6a490",
"assets/images/student%2520page.png": "b5bb294a4b0470fec9a4069f2eaae316",
"assets/images/trainee%2520pfp.png": "dc4c237afe2f79ede75747900e6952cb",
"assets/images/login%2520mobile.png": "f443ea21019a1f3e95718a5d3cccd636",
"assets/images/company.png": "3e906bba7509118da1ccdcb830f33233",
"assets/images/logo-removebg-preview%25202.png": "8b11f770bf45324ad76556f65cad5145",
"assets/images/logo-removebg-preview.png": "656868a9183ff5dc093d207864a67965",
"assets/images/course.png": "259e112bebfd77746d7070bcdf140a64",
"assets/images/logo.png": "e80abcfb8e398f2041561b48af45a7ea",
"assets/images/firstpage2.png": "0b0a89cab70a3ea62bfc438d95999400",
"assets/images/signup.png": "f3422d452c82f3df8ede34688cc761c8",
"assets/images/undraw_Male_avatar_g98d.png": "91bdb6f5cc7df130fd6f57c29786e972",
"assets/images/homepage.2.png": "867f92ecfaef8ad07c2aceeab70933a2",
"assets/images/firstpage.png": "d8cba134feb71c07ab00ca91ce307e9d",
"assets/images/homepage.png": "f7ea808d06788513ee8c7bdcbfaaa666",
"assets/images/company%2520form%2520phone.png": "d03ba352d8bdf02ba30ec22ad42fcfba",
"assets/images/google.png": "48968e25a410cf9711ec32caad37df0a",
"assets/images/companyForm.png": "a5394f8a1918386c791ad4de918795be",
"assets/AssetManifest.json": "333a8d5d97699919c74f318091489e93",
"assets/NOTICES": "1799c4f9f54b9b2b3d33c6aa9ab61dbc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6c87a2bc2b79c95aaf845c702fd197da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2b90fe41663e5cc05e26d505cd0f2e58",
"assets/fonts/MaterialIcons-Regular.otf": "2674ab79b307ccfdd237f09f88b72d31",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
