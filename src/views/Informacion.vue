<template>
  <div class="about">
    <h2 class="mb-4">Información</h2>
    <p>
      Este sitio es un trabajo práctico para la materia
      <strong>Análisis y Diseño de Sistemas</strong> de la carrera
      <strong>Licenciatura en Gestión de la Información</strong> de la
      <strong>Universidad Nacional de Lomas de Zamora.</strong>
    </p>
    <h2 class="mb-4">Usuarios precargados</h2>
    <p>El sistema cuenta con tres usuarios precargados. Dichos ususarios representan a los tres roles disponibles: Usuario registrado, Usuario Empresa y Administrador del sistema.</p>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-avatar>
              <v-img :src="users[0].imgUrl"></v-img>
            </v-avatar>
          </v-card-text>
          <v-card-title>Usuario registrado</v-card-title>
          <v-card-subtitle>Datos de login</v-card-subtitle>
          <v-card-text>
            <p class="mb-0 text--primary">usuario: usuario</p>
            <p class="text--primary">contraseña: usuario</p>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="primary" text @click="login(0)">
              Ingresar al sistema
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <v-avatar>
              <v-img :src="users[1].imgUrl"></v-img>
            </v-avatar>
          </v-card-text>
          <v-card-title>Usuario empresa</v-card-title>
          <v-card-subtitle>Datos de login</v-card-subtitle>
          <v-card-text>
            <p class="mb-0 text--primary">usuario: empresa</p>
            <p class="text--primary">contraseña: empresa</p>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="primary" text @click="login(1)">
              Ingresar al sistema
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <v-avatar>
              <v-img :src="users[2].imgUrl"></v-img>
            </v-avatar>
          </v-card-text>
          <v-card-title>Dueño del sistema</v-card-title>
          <v-card-subtitle>Datos de login</v-card-subtitle>
          <v-card-text>
            <p class="mb-0 text--primary">usuario: admin</p>
            <p class="text--primary">contraseña: admin</p>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="primary" text @click="login(2)">
              Ingresar al sistema
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import USERS from '../users';

export default {
  data() {
    return {
      users: USERS
    }
  },
  methods: {
    login(userId) {
      this.$store.commit('SET_USER', USERS[userId]);
      this.$router.replace('/');
    }
  }
}
</script>