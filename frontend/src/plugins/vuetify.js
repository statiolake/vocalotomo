import Vue from 'vue';

import Vuetify, { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        themes: {
          light: {
            primary: "#95D7AE",
            secondary: colors.green,
            accent: colors.red.darken3,
            error: colors.red,
            warning: colors.yellow,
            info: colors.grey,
            success: "#795548",
          },
          dark: {
            primary: "95D7AE",
            secondary: colors.green,
          },
        },
      },
});
