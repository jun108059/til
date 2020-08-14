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
    "revision": "f994f2243c02a7878397aa6cf1b7fd21"
  },
  {
    "url": "assets/css/0.styles.13c513c7.css",
    "revision": "7c3b0c37b9fa6917b11eef7e5303436c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.74ddd60d.js",
    "revision": "72e42c4ca8e475aab99c2102b56ba0a4"
  },
  {
    "url": "assets/js/11.9ff7e7c6.js",
    "revision": "ed616b05533307ad4d8486857f2470a4"
  },
  {
    "url": "assets/js/2.4a9a743f.js",
    "revision": "118ca506ba596098ae1130020ccdb1b8"
  },
  {
    "url": "assets/js/3.bb4b73f7.js",
    "revision": "c50e9096179172a76559a0a5c46432c4"
  },
  {
    "url": "assets/js/4.37cda206.js",
    "revision": "86778ed8c9738c102aa77c154a6e2b38"
  },
  {
    "url": "assets/js/5.33f65d88.js",
    "revision": "d59403b95234f646fc9b747cc41715b2"
  },
  {
    "url": "assets/js/6.2d326fcc.js",
    "revision": "3b534340d15088c33e810781dc6741cf"
  },
  {
    "url": "assets/js/7.a2b44bbf.js",
    "revision": "c7d76d93612c19220244e9f32680092e"
  },
  {
    "url": "assets/js/8.c951e517.js",
    "revision": "4b4940b37fc382cac97dd062698e400b"
  },
  {
    "url": "assets/js/9.bf61237c.js",
    "revision": "8e23151fb0acf384a39280f83404c181"
  },
  {
    "url": "assets/js/app.3310fb4f.js",
    "revision": "7dd1f176aa1ec5d5e56f8e70d8867857"
  },
  {
    "url": "data-structure/01.자료구조란.html",
    "revision": "a36207199a5b6e357e2f53f93839196d"
  },
  {
    "url": "data-structure/02.자료구조와-알고리즘이란.html",
    "revision": "8d99992450601c652452059b9971d725"
  },
  {
    "url": "data-structure/03.실습환경설정-주피터노트북.html",
    "revision": "8c7f47a5e93289e108b4556943a8e165"
  },
  {
    "url": "index.html",
    "revision": "f18d1f84e2b640caf211e94f2b9805fe"
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
