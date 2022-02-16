import Vue from "vue";
import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://stock-trader-b0d6b-default-rtdb.firebaseio.com/",
    });
  },
});
