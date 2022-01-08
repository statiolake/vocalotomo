<template>
    <v-app>
        <v-card
            width="640px"
            class="my-2 mx-auto"
        >
            <v-list
                two-line
            >
                <v-list-item
                    v-for="dm in dms"
                    :key="dm.avatar"
                >
                    <v-list-item-avatar @click="onClick">
                        <v-img :src="dm.avatar" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-text="dm.sender"></v-list-item-title>
                        <v-list-item-subtitle v-text="dm.text"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-app>
</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    data() {
        return{
            dms: [
                {
                    id: '1',
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    sender: 'testuser',
                    text: 'testです〜'
                },
                {
                    id: '2',
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    sender: 'testuser2',
                    text: 'test2ですーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー'
                }
            ]
        }
    },
    mounted() {
        this.getMyId()
        axios
            .get('http://vocalotomo.herokuapp.com/directmessages')
            .then((res) => {
                this.info = res.data;
                console.log(res.data)
            });
    },
    methods: {
        getMyId(){
            axios
                .get('http://vocalotomo.herokuapp.com/auth/me')
                .then((res) => {
                    this.loginUser = res.data.id;
                    console.log(res.data.id)
                });
        }
    }
};
</script>