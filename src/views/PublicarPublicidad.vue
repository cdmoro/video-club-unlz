<template>
  <div>
      <h2>Publicar publicidad</h2>
      <div v-if="!$store.getters.isEmpresa" class="mt-4">
        <v-alert type="error">Tu perfil de usuario actual (Usuario) no permite esta acción</v-alert>
        <p>Si querés empezar a publicar publicidades podés cambiar tu cuenta a una cuenta de tipo <strong>Empresa</strong>.</p>
        <v-flex>
          <v-btn class="mr-3" to="/">Volver</v-btn>
          <!-- <v-btn color="primary" @click="upgradeAccount">Quiero cambiar mi cuenta</v-btn> -->

          <v-dialog max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              v-bind="attrs"
              v-on="on"
              >Quiero cambiar mi cuenta</v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-card-title>
                Cambiar tipo de cuenta
              </v-card-title>

              <v-card-text>
                ¿Estás seguro de cambiar el tipo de cuenta a una cuenta <strong>Empresa</strong>? Esta acción no puede deshacerse.
              </v-card-text>

              <v-card-actions
                class="justify-end flex-column-reverse flex-sm-row"
              >
                <v-btn text class="mt-3 mt-sm-0" @click="dialog.value = false"
                  >Cancelar</v-btn
                >

                <v-btn
                  color="primary"
                  @click="upgradeAccount"
                  >Cambiar cuenta</v-btn
                >
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
        </v-flex>
      </div>
      <div v-else>
        <form>
          Formulario
        </form>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    upgradeAccount() {
      this.$store.commit('UPGRADE_USER_ACCOUNT');
    }
  }
}
</script>

<style>

</style>