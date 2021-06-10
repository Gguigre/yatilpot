'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a407eada0bb6d87660f8b1a7265e4043",
"index.html": "b809a42a6cda00863cd28926bd33ebb2",
"/": "b809a42a6cda00863cd28926bd33ebb2",
"main.dart.js": "f44f4d6727b27d7219627f1d97230a0a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7c6b6b436082f65bb3107272d7646e5b",
".git/config": "e2e24b18ee81f812b780508e0a57c4ea",
".git/objects/0d/6a0df7612d77f056803771f9698e034e149faf": "83dbfb428e06dde28bcfc7f1ce144535",
".git/objects/50/37222c6cb9bec107434c4ea860f636f3a8898b": "4cf541f877951c7138bab90d64fe59f7",
".git/objects/68/208fcf7dc7b5368844203c3ffa0f3795d65502": "310e7d2a7aeb45965995b80f3fdd1bec",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/9e/b0cc50d8ba732adbf04fa64d4976c7c00453cf": "d57467eb4b2298b7f022dcf64279b956",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/60/8dd4161f1323c8e944272f1dd94b721806397f": "94b330684db1f4ea736704e9beab76df",
".git/objects/60/744b599d778a2249ec89744f5ed80e32fac571": "0e46eabdf3680404ca8e0c59df3e8311",
".git/objects/a4/d3e73183acf920f649e8f28f4513b45b6e0c6c": "bc89a28fecf43d149fc893031e4e0147",
".git/objects/ad/75c86e8f4b40dfdc3de5bf4beef8bb48b2322d": "9503e3edcf0c026525a9d850f4db98c6",
".git/objects/bb/05e48dcc4d9edd25fc9d184541c022bffe06cb": "d1a205b108ec278acc47a665ea25da3d",
".git/objects/df/7b1efe48fb470d9323dc171b4a814916b721cb": "39677fbef66c72b47196411d384c2e08",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/d033f7384dcfba187c7fd0f6791811ef4c67b0": "a5ccd5442bbda2160fff2a7cba53d994",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/fc/b06aa2dbca04118a6f8373d6b067238f981143": "2b34a52735c214cf6821c1c16368a5c0",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/0971754d9f483bc548288a5653240a078acdf1": "2f3d94eb66a7054abdfe4add1018bc25",
".git/objects/cf/76f00d03c1075a3a4a958613c8d14b92456162": "5780436f54ff49f94fd87dce9dc4475b",
".git/objects/ca/959944b292e06210298a3eaf001d419e956666": "f2f27f3a046f28edf0fd2971b17e5b99",
".git/objects/ca/0d1f060c4e7e50ed73c74be20b789f93e30b7b": "e369040502b7a3353d71e83d549cae46",
".git/objects/c8/c13f7a62f61ba1984f6fdce3443ee92cdf7379": "2259f5309807e2c1834ffe1c2994a919",
".git/objects/fb/d2688d617383197a63bd0011bf53b2e9ab9882": "4f5973514961f42db8cf25b8dcafa629",
".git/objects/c1/01535103816c9976b7cf837573594e4a55c72e": "595a67128845d0a407388fe4c606fe58",
".git/objects/c1/a81ebdad0da993d45866b2d6f007778da0b0e6": "245f58254ecaf288d54ff454984da478",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/ad863637e277914c1da8c573b839632bbe7ab2": "021c9f2065d4b1bb365b4bf7efe429b2",
".git/objects/42/faac6c39b241c29139e2975586a47b24d0cf7a": "1aecdb428bda4a3131ead43b37445de5",
".git/objects/89/61be93ccff9b28fd8f5e70ffc21f8d815f5879": "2729257b56fc56811772a0b703612102",
".git/objects/80/50de2607c10d81ab5548712cf11a238cf954ba": "5fdad6fe2b200268acc8262cb288c99d",
".git/objects/80/67340d0dbd8c390484717ba3943e1a2ef48dcc": "46a33859a2ca27b32836aedc5fcee5e9",
".git/objects/28/0692c7a555ca92c6c66e4627b1ce627371ff8c": "8879053eb0653fa5a4f3f3bd9b503be3",
".git/objects/17/c104c893ec82e7a0725314b990abe5567973b4": "7df75be2425dcfd9434be5545c382288",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b06cb0b0efc22d7ed5be5f2de076136d60e76b": "5860006f25719901d01677ba97db88b9",
".git/objects/21/3d7017aa83359083fd9e97a63307cd5587aca7": "d4adb2b1264a710ec1826da6a8a3e844",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/9715ea746caeecb7f3b9fea2ff7e666e1c86ce": "739319e3d8dfd6835c7e7232b4c99cbe",
".git/objects/5c/e9af4148f33cd8691484e1d55894550ea816e5": "6e3da07d5a073f3494c3349f3dce51bc",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/2b32b17e3acce5789d8b5fd4bf2ee30cf98574": "b046e1a0cc8d8fbc4053359aa3e4c993",
".git/objects/91/28976a4834897e7d4788d318ed729fd338b8c4": "5fcddc4abe26552a00dce79806b93fac",
".git/objects/01/820a17a0757b816eee70de187f60f78ff3e319": "1d71b4592f8271665edbd35759e98fc9",
".git/objects/0a/fd0d1acc40437c1d2b8ea33ec93f36fd4e0511": "2c04bf1934b00e7f63e80fd44271e793",
".git/objects/a7/3ea330da5f95f86e78911a28bb81d08311bc41": "438d1c01e8f05eab43735ae044cf3313",
".git/objects/b6/34fb4d62dd8a9f10dd9addcaa59b2557266d53": "2560e0a10cba4c4d6b6f0604b9777b77",
".git/objects/b6/a8db265e3ee0184ac3e67ecb249459a2391130": "45fc3f5999a2a74019887dd2bb7be990",
".git/objects/d2/dff54aead60d51ab363f3b780bb159691d7fab": "4f13a00426e60436045d4e7f03fca4c4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/883c1fad5a53a536dd1f38265806f1a8e738a4": "fc0257275dfd8d4bf68214692b501b96",
".git/objects/f8/4657af5ff632a85debd4a6484cd7b6e69ed570": "2b35901cbc2b44aedc108b9cae52f35e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/8c/cef6d8e449ceeb01c6d2d4932e1719753701c2": "4914a4c44429397402df3cad0e3f37c8",
".git/objects/1d/63f774c0d3db03d3e5648d315579f34ea2571b": "cc4ae408d885ec197e89be3c9e2e374c",
".git/objects/76/2068bc9d6e9365817d9bbb06aa4ba440530149": "6e2bb9051a48b013f46d021e7adba815",
".git/objects/82/46a2a1cadb32c1b3fc6d9185a41aad24ce0e7e": "fe739be94307701286df0dac44366d1a",
".git/objects/2e/4d0766097ffc54cff53889a063a0ccfe0f6476": "40e4c208c0b81caefb93e638d47a5bd0",
".git/objects/8b/b6fc4274aee459e64d3ea358175f5cf8cee3bd": "2ccf2da97a0fbdce92e5725b4cfec2e6",
".git/objects/8b/6c1566938ff98b0110ac560b269ef1a84f38a8": "92200b7e1389465b8115f842470e6b85",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "1bcea9c2bc1964c5043151e431cb817a",
".git/logs/refs/heads/main": "add117da5fee5ace5010bd9c66e3d027",
".git/logs/refs/remotes/origin/main": "7ebd0ce3aec39c425df0eb6a2c38e07d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "b375bbd4c211f52d4e459fc78826619f",
".git/refs/remotes/origin/main": "b375bbd4c211f52d4e459fc78826619f",
".git/index": "51b462d2cd1649fd3baa04a8c6fb6f21",
".git/COMMIT_EDITMSG": "a5b851269b84fb923e6c3c96e3d80ddc",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "4e00ebf381845f7e842543fb11e8cb01",
"assets/NOTICES": "27cd77f18ef480afa101c34ebe1ce013",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/beer.svg": "99354d081a52c4de0478f95e317f148f",
"assets/assets/sad.svg": "5358081aa9748e764c2ea7066aaeb8bf",
"assets/assets/assets/beer.svg": "99354d081a52c4de0478f95e317f148f",
"assets/assets/assets/sad.svg": "5358081aa9748e764c2ea7066aaeb8bf"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
