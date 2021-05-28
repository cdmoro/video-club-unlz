<template>
  <div>
      <h2 class="mb-4">Página no encontrada</h2>
      <v-alert type="warning">La página que estás buscando no existe... todavía</v-alert>
      <v-btn @click="$router.back()">Volver</v-btn>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>