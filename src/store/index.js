import Vue from 'vue';
import Vuex from 'vuex';
import User from '../models/User';
import router from '../router';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
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
      },
      UPGRADE_USER_ACCOUNT(state) {
        state.user.tipo = 1;
      }
  },
  actions: {},
});
