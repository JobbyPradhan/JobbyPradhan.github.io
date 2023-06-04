'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c6c00460fd7fb69ecd3078b27d2c8411",
".git/config": "5975ca3203e8fd7c89bca933a12826e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "79ed6c77c60e9a2f11930b5ab769db86",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "7ba8a2482df4c5f6c7841adb8aa14825",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d07a63d6d417896514b6008fe2959685",
".git/logs/refs/heads/master": "b51406a5423de6ddb9f3312d752a5664",
".git/objects/02/442a86f816a1730aa3c01f055192c5f1917348": "6893091f7181f8397afd678c3278dbe3",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/de05493f4cffa965637a4e3bb798d6e7f63fa3": "4085fc3c5511326520d0f848e5ff83bf",
".git/objects/0a/00d2b93b52ce95a0370b4b211d48e30252f2e1": "8f0f83b026888203e9148488332f89b5",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/cc622e946fe3950f1e3840a049fc76b1c3320f": "ff695ff3986722dd0ca8c4d8e28eb822",
".git/objects/11/bce0f2c5fd9dbbb5c6be957e7a568b7f3e429c": "e2a70b33cd662494fb0da4c8e0f58e4b",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/15/760ed76d6ac5e4555e19a7447b789355000edf": "057d989348648776d9ff51836c9757f4",
".git/objects/1a/8facbd6a67e0c7bfbaa481f45016f4bcd1d830": "cdfda7c3e01868a045ad5c31e1ad1050",
".git/objects/1c/6821cbd84afdb46202268bad5854c9b26f50ce": "7ec181c0602f7ccf640017e52b2dc48b",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/0f124a4973d64d46ff3a2bdf758be907ba6635": "18ef627bbb4b9d63194394b5931b2665",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/23/9eade5d09539c2c902fd0b66d1d59363e0c4ec": "3540b08a61922dff9dc02f4d6b4dc03d",
".git/objects/23/b9ee435ae8d551fb463a1b84d3fe34bf6bc521": "18521fa37e5ab6e0676c3e38216d86e5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/6de75efa3774c5edc532af565d4589a909ee84": "71f9380615bef825f6d79bac3369f890",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/59/2121035ced802dce927ca0d9f9c7fc0484c110": "da92495009f1f5e7305dc5e1f5a5a583",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/38a4fbb73d67f9a2eb5237a2c27ac40eedd676": "7815c1ea10e3b66301d6565bd785f75e",
".git/objects/67/4cfbb261500c12a295449ce2fb87ce79472400": "2ef758ce3ee024d06d5b965300c61915",
".git/objects/6a/03ed5c635da75e559530d5314ed8be879e118f": "a02818a2b3a95b5c69d89afdb07356b7",
".git/objects/6e/c2e54cd3a8dd4bcdc8aeb121b07d458f1c1a62": "5a756ec8f1f143928033cbde7623e28a",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/5dcb768e034e694f740c495e8565e69b188ec5": "52266911048eb26dd2f3c8bf88dcf1e8",
".git/objects/75/e5f3dda68703948589af31f56595978daef77a": "9409708634ad9abc76dbfba7b548a534",
".git/objects/7d/5ed87a70bf3e4242614d4c6b633f362c02b8aa": "12748af812a7d2c0a86180454aad4c75",
".git/objects/88/8318e517316eb0c2d54fa8ed0c54c7208ad649": "0426024738b0d7e4b7a56b1ae20aa747",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/8215f688798757aa807ea3128f765ec1549edb": "338e14775d424a9042733786c5676d6a",
".git/objects/94/d508dbf41f2119287feda0f3dab01fd93e4e32": "22b39cf676015432501c346912d58ee3",
".git/objects/9e/f31a6c86337c2ff50091e48575776312032a64": "2d80f375b8ffba497a106c019fb6baec",
".git/objects/a1/5cc254453d9da366fa0bdf2900ec65bcff52f2": "cb9efb0883e1d1ed7296c1cf80ddea64",
".git/objects/aa/2342fd1670a3aaaff08adc7dded0881c82ccb2": "56b58e8b343f87bcc1549ef0605d6d48",
".git/objects/ab/1e0ee776b4e794b1eb5d46e9abeb58a5298bda": "75a382f379c4053102f1b0d2e0a346d9",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/fd22f5cae489be6cc3c6c88cbcccd0612d4997": "d5ca2dfb90c51b92efd813cb8c5ed108",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/c4dcec08c6a31b3065efc5cd199d4261955c00": "e3960d13d0246863b86bc02b95d56d6a",
".git/objects/c6/17b8f313eb60665b7739d0f550ca87e86b48ba": "b0edca01af60e728432ce9230ab580c6",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/ca/429c6ef12aab882442709e40014ea486f49732": "4c3979ef519a91c28df7b6df79ebf1dc",
".git/objects/ce/73c121f75f6f4776c835d07895b2a76ca5570b": "ad684ac8f15c926cf29b3c096349b2b0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/03f6bff50f0b08310ad0a686e692d95825f60f": "dbfe18cfc8b926a1ed0c12c612f61a65",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/2d1d6180697efbffcd0cb6c2a8d3bc22f9fdcd": "04ef2c13c16cff500b0c526bde59df47",
".git/objects/dd/f447db88f3e6f836548287da489919b4078b82": "37c259d734b3b4496bac1a5010da7fe9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/36dc20ec0315265dd095f28163a842183b95b6": "7373b0c1e92c01cacfc41b3d0ff3ed7b",
".git/objects/f5/a3f5bc71b833e97ac4d4f73a0dac660cdcaf4e": "8515c39274d42d84f165566eb3b0ca45",
".git/objects/f6/533e20f9edd81c5cbe8bf03a7adb64a849d11f": "138ad4b2cfa095af2ee33f3034eda0c6",
".git/objects/fa/a7c901e00a01bcd652cef04620dfb0c7541fd7": "c7262d8628f36ed4bfff65bd41b263fa",
".git/objects/fa/a9a6c94a914c7ac1209d70bd760d40e0ed4de7": "1b065ae2e25889bab8cad37301aa99c0",
".git/objects/fc/0a8ac8eae6b4483adffc9012fc26204bb10f73": "0e14b576d454d7664b04f7f86f558549",
".git/ORIG_HEAD": "a8ba5e6a34c51c7c20a225b26d60e717",
".git/refs/heads/master": "a8ba5e6a34c51c7c20a225b26d60e717",
"assets/AssetManifest.bin": "8125b0ee0a6e4d44307e020886a7cd01",
"assets/AssetManifest.json": "67aa9f54354649f65fdf134fcd0aaf68",
"assets/assets/icons/apple_login.png": "791c511658421055737a205e0ef4eb8b",
"assets/assets/icons/app_logo.png": "b2e2517187bf4f293703f033c6e292ce",
"assets/assets/icons/facebook_login.png": "c514091ebce6ddcc5c629eac2de760f4",
"assets/assets/icons/google_login.png": "f5615acb90fe0e71ea31156733506a50",
"assets/assets/icons/library.svg": "c7fff76ae3f11976c4ba4eeafe7cf654",
"assets/assets/icons/microphone.svg": "80aeafbfe0410ce7d29bfef25ce41ad1",
"assets/assets/icons/nav_home.svg": "7355df4af8b2115d0b1e3b0558ee15e5",
"assets/assets/icons/pen.svg": "b811b09bf3c1a76029ea3aa71c3465a7",
"assets/assets/icons/profile.svg": "c0a39d0bb5bc69287784459feeb206af",
"assets/assets/icons/save.svg": "ded94d4238534b7478f614dde614673b",
"assets/assets/images/ic_demo.png": "39ebb1778485de590663dae4e27c8054",
"assets/assets/images/login_background.png": "9a70285eafe20427e836c282efe55f16",
"assets/assets/images/welcome_bg.jpg": "7e79d88646841cd37303c682b2dda486",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e5eaeac4003f1622d2a16833c2946c6e",
"assets/NOTICES": "bbf493ee31b365ec71993456380d9b5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0bb6457bd94bb71a930a575ba33840a9",
"/": "0bb6457bd94bb71a930a575ba33840a9",
"main.dart.js": "07811c6871ea8b2fa6afd5b313eb500b",
"manifest.json": "178fb98af80d475945431e934ca056f2",
"version.json": "b50eb70d7a83a6c922e33acfa6a3ebd9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
