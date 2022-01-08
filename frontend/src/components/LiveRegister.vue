<template>
  <v-app>
    <v-card width="640px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ライブ登録</h1>
      </v-card-title>
      <p class="mx-4">{{ date }}開催 {{ title }}</p>
      <v-form>
        <v-text-field
          label="チケット番号"
          v-model="ticket_number"
          class="px-4"
        />
        <v-card-actions class="justify-center">
          <v-btn class="primary" @click="submit" to="/livedetail">登録</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      ticket_number: "",
      date: "2021-1-6",
      title: "XXXXライブ",
    };
  },
  methods: {
    submit() {
      //console.log(this.ticket_number);
    },
  },
};
</script>
