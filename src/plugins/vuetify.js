import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1600,
    },
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {},
  },
});