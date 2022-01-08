<template>
  <v-app class="blue-grey lighten-5">
    <v-container class="align-center justify-center white">
      <v-row justify="center" class="mt-6">
        <v-col :cols="colsize1" align="center">
          <v-avatar size="100">
            <v-img src="../assets/testuser.png"></v-img>
          </v-avatar>
        </v-col>
        <v-col :cols="colsize2" align-self="center">
          <!-- <v-text-field
            v-model="username"
            hint="ユーザー名を入力してください"
            label="ユーザー名"
          >
          </v-text-field> -->
          <div class="text-h5 font-weight-bold">{{ username }}</div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col :cols="colsize1" align="center">
          <v-row justify="center">
            <v-col>
              <v-btn width="100" class="ms-auto" @click="onClickDM">DM</v-btn>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col>
              <v-btn width="100" class="ms-auto">フォロー</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col :cols="colsize2" align="center">
          <!-- <v-textarea
            v-model="profile"
            hint="コメントを入力してください"
            label="コメント"
            auto-grow
            outlined
          >
          </v-textarea> -->
          <p class="text-justify">{{ profile }}</p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col :cols="colsize1" align="center"> </v-col>
        <v-col :cols="colsize2" align="center">
          <p class="text-h5 font-weight-bold">次回参戦予定</p>
          <div v-for="nextlive in nextlives" :key="nextlive.id">
            {{ nextlive.day }} {{ nextlive.name }}
          </div>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-6">
        <v-col :cols="colsize1" align="center"> </v-col>
        <v-col :cols="colsize2" align="center">
          <p class="text-h5 font-weight-bold">参戦記録</p>
          <div v-for="prevlive in prevlives" :key="prevlive.id">
            {{ prevlive.day }} {{ prevlive.name }}
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col :cols="colsize1" align="center"> </v-col>
        <v-col :cols="colsize2" align="center">
          <!-- <v-btn>編集</v-btn> -->
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Myprofile",
  data() {
    return {
      colsize1: 3,
      colsize2: 6,
      username: "ユーザー1",
      profile: "コメント",
      nextlives: [{ id: 1, day: "00月00日", name: "ミクライブ" }],
      prevlives: [
        { id: 1, day: "00月00日", name: "レンライブ" },
        { id: 2, day: "00月00日", name: "ミクライブ" },
      ],
    };
  },
  methods: {
    onClickDM: function () {
      this.$router.push("/dm");
    },
  },
};
</script>

<style scoped></style>
