export default {
  env: process.env.ELEVENTY_ENV,
  name: "Bechno Kid's Hideout",
  url: "https://bechnokid.com",
  cssUrl: "/assets/css",
  jsUrl: "/assets/js",
  imgUrl: "/assets/images",
  desc: "The personal website of a beet disguised as a software engineer. Contains art, ramblings, and other things?",
  ogImgUrl: "/assets/images/og_image.png",
  lang: "en-US",
  author: {
    name: "Bechno Kid",
    email: "bechnokid@yahoo.com"
  },
  buttons:  [
    { alt: "88 by 31", src: "https://cdn.jsdelivr.net/gh/bechnokid/neocities@latest/public/assets/images/button.png"},
    { alt: "32 by 32", src: "https://cdn.jsdelivr.net/gh/bechnokid/neocities@latest/public/assets/images/button32x32.gif"},
    { alt: "200 by 40", src: "https://cdn.jsdelivr.net/gh/bechnokid/neocities@latest/public/assets/images/button200x40.png"}
  ],
  introLinks: [
    { name: 'Sitemap', url: '/sitemap' },
    { name: 'RSS', url: '/feeds' },
    { name: 'Contact', url: '/contact' }
  ],
  favicon: {
    prod: "/assets/images/favicon.ico",
    dev: "/assets/images/icon_meat.png"
  },
  updated: [
  ],
  new: [
    "Digimon",
    "Games"
  ],
  emotes: [
    "angry",
    "calm",
    "confused",
    "dead",
    "embarrassed",
    "excited",
    "happy",
    "love",
    "sad",
    "shock",
    "sleep",
    "wink",
    "worried",
  ],
}
