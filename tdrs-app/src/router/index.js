import { createRouter, createWebHistory } from "vue-router";

import Base from "@/components/Base.vue";
import Intro from "@/components/routes/Intro.vue";
import Home from "@/components/routes/Home.vue";
import Band from "@/components/routes/Band.vue";
import Album from "@/components/routes/Album.vue";
import Song from "@/components/routes/Song.vue";

import { BandEnum } from "@/common/constants";

const routes = [
  {
    path: "/",
    name: "base",
    component: Base
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/intro",
    name: "intro",
    component: Intro
  },
  {
    path: "/asob",
    name: "band-asob",
    component: Band,
    props: { bandEnum: BandEnum.ASOB, bandAbbrv: "asob" }
  },
  {
    path: "/asob/album/:albumOrderIndex",
    name: "album-asob",
    component: Album,
    props: { bandEnum: BandEnum.ASOB, bandAbbrv: "asob" }
  },
  {
    path: "/asob/album/:albumOrderIndex/song/:songOrderIndex",
    name: "song-asob",
    component: Song,
    props: { bandEnum: BandEnum.ASOB, bandAbbrv: "asob" }
  },
  {
    path: "/btmi",
    name: "band-btmi",
    component: Band,
    props: { bandEnum: BandEnum.BTMI, bandAbbrv: "btmi" }
  },
  {
    path: "/btmi/album/:albumOrderIndex",
    name: "album-btmi",
    component: Album,
    props: { bandEnum: BandEnum.BTMI, bandAbbrv: "btmi" }
  },
  {
    path: "/btmi/album/:albumOrderIndex/song/:songOrderIndex",
    name: "song-btmi",
    component: Song,
    props: { bandEnum: BandEnum.BTMI, bandAbbrv: "btmi" }
  },
  {
    path: "/jr",
    name: "band-jr",
    component: Band,
    props: { bandEnum: BandEnum.JR, bandAbbrv: "jr" }
  },
  {
    path: "/jr/album/:albumOrderIndex",
    name: "album-jr",
    component: Album,
    props: { bandEnum: BandEnum.JR, bandAbbrv: "jr" }
  },
  {
    path: "/jr/album/:albumOrderIndex/song/:songOrderIndex",
    name: "song-jr",
    component: Song,
    props: { bandEnum: BandEnum.JR, bandAbbrv: "jr" }
  },
  {
    path: "/av",
    name: "band-av",
    component: Band,
    props: { bandEnum: BandEnum.AV, bandAbbrv: "av" }
  },
  {
    path: "/av/album/:albumOrderIndex",
    name: "album-av",
    component: Album,
    props: { bandEnum: BandEnum.AV, bandAbbrv: "av" }
  },
  {
    path: "/av/album/:albumOrderIndex/song/:songOrderIndex",
    name: "song-av",
    component: Song,
    props: { bandEnum: BandEnum.AV, bandAbbrv: "av" }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
