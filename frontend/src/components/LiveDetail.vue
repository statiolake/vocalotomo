<template>
  <v-app class="blue-grey lighten-5">
    <v-row justify="center">
      <v-card width="1000" height="auto">
        <v-list>
          <v-list-item>
            <h1>{{ livedata.title }}</h1>
            <v-list-item-icon>
              <v-btn fab dark color="indigo" @click="onClickTweet">
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
        <v-row justify="center">
          <!-- v-forで行う -->
          <v-card v-for="post in posts" :key="post.id" width="800">
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    src="../assets/testuser.png"
                    max-width="100"
                    @click="onClickUser"
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">{{
                    post.author.username
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <div>{{ post.text }}</div>
              </v-list-item>
              <v-list-item
                v-for="screenshot in post.screenshots"
                :key="screenshot"
              >
                <v-img :src="screenshot"></v-img>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="ml-auto">
                  <v-btn class="mx-2" fab dark small color="pink">
                    <v-icon dark> mdi-heart </v-icon>
                  </v-btn>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-card>
        </v-row>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
export default {
  mounted: function () {
    this.posts = this.$store.getters.posts;
    console.log(this.posts);
  },
  name: "LiveDetail",
  data() {
    return {
      livedata: {
        id: 0,
        title: "00月00日開催 ライブ",
        started_at: "2022-01-07T23:07:16.931Z",
        live_url: "string",
        ticket_url: "string",
        registerers: 0,
      },
      // posts: [
      //   {
      //     id: 0,
      //     author: {
      //       id: 0,
      //       email: "string",
      //       username: "ユーザー1",
      //       profile: "string",
      //       icon: "string",
      //     },
      //     reply_target: "string",
      //     live: {
      //       id: 0,
      //       title: "string",
      //       started_at: "2022-01-07T23:10:43.848Z",
      //       live_url: "string",
      //       ticket_url: "string",
      //       registerers: 0,
      //     },
      //     text: "最高のライブだった！特に〇〇とかライブ編曲神",
      //     screenshots: ["string"],
      //     posted_at: "2022-01-07T23:10:43.848Z",
      //   },
      //   {
      //     id: 0,
      //     author: {
      //       id: 0,
      //       email: "string",
      //       username: "ユーザー２",
      //       profile: "string",
      //       icon: "string",
      //     },
      //     reply_target: "string",
      //     live: {
      //       id: 0,
      //       title: "string",
      //       started_at: "2022-01-07T23:10:43.848Z",
      //       live_url: "string",
      //       ticket_url: "string",
      //       registerers: 0,
      //     },
      //     text: "今回のライブ〇〇さん好きな人は激アツだろうな〜",
      //     screenshots: ["string"],
      //     posted_at: "2022-01-07T23:10:43.848Z",
      //   },
      //   {
      //     id: 0,
      //     author: {
      //       id: 0,
      //       email: "string",
      //       username: "ユーザー3",
      //       profile: "string",
      //       icon: "string",
      //     },
      //     reply_target: "string",
      //     live: {
      //       id: 0,
      //       title: "string",
      //       started_at: "2022-01-07T23:10:43.848Z",
      //       live_url: "string",
      //       ticket_url: "string",
      //       registerers: 0,
      //     },
      //     text: "最高だった！",
      //     screenshots: ["string"],
      //     posted_at: "2022-01-07T23:10:43.848Z",
      //   },
      // ],
      posts: [],
    };
  },
  methods: {
    onClickUser: function () {
      this.$router.push("/userprofile");
    },
    onClickTweet: function () {
      this.$router.push("/tweet");
    },
  },
};
</script>

<style scoped></style>
