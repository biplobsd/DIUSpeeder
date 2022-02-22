'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1b505e39c2a6408b3c06a8269b512510",
".git/config": "7cab101bc8066a5466568aa2436bf342",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bf77091a2a07f6c7d39fab1c12b317b0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dedd0b63c327ba42657e010058985457",
".git/logs/refs/heads/main": "f0c92ca90ec0879bf540cfc187824a51",
".git/logs/refs/remotes/origin/main": "b0b1c7b9eae6f0192a10ca70900e57f7",
".git/objects/03/36ce8de22d10742d9d383531e176a04523b89e": "7235d44f9f7c13a8621ef05776ee957c",
".git/objects/0a/626556b215e713ee5bc5c3dd8030591eaaf381": "b1994af37841d4b05f01f2dee762c2b5",
".git/objects/0b/af5455bf786183b9da50944e08af83ce1334b1": "a8be50bdc20c97b4bf86502faf642eeb",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/32/e3f42447f54d072fc05fa569701213142b4b76": "49cc052e157222a8d88d5dfe1cab92ad",
".git/objects/35/265173e839c6392d482f430a738da12a076ceb": "5907ee29a73155a4d23fc3a159b1df28",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/44/3ef1110672999b0ae93d975cb34e9078dd7dfc": "544ad95c32953733b9f31deb2a84e77a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/57/8112ed138ae86b063bc25f6e1079566e754a57": "e5363d795f1c1b6aecb3a2988cd8a546",
".git/objects/59/0df33e8c09afabdbad9d284c09507e7a48be8d": "45cf4074f1cda592083a5f082f72c9e9",
".git/objects/5c/26097a13a2614f54a8a415c9a693cf91658b5b": "044298235829334b84120201e33a78c4",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/60/2838e08716556119303042511ff018fd0926b6": "0c545516c65087dc9bb26f85c429428c",
".git/objects/61/c945f4fce0f18572920519c7d99d1d4ecabe30": "e046958c4175ad9d5134c7b539745437",
".git/objects/64/9761266de87f6fbd68753dfe07d4abbcd77f49": "da2c1c4e40058094ce0c9effd7cbe150",
".git/objects/66/a69cb1850861f675e7ae3e8a650aca116a62a1": "8d3a836560d6c5a15c1662e6c90680ac",
".git/objects/69/c31fc5d462286102af408cc9ee0d9b40eae356": "d4f8f2735da8694f4fec1a3906aaeb85",
".git/objects/6f/02830feb661e29e81be1ba2cc34b0d90ba4f5a": "624336bbda03d7b40dd151c24f46a0a4",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/86/20f10b84d902a981624d96109cb0cd2b51eda7": "8a01a91c9e4cccf5281543ddb8b823fb",
".git/objects/86/27ae1d88b565f83094c834d790a54fc4521d7c": "a6b53adaa26f06b436872926c7d746e5",
".git/objects/8a/16e4900e8571a21908eb64039d1ac881527d12": "62308141a0b9e78271c3c03077536311",
".git/objects/8a/8d54fc3c3cf0e43bc2a3c113ab734cea807e94": "d073ce6d0c666cc80448785843139abb",
".git/objects/8b/0067b2bbae6799519f6e137ca735806ae0a738": "740c0f77b3a3ef87a8bd546ed321dbcc",
".git/objects/8b/8c01bda2655d1594e7c27e764e1775178e6bd2": "bbcf75c256e2d6c374ded065fabd5b13",
".git/objects/8e/9f7a05b5854a711b0c640ac460dbb06714fb15": "21ec11b8a87d0465ebb8883f2384e2d1",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a8/112179b9704576f1ecfffb2dc53c3c879f186b": "5eadbdf2ee1907eaed6e6db1a9592e0a",
".git/objects/ad/7e76bd73970bfcc9daef57a43abcea4e561f1e": "37640dd3fc116bd1e066629c04a14b1a",
".git/objects/af/b40cddb982cf446390a76fdf9ccf239f752f5e": "999d5df342d4ee3c7aae834049f6eded",
".git/objects/af/bd917353cf988bd5ef381ba7f95cb33b007806": "56cb4de291755c29ab4e6edba5ccd7c4",
".git/objects/b1/c0b1c3d385e250127fe3fbd2b551d1624b8395": "715d8db1fd2151a4062e10dc4479b42a",
".git/objects/b5/e60d34fbc18cb6e4f8d08841c965fa4f49eca4": "7be04fa943b69d05414f4f35d43cbe7d",
".git/objects/b7/fa845fcaa323a04d92bfc5c79ddbf775fbb073": "30a7d8f63efd616ecff85f62a6ce9611",
".git/objects/b8/2e7de9218df46503b045c0085392267415bf11": "0da8591d009a629906d0cae6dc4387f2",
".git/objects/c1/238a5c223a4042696cbcafcb73aa631b833d8c": "6ca08e4e5206fa7f5466769dda30ef87",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/d9/20815d38d2392bda953fb2c019604b20b12ce9": "75f7b444046e4c5e48895e4b8d836ef1",
".git/objects/db/ec32bdcf10e9d0b2ea9dcd098e4a460455e7f0": "1776488784c8194abf223c62e430c674",
".git/objects/df/3c204f111730c5dcdcf1b4c94d656a71d8d567": "43a479e38a5e704a0f19ccd6e4ec7618",
".git/objects/e4/7e1ec8dc94bee7c906c766e9230f1f64a529d6": "206ac1167955111be3610c40d988d058",
".git/objects/e5/31c392bc4b2b771d111f28a7cda20a976b5f7e": "329888bf75cbd8785af28ecf39b4b1b2",
".git/objects/e5/c26704b694f18ea7910c26108a75d20839c4a8": "892142bb11526c823c167ea65514fc99",
".git/objects/ec/74cdbe80ae9a2dd29ae6ea0c4508b4c3b1250f": "c53cd7bb7e39c9b593015bae39b89c3c",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/f4/fc24451b535e13d425ab373d878e1ff5915b50": "77adab68e1c288e06f39605891c04907",
".git/objects/fc/e89af8803785218d1c99585f32af2b67bca0e8": "65768e5bdbe95d047997bdb45f308181",
".git/refs/heads/main": "34a89621f30f0abefac31b3fe15019ed",
".git/refs/remotes/origin/main": "34a89621f30f0abefac31b3fe15019ed",
"assets/AssetManifest.json": "9b26ec56844b2f14e8d34c5f9c7a9ac4",
"assets/assets/BLC%2520logo.png": "ac609ee41a410c83a046d8e43c4897e1",
"assets/assets/getingFromPageId.png": "a4f23f9ed51de6d84ef734ba526dea44",
"assets/assets/lotties/31490-no-connection.json": "921418e78105fb2e44c83838cf1d1c68",
"assets/assets/lotties/64787-success.json": "3986c6bbbb3c88dec60b3d5fa568af0a",
"assets/assets/presentation.png": "3fa5bd366387691c38dd933740af8a2b",
"assets/assets/speedOutLogo.png": "0a232f7f4ed5986e6fc7c52db109b318",
"assets/assets/vplcopypageid.gif": "c9241c755e4c960f209cd9978e9fb6fb",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "b3793ef9333d01454adc4ce4c6212e52",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-192.png": "12d05db1c0b26d429b54e3f8c946a496",
"icons/Icon-512.png": "aabba36693aba0ec8d954adf297d3125",
"index.html": "4bcdbc1b3435a3e9ebadcab481ef06c6",
"/": "4bcdbc1b3435a3e9ebadcab481ef06c6",
"main.dart.js": "883a7219411980a02755ab2fea56f555",
"manifest.json": "1168992bc6f03f1fa9e9e91402bd167c",
"version.json": "d80153de3cd62e378cff5e095082dadf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
