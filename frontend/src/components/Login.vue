<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-email-outline"
            label="メールアドレス"
            v-model="email"
            :rules="rules"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock-outline"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            v-model="password"
          />
          <v-card-actions class="justify-center">
            <v-btn class="primary" to="/home" @click="submit">ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
// import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      
      rules: [
        (v) => !!v || "",
        (v) =>
          /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(
            v
          ) || "正しいメールアドレスを入力してください",
      ],
    };
  },
  methods: {
    submit() {
      //console.log(this.email, this.password);
    },
  },
};
</script>
