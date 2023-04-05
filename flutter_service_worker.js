'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bda25825d1963301160f6eaec738ea0e",
"assets/assets/fonts/Doctor%2520Glitch.otf": "2c0ef5a3871241243f7c767081867bf2",
"assets/assets/resimler/%25C3%25B6neri.jpg": "fc78d47e9c50c5efd58eaa6d49502e1a",
"assets/assets/resimler/actors.jpg": "3fb1708a596356d74b78df7003a5a7d2",
"assets/assets/resimler/aksiyon.jpg": "6197f3a73ef8ce567f3c19e5bdf3cb2d",
"assets/assets/resimler/andOfBrothers.jpg": "a4d4b4d12bfb385517ea603038ed0df3",
"assets/assets/resimler/bb.jpg": "6482bd0eb207a9eada6f2937a409b32d",
"assets/assets/resimler/bb_kucuk.jpg": "d1f796d33563ebf25a36e91273c04418",
"assets/assets/resimler/Chernobyl.jpg": "33592ef06f2ebe86979b520f789ed4d1",
"assets/assets/resimler/coco.jpg": "2b0908c13cac6055a0f4c0066662d84c",
"assets/assets/resimler/cs.png": "b06a9a0a029d4b244da06b2d0db517dd",
"assets/assets/resimler/detayFilm1.png": "3404d276be4ed483eacbe42d8cf58959",
"assets/assets/resimler/detayFilm10.png": "953fc32739ea6519709640961e62962d",
"assets/assets/resimler/detayFilm11.png": "a48e29430d7d3ad107e3ef966590cea7",
"assets/assets/resimler/detayFilm12.png": "9843977eb63cf981a81a812c570c0deb",
"assets/assets/resimler/detayFilm13.png": "2d5602f37b525358da0bb37b6cd4cc32",
"assets/assets/resimler/detayFilm14.png": "02119be4641685bf623f66d55e4a62bc",
"assets/assets/resimler/detayFilm15.png": "2a299473e0cf2fcdccd943cf925f10d1",
"assets/assets/resimler/detayFilm16.png": "5f5bfef69a074b90b6bcdae5df0d0939",
"assets/assets/resimler/detayFilm2.png": "da10cefdacc5a6c944d0564c95d995d3",
"assets/assets/resimler/detayFilm3.png": "f3f0b84829542576ac2935e9e6c0e7b1",
"assets/assets/resimler/detayFilm4.png": "3b12236dbd175df4d1f9de9e2202b83d",
"assets/assets/resimler/detayFilm5.png": "27c32a13cab9caa2d9cd938d98c929a9",
"assets/assets/resimler/detayFilm6.png": "ac379d38ca0cbfa78ae5254bbf283db7",
"assets/assets/resimler/detayFilm7.png": "13007ec28182082ebedae72a53b4ad94",
"assets/assets/resimler/detayFilm8.png": "1aaac5b64c27258782abc8e9fa728eb4",
"assets/assets/resimler/detayFilm9.png": "7ba248ddc5914b299322a14ad3827b24",
"assets/assets/resimler/dizi1.png": "71fa8f2ce573e58ca4a7dab3cb8852a3",
"assets/assets/resimler/dizi10.png": "61d7e9253b40cf0c41c5e33b75a1af3d",
"assets/assets/resimler/dizi11.png": "fffec9c45863ff90d8321e0dca54a934",
"assets/assets/resimler/dizi12.png": "9f3c939e9d51edcc23372ddce2f2f190",
"assets/assets/resimler/dizi13.png": "ba83d0460bfe0fdf65f20d804dcc4cae",
"assets/assets/resimler/dizi14.png": "f2159b9a74d320ffb9dcd0e07d268d17",
"assets/assets/resimler/dizi15.png": "360c48a877ff1053f8a2038c994b1a24",
"assets/assets/resimler/dizi16.png": "b57270210616b3d37f148fc103a00be9",
"assets/assets/resimler/dizi3.png": "99a46e05293ab7dfa53d62ab838529ab",
"assets/assets/resimler/dizi4.png": "c37a764f728a017e2570107622c72243",
"assets/assets/resimler/dizi6.png": "f5f230c0e4997a09a013a9cb03077f65",
"assets/assets/resimler/dizi7.png": "32b8516f584db5dba0bebd7c5eecd307",
"assets/assets/resimler/dizi8.png": "76eacee6214ae9a64a52cf980c27fcea",
"assets/assets/resimler/dizi9.png": "015b3b189ed2f8eb01ece5cbadd2f102",
"assets/assets/resimler/dram2.PNG": "de04044908c40f0166dc073f57f7feb8",
"assets/assets/resimler/esaretinbedeli.png": "a8afb6776fb65eea83855b60d12b80d7",
"assets/assets/resimler/film1.png": "19f066e26f6771881dcdcd96d0afa784",
"assets/assets/resimler/film10.png": "db88c45e7f2414234de804f85cfbd9a9",
"assets/assets/resimler/film11.png": "caefa823322e176cb137b1163dcda261",
"assets/assets/resimler/film12.png": "919899f322aac73e6e480bb9393a3068",
"assets/assets/resimler/film13.png": "0d5c402b67f6d0014c459bc8fbefe124",
"assets/assets/resimler/film14.png": "6263538e6cbe3ef00e14da1df2ff222b",
"assets/assets/resimler/film15.png": "8deadc90e15733da304e0f692e8e3632",
"assets/assets/resimler/film16.png": "999847351473cb8e0fe03a5adb33cfad",
"assets/assets/resimler/film2.png": "2d811f57a8a7b5ae247d2e0c331f8dbe",
"assets/assets/resimler/film3.png": "72c8a2b3593c1b50946d3489b32459ad",
"assets/assets/resimler/film4.png": "d370858a93c3ff6881c635da536c2eee",
"assets/assets/resimler/film5.png": "f5cd46c223e50652939378af6f80c1d5",
"assets/assets/resimler/film6.png": "812ea18ac001893b9609b9ce4ab6af1f",
"assets/assets/resimler/film7.png": "fac38daa96bd028aaeb0caf1eb6d393f",
"assets/assets/resimler/film8.png": "fd15ddd3abb83346cdaa8da2b46a7d0f",
"assets/assets/resimler/film9.png": "4ec0100baee2c1e25f22bd111e550ce8",
"assets/assets/resimler/Firefly.jpg": "1530dc37122396c2c72f99357217b9da",
"assets/assets/resimler/g%25C3%25BCndem2.jpg": "22b9f5378e2af757c1dcaedbe33a8e74",
"assets/assets/resimler/gerilim.jpg": "38b36c7605f735b172359000ae3c0e0f",
"assets/assets/resimler/got.jpg": "2e705a33bc15a056c0314c4b7b38e543",
"assets/assets/resimler/imdbsiralamasi.jpg": "5e6c857673202d5a75f41d3171612e71",
"assets/assets/resimler/intro.jpg": "8cf7aef0d9d6caeb3c145cd971228d9b",
"assets/assets/resimler/klaket.png": "e1ce56301ec852d915e421d26b0850e3",
"assets/assets/resimler/komedi.jpg": "df554b21368de003ca24a39321b6598d",
"assets/assets/resimler/pb.jpg": "f85caf65dc101b3189de5053680d1e43",
"assets/assets/resimler/sherlock.jpg": "99938a0c9de9c41393f91d447080c4c8",
"assets/assets/resimler/TheOffice.jpg": "b723f78c82161f46667273e3a7664259",
"assets/assets/resimler/TheSopranos.jpg": "2438c6329b95086855e7b3c84551296e",
"assets/assets/resimler/TheTwilightZone.jpg": "a8bcfabad367923ba3f6ac7748fa8d54",
"assets/assets/resimler/TheWire.jpg": "005a36811b0f1160d2a749c5b4adcfa6",
"assets/assets/resimler/twd.png": "42379346c87b880da32512d5cb74ec85",
"assets/assets/resimler/yesilyol.jpg": "742ab5233a63d0de9dd1a51f16d9884b",
"assets/FontManifest.json": "6c8a96ac8ffa681e095cb36d69a58888",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1c1af7a96477dd23b121bf6b33c55714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50b0ec687e05c6c533a430dc754ef7bf",
"/": "50b0ec687e05c6c533a430dc754ef7bf",
"main.dart.js": "a686558cc8542e922adbd9d9a8aea191",
"manifest.json": "486dae516be9fde3c59c67a00de87496",
"version.json": "5ff3be47544be1e9edac64d1bb239fb7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
