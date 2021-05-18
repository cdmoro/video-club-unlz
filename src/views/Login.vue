<template>
  <div class="login-page">
    <v-container>
      <h2>Login</h2>
      <v-alert v-if="showError" icon="mdi-account" type="error" class="mt-4"
        >Error. Mail y/o contraseña son incorrectos.</v-alert
      >
      <v-text-field
        label="Mail"
        autocomplete="off"
        hide-details="auto"
        :error="showError"
      ></v-text-field>

      <v-text-field
        label="Contraseña"
        type="password"
        hide-details="auto"
        :error="showError"
      ></v-text-field>
        <v-btn class="mt-4 mb-2" color="primary" dark @click="login">Ingresar</v-btn>
        <div>¿No tenés cuenta? <router-link to="/registro">Registrate</router-link></div>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showError: false,
            user: '',
            pass: ''
        }
    },
    methods: {
        login() {
            if(!this.user || !this.pass) {
                this.showError = true;
            }
        }
    }
};
</script>

<style>
</style>