<template>
  <div>
    <h2>Mis publicidades</h2>
    <div v-if="!$store.getters.isEmpresa" class="mt-4">
      <v-alert type="error"
        >Tu perfil de usuario actual no permite realizar esta acción</v-alert
      >
      <p>
        Si querés empezar a publicar publicidades tenés que cambiar tu cuenta a
        una cuenta de tipo <strong>Empresa</strong>.
      </p>
      <p>Para continuar, te pedimos que ingreses los siguientes datos:</p>

      <v-card class="mb-4">
        <v-card-title>Datos requeridos</v-card-title>
        <v-card-text>
          <form name="upgrade-account-form">
            <empresa-form />
          </form>
        </v-card-text>
      </v-card>

      <v-flex>
        <v-btn class="mr-3" to="/" text dark>Volver</v-btn>

        <v-dialog max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">Cambiar mi cuenta</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-card-title> Cambiar tipo de cuenta </v-card-title>

              <v-card-text>
                ¿Estás seguro de cambiar el tipo de cuenta a una cuenta
                <strong>Empresa</strong>? Esta acción no puede deshacerse.
              </v-card-text>

              <v-card-actions
                class="justify-end flex-column-reverse flex-sm-row"
              >
                <v-btn text class="mt-3 mt-sm-0" @click="dialog.value = false"
                  >Cancelar</v-btn
                >

                <v-btn
                  color="primary"
                  @click="$store.commit('UPGRADE_USER_ACCOUNT')"
                  >Cambiar cuenta</v-btn
                >
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-flex>
    </div>
    <div v-else>
      <p>Creá, editá y eliminá tus campañas publicitarias.</p>

      <v-row>
        <v-col
          md="4"
          sm="4"
          cols="12"
          v-for="item in indicadores"
          :key="item.label"
        >
          <v-card class="mx-auto">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline">{{ item.title }}</div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ item.value }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                :color="item.color"
                class="rounded"
              >
                <v-icon dark x-large>{{ item.icon }}</v-icon>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>

      <v-data-table
        :headers="headers"
        :items="items"
        class="mt-4 elevation-1"
        hide-default-footer
      >
      </v-data-table>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab fixed bottom right v-bind="attrs" v-on="on" to="/nueva-publicidad">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Nueva publicidad</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import EmpresaForm from "../components/EmpresaForm.vue";
export default {
  components: { EmpresaForm },
  name: "MisPublicidades",
  data() {
    return {
      indicadores: [
        {
          title: "Publicidades",
          value: "2",
          icon: "mdi-bullhorn",
          subtitle: "activas",
          color: "pink",
        },
        {
          title: "Efectividad",
          value: "20",
          icon: "mdi-eye",
          subtitle: "clicks en tus publicidades",
          color: "blue",
        },
        {
          title: "Llegada",
          value: "50",
          icon: "mdi-account-voice",
          subtitle: "usuarios vieron tus publicidaes",
          color: "red",
        },
      ],
      headers: [
        {
          value: "nombre",
          text: "Nombre campaña",
        },
        {
          value: "aparecio",
          text: "Veces que apareció",
        },
        {
          value: "usuariosAlcanzados",
          text: "Usuarios alcanzados",
        },
        {
          value: "usuariosCompleto",
          text: "La vieron completa",
        },
        {
          value: "genero",
          text: "Género donde más se vio",
        },
      ],
      items: [
        {
          nombre: "Campaña Mayo 2021",
          aparecio: 2,
          usuariosAlcanzados: 10,
          usuariosCompleto: 6,
          genero: "Terror",
        },
        {
          nombre: "Campaña Abril 2021",
          aparecio: 12,
          usuariosAlcanzados: 40,
          usuariosCompleto: 25,
          genero: "Documental",
        },
      ],
    };
  },
};
</script>

<style>
</style>