<template>
  <v-app>
    <component :is="headerComponent"></component>
    <v-main>
      <!-- <HelloWorld /> -->
      <!-- <Search /> -->
      <!-- <DmList /> -->
      <!-- <LiveDetail /> -->
      <!-- <Myprofile /> -->
      <!-- <Home />
      <Login />
      <Register />
      <LiveRegister /> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
//import LiveDetail from "./components/LiveDetail";
// import login from "./components/Login";
// import register from "./components/Register";
// import home from "./components/Home";
// import liveRegister from "./components/LiveRegister"
// import dmList from "./components/DmList";
// import search from "./components/Search";
import LoggedInHeader from "./components/LoggedInHeader";
import NotLoggedInHeader from "./components/NotLoggedInHeader";

export default {
  name: "App",

  components: {
    // HelloWorld,
    // LiveDetail,
    // Login,
    // Register,
    // Home,
    // LiveRegister,
    // DmList,
    // Search
    LoggedInHeader,
    NotLoggedInHeader,
  },
  computed: {
    headerComponent() {
      switch (this.$route.path) {
        case "/register":
          return "NotLoggedInHeader";
        case "/":
          return "NotLoggedInHeader";
        default:
          return "LoggedInHeader";
      }
    },
  },

  data: () => ({
    //
  }),
};
</script>
