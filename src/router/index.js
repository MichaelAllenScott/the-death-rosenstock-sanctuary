import { createRouter, createWebHistory } from "vue-router";

import Bands from "@/components/routes/Bands.vue";
import Band from "@/components/routes/Band.vue";
import Album from "@/components/routes/Album.vue";
import Song from "@/components/routes/Song.vue";

import { BandEnum } from "@/common/constants";

const routes = [
  {
    path: "/",
    name: "bands",
    component: Bands
  },
  {
    path: "/asob",
    name: "band-asob",
    component: Band,
    props: { bandEnum: BandEnum.ASOB }
  },
  {
    path: "/asob/album/:albumId",
    name: "album-asob",
    component: Album,
    props: { bandEnum: BandEnum.ASOB }
  },
  {
    path: "/asob/album/:albumId/song/:songId",
    name: "song-asob",
    component: Song,
    props: { bandEnum: BandEnum.ASOB }
  },
  {
    path: "/btmi",
    name: "band-btmi",
    component: Band,
    props: { bandEnum: BandEnum.BTMI }
  },
  {
    path: "/btmi/album/:albumId",
    name: "album-btmi",
    component: Album,
    props: { bandEnum: BandEnum.BTMI }
  },
  {
    path: "/btmi/album/:albumId/song/:songId",
    name: "song-btmi",
    component: Song,
    props: { bandEnum: BandEnum.BTMI }
  },
  {
    path: "/jr",
    name: "band-jr",
    component: Band,
    props: { bandEnum: BandEnum.JR }
  },
  {
    path: "/jr/album/:albumId",
    name: "album-jr",
    component: Album,
    props: { bandEnum: BandEnum.JR }
  },
  {
    path: "/jr/album/:albumId/song/:songId",
    name: "song-jr",
    component: Song,
    props: { bandEnum: BandEnum.JR }
  },
  {
    path: "/av",
    name: "band-av",
    component: Band,
    props: { bandEnum: BandEnum.AV }
  },
  {
    path: "/av/album/:albumId",
    name: "album-av",
    component: Album,
    props: { bandEnum: BandEnum.AV }
  },
  {
    path: "/av/album/:albumId/song/:songId",
    name: "song-av",
    component: Song,
    props: { bandEnum: BandEnum.AV }
  }
  /*{
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/About.vue"),
  },*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
