const state = {
  id: 0,
  email: "string",
  username: "string",
  profile: "string",
  icon: "string",
};

const getters = {
  id: (state) => state.id,
  email: (state) => state.email,
  username: (state) => state.username,
  profile: (state) => state.profile,
  icon: (state) => state.icon,
};

const actions = {
  increment({ commit }) {
    commit("increment");
  },
};

const mutations = {
  setuser(state, user) {
    state.id = user.id;
    state.email = user.email;
    state.username = user.username;
    state.profile = user.profile;
    state.icon = user.icon;
  },
  deleteuser(state) {
    state = {
      id: 0,
      email: "string",
      username: "string",
      profile: "string",
      icon: "string",
    };
    console.log(state);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
