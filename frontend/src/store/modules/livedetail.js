const state = {
  posts: [
    {
      id: 0,
      author: {
        id: 0,
        email: "string",
        username: "ユーザー1",
        profile: "string",
        icon: "string",
      },
      reply_target: "string",
      live: {
        id: 0,
        title: "string",
        started_at: "2022-01-07T23:10:43.848Z",
        live_url: "string",
        ticket_url: "string",
        registerers: 0,
      },
      text: "最高のライブだった！特に〇〇とかライブ編曲神",
      screenshots: [require("@/assets/testphotos/testphoto.jpeg")],
      posted_at: "2022-01-07T23:10:43.848Z",
    },
    {
      id: 0,
      author: {
        id: 0,
        email: "string",
        username: "ユーザー２",
        profile: "string",
        icon: "string",
      },
      reply_target: "string",
      live: {
        id: 0,
        title: "string",
        started_at: "2022-01-07T23:10:43.848Z",
        live_url: "string",
        ticket_url: "string",
        registerers: 0,
      },
      text: "今回のライブ〇〇さん好きな人は激アツだろうな〜",
      screenshots: [require("@/assets/testphotos/testphoto1.jpeg")],
      posted_at: "2022-01-07T23:10:43.848Z",
    },
    {
      id: 0,
      author: {
        id: 0,
        email: "string",
        username: "ユーザー3",
        profile: "string",
        icon: "string",
      },
      reply_target: "string",
      live: {
        id: 0,
        title: "string",
        started_at: "2022-01-07T23:10:43.848Z",
        live_url: "string",
        ticket_url: "string",
        registerers: 0,
      },
      text: "最高だった！",
      screenshots: [require("@/assets/testphotos/testphoto2.jpeg")],
      posted_at: "2022-01-07T23:10:43.848Z",
    },
  ],
};

const getters = {
  // id: (state) => state.id,
  // email: (state) => state.email,
  // username: (state) => state.username,
  // profile: (state) => state.profile,
  // icon: (state) => state.icon,
  posts: (state) => state.posts,
};

const actions = {};

const mutations = {
  setposts(state, posts) {
    state.posts = posts;
  },
  deleteuser(state) {
    state.posts = [];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
