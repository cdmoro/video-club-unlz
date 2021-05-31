<template>
  <div v-if="$store.getters.isUserLoggedIn">
      <h2>Configuración</h2>
      <v-card class="mt-4">
          <v-card-title>Notificaciones</v-card-title>
          <v-card-subtitle>Modifica la forma en que querés recibir las notificaciones de los úlitmos estrenos y los eventos deportivos.</v-card-subtitle>
          <v-card-text>
          </v-card-text>
      </v-card>
  </div>
  <div v-else>
    <h2>Acceso restringido</h2>
    <p>Para acceder a esta página primero tenér que estar logueado.</p>
    <v-btn to="/registro">Quiero registrarme</v-btn>
    <v-btn to="/" class="ml-3">Volver a inicio</v-btn>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>