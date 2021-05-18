import Vue from 'vue';
import Vuex from 'vuex';
import User from '../models/User';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: new User(),
  },
  getters: {
    isUserLogged(state) {
      return state.user.username;
    },
    isUser(state) {
        return state.user.tipo === 0;
    },
    isEmpresa(state) {
        return state.user.tipo === 1;
    },
    isAdmin(state) {
        return state.user.tipo === 2;
    }
  },
  mutations: {
      SET_USER(state, user) {
          state.user = user;
      },
      LOGOUT(state) {
          state.user = new User();
          router.replace('/');
      }
  },
  actions: {},
});
