<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>ボカロトモ</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn icon class="mr-16" to="/register">
        <v-icon>mdi-account-plus-outline</v-icon>
        新規登録
      </v-btn>
      <v-btn icon class="mr-8" to="/">
        <v-icon>mdi-login-variant</v-icon>
        ログイン
      </v-btn>
    </v-toolbar-items>
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
