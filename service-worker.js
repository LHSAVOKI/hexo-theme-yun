/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7fc1c387fa8921cfb81a31386525ebad"
  },
  {
    "url": "about.html",
    "revision": "2681e82ea3d02152211a8b56f254e8eb"
  },
  {
    "url": "assets/css/0.styles.13924602.css",
    "revision": "2ea3e7ba4c7deed75dc47c526d6d4bef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.719304c1.js",
    "revision": "6dd648d2a10b4247ff5c6f7911d31dfc"
  },
  {
    "url": "assets/js/11.bbb583ed.js",
    "revision": "a1503cbb3224077d3ce214046c7761ba"
  },
  {
    "url": "assets/js/12.f3b86a9a.js",
    "revision": "9be095f598e50515ec2d4bd7600a7744"
  },
  {
    "url": "assets/js/13.0bb92ce8.js",
    "revision": "0a99d4bcb7d34910ae34d730d6d9dba5"
  },
  {
    "url": "assets/js/14.ca913b2d.js",
    "revision": "a9b593792b47fc637871ee12006ceadf"
  },
  {
    "url": "assets/js/15.caa9059b.js",
    "revision": "0a154761280f099a764c04e3f5156705"
  },
  {
    "url": "assets/js/16.77a43179.js",
    "revision": "979e6b62720d2bb1a0de329e336b195f"
  },
  {
    "url": "assets/js/17.ec45df19.js",
    "revision": "2c90c1180472a391387979547098c507"
  },
  {
    "url": "assets/js/18.97b84c55.js",
    "revision": "a933a78093169e124c25ef6c3002e828"
  },
  {
    "url": "assets/js/19.deccbd57.js",
    "revision": "d7b0d6e03aa6f34654a47a34e94c739b"
  },
  {
    "url": "assets/js/20.3e493a8d.js",
    "revision": "1174b878cf8f4203c98df2a06afbbcf1"
  },
  {
    "url": "assets/js/21.b1257a23.js",
    "revision": "d47213d7dec3d7163d20d0fc22049cec"
  },
  {
    "url": "assets/js/22.e8094df8.js",
    "revision": "4530c9044a45ecdf5e0af463a4c78f5a"
  },
  {
    "url": "assets/js/23.f1d378eb.js",
    "revision": "cdcb62efc665fe5ff8b74299055512dc"
  },
  {
    "url": "assets/js/24.529bf91a.js",
    "revision": "b8e10119eee1d375f344f31721dc2971"
  },
  {
    "url": "assets/js/25.29b67d3b.js",
    "revision": "3de93b217c0aac794a99e46600505653"
  },
  {
    "url": "assets/js/26.cdc48ad9.js",
    "revision": "c1f4b3426ff49cf65a03a421a1669070"
  },
  {
    "url": "assets/js/27.2d122fbd.js",
    "revision": "d4b47cd25633bdcb30d1db6e76178bcd"
  },
  {
    "url": "assets/js/28.27804323.js",
    "revision": "f64e0d4beff5e7d42cea07fde1a76ab8"
  },
  {
    "url": "assets/js/29.83a69cc0.js",
    "revision": "49833b2cb2c3ab62720e073eea6fe28e"
  },
  {
    "url": "assets/js/3.b316e861.js",
    "revision": "b5a5aafc9a12bbd66745ff6f77191cfd"
  },
  {
    "url": "assets/js/30.9a05e5f6.js",
    "revision": "9cb9cad030d2dcb78bfe571ce61b1a21"
  },
  {
    "url": "assets/js/31.6d01bf96.js",
    "revision": "acda7e1dea12d76e1ab7602e1acbcc2b"
  },
  {
    "url": "assets/js/32.fdcef6d6.js",
    "revision": "bb63ec213ba5d45d438e1055917b37f5"
  },
  {
    "url": "assets/js/4.335cf54b.js",
    "revision": "e3210b9fa6d87473b3030b735058e108"
  },
  {
    "url": "assets/js/5.155c6b16.js",
    "revision": "826aaa0eee8fae406e576631e54d56df"
  },
  {
    "url": "assets/js/6.f021cea4.js",
    "revision": "70d06f228785b6f95dadf3544526ea9f"
  },
  {
    "url": "assets/js/7.721e06ee.js",
    "revision": "2aceb9e462b5abe1e6117bbf786e14cb"
  },
  {
    "url": "assets/js/8.9c1b0eb8.js",
    "revision": "b4c96ccccf809c98bff335d788aaa26e"
  },
  {
    "url": "assets/js/9.35230b46.js",
    "revision": "ed71bebf6f152e3edae08161b82fe806"
  },
  {
    "url": "assets/js/app.d8cab8c8.js",
    "revision": "04f36ffd91b04c9418545bf3e64a49e5"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "demo.html",
    "revision": "696436a28439baaaa9936ccd545bba11"
  },
  {
    "url": "en/about.html",
    "revision": "c70829f73886d97b153bc29c643f5770"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "c19356e87eef9e12c62e5e2453ec51d0"
  },
  {
    "url": "en/guide/config.html",
    "revision": "e36c6ebd2deb7a27badb25d6fe448cec"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "b134163285e4862153189baaa2a83f93"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "872c356b0d62c30cb0ca3cbd890370ea"
  },
  {
    "url": "en/guide/index.html",
    "revision": "e0d3a2e6077e61bf10c9b87d1066359e"
  },
  {
    "url": "en/guide/page.html",
    "revision": "d35f096f93db9fee22d4634bec5dc7bc"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "22f488f7ab3c70e3d3259517a5337111"
  },
  {
    "url": "en/index.html",
    "revision": "722f4256904bcfca4b9a491ed737c9b0"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "ce6538cd7f327c2d8132f26fcac1d9b7"
  },
  {
    "url": "guide/config.html",
    "revision": "dde3496246fb6f729f1ce6c6876a4487"
  },
  {
    "url": "guide/faq.html",
    "revision": "4fb47f9658d3469e9d3a8a7d01291365"
  },
  {
    "url": "guide/icon.html",
    "revision": "c08118326acb8543388ce88ca2a8eb5e"
  },
  {
    "url": "guide/index.html",
    "revision": "61eeb801305d46d4a02ee261ac345744"
  },
  {
    "url": "guide/migrate.html",
    "revision": "01e651c30f3cfa9417f5c9560e592443"
  },
  {
    "url": "guide/page.html",
    "revision": "447625b55d1fda74bc9a6d773c7ea609"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "5c5296f67f02786c88fd55bfbb511106"
  },
  {
    "url": "index.html",
    "revision": "888477bd5593e5ee4c0ba1bdbe226ecb"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
