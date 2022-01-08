<template>
  <v-app class="blue-grey lighten-5">
    <v-row justify="center">
      <v-list width="500" class="mt-5">
        <v-list-item v-for="message in messeages" :key="message.id">
          <v-list-item-avatar>
            <v-img src="../assets/testuser.png" max-width="100" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6">{{
              message.sender.username
            }}</v-list-item-title>
            <div>{{ message.text }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-row>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field label="入力してください" v-model="inputText" required solo>
      </v-text-field>
      <v-spacer />
      <v-btn color="primary mr-4" @click="onClickTweet">送信</v-btn>
    </v-form>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      messeages: [
        {
          id: 0,
          sender: {
            id: 0,
            email: "string",
            username: "ユーザー1",
            profile: "string",
            icon: "string",
          },
          receiver: {
            id: 0,
            email: "string",
            username: "string",
            profile: "string",
            icon: "string",
          },
          sent_at: "2022-01-08T01:09:48.250Z",
          text: "message",
        },
        {
          id: 0,
          sender: {
            id: 0,
            email: "string",
            username: "string",
            profile: "string",
            icon: "string",
          },
          receiver: {
            id: 0,
            email: "string",
            username: "string",
            profile: "string",
            icon: "string",
          },
          sent_at: "2022-01-08T01:09:48.250Z",
          text: "message",
        },
        {
          id: 0,
          sender: {
            id: 0,
            email: "string",
            username: "string",
            profile: "string",
            icon: "string",
          },
          receiver: {
            id: 0,
            email: "string",
            username: "string",
            profile: "string",
            icon: "string",
          },
          sent_at: "2022-01-08T01:09:48.250Z",
          text: "message",
        },
      ],

      inputText: "",
    };
  },

  methods: {
    onClickTweet: function () {
      this.messeages.push({
        id: 0,
        sender: {
          id: this.$store.getters.id,
          email: this.$store.getters.email,
          username: this.$store.getters.username,
          profile: this.$store.getters.profile,
          icon: this.$store.getters.icon,
        },
        receiver: {
          id: 0,
          email: "string",
          username: "string",
          profile: "string",
          icon: "string",
        },
        sent_at: "2022-01-08T01:09:48.250Z",
        text: this.inputText,
      });
    },
  },
};
</script>

<style scoped></style>
