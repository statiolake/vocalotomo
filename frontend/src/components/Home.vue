<template>
    <v-app>
        <v-list
            two-line
        >
            <v-list-item
                v-for="live in lives"
                :key="live.text"
            >
                <v-card width="640px" class="my-2 py-2 mx-auto">
                    <v-list-item-content>
                        <v-list-item-title v-text="live.date + ' ' + live.title"></v-list-item-title>
                        <v-list-item-subtitle v-text="live.detail + '人が視聴予定です'"></v-list-item-subtitle>
                    </v-list-item-content>
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
    mounted() {
        axios
            .get('/lives')
            .then((res) => {
                this.info = res.data;
                console.log(res.data)
            });
    },
};
</script>
