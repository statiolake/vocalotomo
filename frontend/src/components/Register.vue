<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">新規登録</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-email-outline"
            label="メールアドレス"
            v-model="email"
            :rules="rules_email"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock-outline"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            v-model="password"
            :rules="rules_password"
            :counter="min"
          />
          <v-text-field
            prepend-icon="mdi-account-circle-outline"
            label="表示名"
            v-model="username"
            :rules="rules_username"
            :counter="max"
          />
          <v-text-field
            prepend-icon="mdi-file-account-outline"
            label="プロフィール"
            v-model="profile"
            :rules="rules_profile"
          />
          <!-- <v-img
            :src="avatar"
            class="image"
          /> -->
          <v-file-input
            :rules="rules_icon"
            accept="image/png, image/jpeg"
            prepend-icon="mdi-camera"
            label="アイコン画像を選択"
          />
          <v-card-actions class="justify-center">
            <v-btn class="primary" to="/home" @click="submit">登録</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>
<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    const min = 8;
    const max = 200;
    return{
      showPassword: false,
      email: '',
      password: '',
      username: '',
      profile: '',
      avatar: '',
      // error: '',
      // message: '',
      rules_email: [
        v => !!v || '',
        v => /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(v) || ''
      ],
      rules_password: [
        v => !!v || '',
        v => (!!v &&  min <= v.length) || `${min}文字以上で入力してください`,
        v => /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i.test(v) || '半角英数字をそれぞれ1文字以上含めてください'
      ],
      rules_username: [
        v => !!v || ''
      ],
      rules_profile: [
        v => (!!v &&  max <= v.length) || `${max}文字以下で入力してください`
      ],
      rules_icon: [
        v => !v || v.size < 2000000 || '画像サイズの上限は2MBです',
      ],
    }
  },
  methods: {
    submit(){
      axios
        .post('/users', {email: 'this.email', password: 'this.password', username: 'this.username', profile: 'this.profile'})
        .then((res) => {
            console.log(res.data)
        });
    },
        //console.log(this.email, this.password, this.username, this.profile);
  },
};
</script>
