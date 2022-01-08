<template>
  <v-app>
    <v-card flat width="640px" class="mx-auto mt-5">
      <v-form width="640px">
        <v-text-field
          label="ライブを探す"
          clearable
          v-model="title"
          class="mx-auto"
        >
          <template v-slot:append>
            <v-btn color="primary" width="80px" class="mr-4" @click="search">検索</v-btn>
          </template>
        </v-text-field>
      </v-form>
    </v-card>
    <v-list two-line>
      <v-list-item v-for="live in lives" :key="live.text">
        <v-card width="640px" class="my-2 py-2 mx-auto d-flex align-center">
          <v-list-item-content>
            <v-list-item-title
              v-text="live.date + ' ' + live.title"
            ></v-list-item-title>
            <v-list-item-subtitle
              v-text="live.detail + '人が視聴予定です'"
            ></v-list-item-subtitle>
          </v-list-item-content>
          <div>
            <v-btn class="primary mr-4" width="80px" to="/liveRegister"
              >登録</v-btn
            >
          </div>
        </v-card>
      </v-list-item>
    </v-list>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
    name: 'App',
    data() {
        return{
            title: '',
            lives: [
              {
                    date: '2021-1-6',
                    title: 'XXXXライブ',
                    detail: '999'
                },
                {
                    date: '2021-1-7',
                    title: '〇〇ライブ',
                    detail: '0'
                }
            ]
        }
    },
    mounted: function(){
        axios
            .get('/lives')
            .then((res) => {
                this.lives = res.data;
                console.log(res.data)
            })
    },
    methods: {
        search(){
            axios
                .get('/lives', {live_id: this.title})
                .then((res) => {
                    this.lives = res.data;
                    console.log(res.data)
                })
        }
    }
};
</script>
