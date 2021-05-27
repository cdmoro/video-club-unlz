import Vue from 'vue';
import Vuex from 'vuex';
import Usuario from '../models/Usuario';
import router from '../router';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: new Usuario(),
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
          state.user = new Usuario();
          router.replace('/');
      },
      UPGRADE_USER_ACCOUNT(state) {
        state.user.tipo = 1;
      }
  },
  actions: {},
});
