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
      <div>¿Olvidaste tu contraseña? <router-link to="/recuperar-contraseña">Recuperar contraseña</router-link></div>
      <div>
        ¿No tenés cuenta? <router-link to="/registro">Registrate</router-link>
      </div>
    </v-container>
  </div>
</template>

<script>
import User from '../models/User';

export default {
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
        this.$store.commit('SET_USER', new User({
          nombre: 'Roberto Juarroz',
          username: this.user,
          mail: 'roberto.juarroz@gmail.com',
          tipo: 0,
          imgUrl: 'https://randomuser.me/api/portraits/men/84.jpg'
        }));
        userFound = true;
      }

      if (this.user === 'empresa' && this.pass === 'empresa') {
        this.$store.commit('SET_USER', new User({
          nombre: 'Plásticos SRL',
          username: this.user,
          mail: 'plasticossrl@gmail.com',
          tipo: 1,
          imgUrl: 'https://randomuser.me/api/portraits/lego/1.jpg'
        }));
        userFound = true;
      }

      if (this.user === 'admin' && this.pass === 'admin') {
        this.$store.commit('SET_USER', new User({
          nombre: 'Emma Zunz',
          username: this.user,
          mail: 'emmazunz@gmail.com',
          tipo: 2,
          imgUrl: 'https://randomuser.me/api/portraits/women/63.jpg'
        }));
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