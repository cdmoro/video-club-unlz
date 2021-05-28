<template>
  <div class="login-page">
    <v-container>
      <v-row justify="center">
        <v-col sm="8" md="4">
          <v-card class="mt-4 mb-2">
            <v-card-title>Ingreso</v-card-title>
            <v-card-text>
              <v-alert v-if="errorMessage.length > 0" type="error">{{
                errorMessage
              }}</v-alert>

              <v-text-field
                label="Usuario"
                autocomplete="off"
                hide-details="auto"
                :error="errorMessage.length > 0"
                v-model="user"
              ></v-text-field>

              <v-text-field
                class="mt-2"
                label="Contraseña"
                :type="showPassword ? 'text' : 'password'"
                hide-details="auto"
                :error="errorMessage.length > 0"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                v-model="pass"
                @click:append="showPassword = !showPassword"
              ></v-text-field>

              <v-btn class="mt-4" color="primary" dark @click="login"
                >Ingresar</v-btn
              >
            </v-card-text>
          </v-card>
          <div>
            ¿Olvidaste tu contraseña?

            <v-dialog max-width="600">
              <template v-slot:activator="{ on, attrs }">
                <a
                  href="#"
                  class="white--text"
                  v-bind="attrs"
                  v-on="on"
                  @click="recuperarMail = ''"
                  >Recuperar contraseña</a
                >
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-card-title>Recuperar contraseña</v-card-title>

                  <v-card-text class="mb-2">
                    <v-text-field
                      label="Ingresá tu dirección de mail"
                      autocomplete="off"
                      hide-details="auto"
                      type="mail"
                      v-model="recuperarMail"
                      autofocus
                    ></v-text-field>
                  </v-card-text>

                  <v-card-actions
                    class="justify-end flex-column-reverse flex-sm-row"
                  >
                    <v-btn
                      text
                      class="mt-3 mt-sm-0"
                      @click="dialog.value = false"
                      >Cancelar</v-btn
                    >

                    <v-btn
                      color="primary"
                      @click="
                        dialog.value = false;
                        snackbar = true;
                      "
                      >Recuperar contraseña</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </div>

          <div>
            ¿No tenés cuenta?
            <router-link to="/registro" class="white--text"
              >Registrate</router-link
            >
          </div>
        </v-col></v-row
      >

      <v-snackbar v-model="snackbar" :timeout="4000" right bottom>
        ¡Se envió un mail a tu casilla de correo!
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import USERS from "../users";

export default {
  data() {
    return {
      errorMessage: "",
      user: "",
      pass: "",
      showPassword: false,
      recuperarMail: "",
      snackbar: false,
    };
  },
  methods: {
    login() {
      if (!this.user || !this.pass) {
        this.errorMessage = "Error. Usuario y/o contraseña son incorrectos.";
        return;
      }

      let userFound = false;

      if (this.user === "user" && this.pass === "user") {
        this.$store.commit("SET_USER", USERS[0]);
        userFound = true;
      }

      if (this.user === "empresa" && this.pass === "empresa") {
        this.$store.commit("SET_USER", USERS[1]);
        userFound = true;
      }

      if (this.user === "admin" && this.pass === "admin") {
        this.$store.commit("SET_USER", USERS[2]);
        userFound = true;
      }

      if (userFound) {
        this.$router.replace("/");
      } else {
        this.errorMessage = "Usuario no encontrado";
      }
    },
  },
};
</script>

<style>
</style>