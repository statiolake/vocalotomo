<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>ボカロトモ</v-toolbar-title>
    <!-- <div @click="onClickTitle">ボカロトモ</div> -->
    <v-spacer />
    <v-btn icon to="/search">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon to="/dmlist">
      <v-icon>mdi-email-outline</v-icon>
    </v-btn>
    <v-btn icon to="/myprofile">
      <v-icon>mdi-account-circle-outline</v-icon>
    </v-btn>
    <v-btn icon to="/">
      <v-icon>mdi-logout-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
