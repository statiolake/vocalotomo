<template>
  <v-app class="blue-grey lighten-5">
    <v-row justify="center" class="mt-2">
      <v-card width="800">
        <h1>{{ livetitle }}</h1>
        <div class="input_body">
          <div class="input_area">
            <!-- <input type="file" name="example" ref="preview" accept="image/*" multiple required> -->
            <p id="error" v-show="error">{{ error }}</p>
            <label>
              <!-- <img :src="avatar" alt="Avatar" class="image"> -->
              <div
                class="drop_area"
                @dragenter="dragEnter"
                @dragleave="dragLeave"
                @dragover.prevent
                @drop.prevent="dropFile()"
                :class="{ enter: isEnter }"
                @change="onImageChange"
              >
                ファイルをドラッグ&ドロップしてください！
                <!-- <div> -->

                <input
                  type="file"
                  accept="image/*"
                  @change="onImageChange"
                  multiple
                />
              </div>
            </label>
            <v-row class="mt-5" justify="center"
              >JPEG, PNG に対応しています</v-row
            >

            <br />
            <div>
              <v-row justify="center">
                <li
                  class="flex-col"
                  v-for="(file, index) in files"
                  :key="index"
                  @click="deleteFile(index)"
                >
                  <!-- {{ index }} -->
                  <div style="position: relative">
                    <span class="delete-mark">×</span>
                    <!-- <img class="file_icon" src="../assets/icon.png" /> -->
                    <v-img
                      max-width="80"
                      max-height="80"
                      class="file_icon"
                      :src="url[index]"
                    />
                    <!-- <img class="file_icon" :src="images[index]"> -->
                  </div>
                  <span>{{ file.name }}</span>
                </li>
              </v-row>
            </div>

            <br />
            <v-row justify="center">
              <div v-show="files.length"></div>
            </v-row>
            <v-row class="mt-5" justify="center">
              <v-col cols="6">
                <v-textarea
                  v-model="comment"
                  hint="コメントを入力してください"
                  label="コメント"
                  auto-grow
                  outlined
                >
                </v-textarea>
              </v-col>
            </v-row>
          </div>
        </div>
        <v-row justify="center">
          <button class="button" v-on:click="upload" v-bind:disabled="isPushed">
            {{ button_text }}
          </button>
        </v-row>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "Tweet",
  data() {
    return {
      livetitle: "00月00日開催 ライブ",
      error: "",
      isEnter: false,
      files: [],
      images: [],
      url: [],
      test: "",
      isPushed: false,
      button_text: "送信",
      username: "undefined user",
      tripIdNum: "",
      popup: false,
      username_upper: "",
      comment: "",
    };
  },
  mounted: function () {
    this.tripIdNum = this.$store.getters["trip/getNumTripID"];
    this.username = this.$store.getters["user/getUserName"];
    this.username_upper = this.username.slice(0, 1).toUpperCase();
  },
  methods: {
    // setError (error, text) {
    //   this.error = (error.response && error.response.data && error.response.data.error) || text
    // },
    changeButton() {
      this.isPushed = true;
      this.button_text = "送信中";
    },
    dragEnter() {
      this.isEnter = true;
    },
    dragLeave() {
      this.isEnter = false;
    },
    deleteFile(index) {
      this.files.splice(index, 1);
      this.images.splice(index, 1);
    },
    checkEachFile(files) {
      return new Promise((resolve) => {
        files.forEach((file) => {
          this.processFile(file);
        });
        resolve();
      });
    },
    processFile(file) {
      // console.log("4: imagesを抜き出す処理")
      // console.log("5: ",file)
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const im = reader.result;
        this.url.push(im);
        const base64EncodedFile = im.split(",")[1];
        // console.log(base64EncodedFile); // base64にしたデータ
        this.images.push(base64EncodedFile);
        this.files.push(file);
      };
    },
    dropFile() {
      this.isEnter = false;
      const files = [...event.dataTransfer.files];
      this.checkEachFile(files);
    },
    onImageChange(e) {
      // console.log("files");
      const files = e.target.files || e.dataTransfer.files;
      this.checkEachFile(files);
    },
    upload: function () {
      const newpost = {
        id: 0,
        author: {
          id: this.$store.getters.id,
          email: this.$store.getters.email,
          username: this.$store.getters.username,
          profile: this.$store.getters.profile,
          icon: this.$store.getters.icon,
        },
        reply_target: "string",
        live: {
          id: 0,
          title: this.livetitle,
          started_at: "2022-01-08T03:20:33.056Z",
          live_url: "string",
          ticket_url: "string",
          registerers: 0,
        },
        text: this.comment,
        screenshots: this.url,
        posted_at: "2022-01-08T03:20:33.056Z",
      };
      let posts = this.$store.getters.posts;
      posts.push(newpost);
      this.$store.commit("setposts", posts);
      this.$router.push("/livedetail");
    },
  },
};
</script>

<style scoped>
input {
  display: none;
}
img:hover {
  opacity: 0.7;
}
#error {
  color: red;
}
label {
  display: flex;
  justify-content: center;
  align-items: center;
}
.drop_area {
  color: #42b983;
  font-weight: bold;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  border: 5px solid #42b983;
  border-radius: 15px;
}
.enter {
  border: 10px dotted #42b983;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.flex {
  display: flex;
  align-items: center;
}
.flex-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5em;
  font-size: 10px;
}
.delete-mark {
  position: absolute;
  top: -14px;
  right: -10px;
  font-size: 20px;
}
span {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.button {
  padding: 0.5em 1.5em;
  background-color: #0070a7;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  border-color: #0070a7;
}
</style>
