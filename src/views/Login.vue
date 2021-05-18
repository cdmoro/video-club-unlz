<template>
  <div class="login-page">
    <v-container>
      <h2>Ingreso</h2>
      <v-alert v-if="errorMessage.lenth > 0" icon="mdi-account" type="error" class="mt-4"
        >{{ errorMessage }}</v-alert
      >

      <v-text-field
        label="Usuario"
        autocomplete="off"
        hide-details="auto"
        :error="errorMessage.length > 0"
        v-model="user"
      ></v-text-field>

      <v-text-field
        label="Contraseña"
        type="password"
        hide-details="auto"
        :error="errorMessage.length > 0"
        v-model="pass"
      ></v-text-field>

      <v-btn class="mt-4 mb-2" color="primary" dark @click="login"
        >Ingresar</v-btn
      >
      <div>¿Olvidaste tu contraseña? <router-link to="/recuperar-contrasena">Recuperar contraseña</router-link></div>
      <div>
        ¿No tenés cuenta? <router-link to="/registro">Registrate</router-link>
      </div>
    </v-container>
  </div>
</template>

<script>
import USERS from '../users';

export default {
  mounted() {
    console.log(USERS);
  },
  data() {
    return {
      errorMessage: '',
      user: "",
      pass: "",
    };
  },
  methods: {
    login() {
      if (!this.user || !this.pass) {
        this.errorMessage = 'Error. Usuario y/o contraseña son incorrectos.';
        return;
      }

      let userFound = false;

      if (this.user === 'user' && this.pass === 'user') {
        this.$store.commit('SET_USER', USERS[0]);
        userFound = true;
      }

      if (this.user === 'empresa' && this.pass === 'empresa') {
        this.$store.commit('SET_USER', USERS[1]);
        userFound = true;
      }

      if (this.user === 'admin' && this.pass === 'admin') {
        this.$store.commit('SET_USER', USERS[2]);
        userFound = true;
      }

      if(userFound) {
        this.$router.replace('/');
      } else {
        this.errorMessage = 'Usuario no encontrado';
      }
    },
  },
};
</script>

<style>
</style>