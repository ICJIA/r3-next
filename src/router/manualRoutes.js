const manualRoutes = [
  {
    path: "/404",
    name: "404",
    meta: {
      title: "404",
      showInSitemap: false
    },

    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue")
  },
  {
    path: "/news",
    name: "news",
    meta: {
      title: "news",
      showInSitemap: true,
      fileDownloadPath: "/downloads/"
    },

    component: () =>
      import(/* webpackChunkName: "sandbox" */ "../views/News.vue")
  },
  {
    path: "/sandbox",
    name: "sandbox",
    meta: {
      title: "sandbox",
      showInSitemap: false,
      fileDownloadPath: "/downloads/"
    },

    component: () =>
      import(/* webpackChunkName: "sandbox" */ "../views/Sandbox.vue")
  },
  {
    path: "/home",
    name: "altHome",
    redirect: "/"
  }
];

module.exports = manualRoutes;
