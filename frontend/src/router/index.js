import Vue from "vue";
import Router from "vue-router";

import LiveDetail from "../components/LiveDetail.vue";
import Myprofile from "../components/Myprofile.vue";
import Userprofile from "../components/Userprofile.vue";
import Tweet from "../components/Tweet.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register";
import Home from "../components/Home";
import LiveRegister from "../components/LiveRegister";
import DmList from "../components/DmList";
import Search from "../components/Search";
import DM from "../components/DM";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/livedetail",
      name: "livedetail",
      component: LiveDetail,
    },
    {
      path: "/myprofile",
      name: "myprofile",
      component: Myprofile,
    },
    {
      path: "/userprofile",
      name: "userprofile",
      component: Userprofile,
    },
    {
      path: "/tweet",
      name: "tweet",
      component: Tweet,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/liveRegister",
      name: "liveRegister",
      component: LiveRegister,
    },
    {
      path: "/dmList",
      name: "dmList",
      component: DmList,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/dm",
      name: "dm",
      component: DM,
    },
  ],
});
