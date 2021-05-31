<template>
  <div>
      <h2>Mis publicidades</h2>
      <div v-if="!$store.getters.isEmpresa" class="mt-4">
        <v-alert type="error">Tu perfil de usuario actual no permite realizar esta acción</v-alert>
        <p>Si querés empezar a publicar publicidades tenés que cambiar tu cuenta a una cuenta de tipo <strong>Empresa</strong>.</p>
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
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click="upgradeAccountError = false"
              >Cambiar mi cuenta</v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-card-title>
                Cambiar tipo de cuenta
              </v-card-title>

              <v-card-text>
                ¿Estás seguro de cambiar el tipo de cuenta a una cuenta <strong>Empresa</strong>? Esta acción no puede deshacerse.
                <v-alert v-if="upgradeAccountError" class="mt-3" type="error">Hay errores en el formulario. Por favor, corregilos para poder continuar.</v-alert>
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
        <form name="publish-ad-form">
          <v-alert type="info" class="mt-4">Funcionalidad no está implementada aun</v-alert>
        </form>
      </div>
  </div>
</template>

<script>
import EmpresaForm from '../components/EmpresaForm.vue';
export default {
  components: { EmpresaForm },
  name: 'MisPublicidades',
  data() {
    return {
      upgradeAccountError: false,
    }
  },
  methods: {
    upgradeAccount() {
      if (document.forms['upgrade-account-form'].checkValidity()) {
        this.$store.commit('UPGRADE_USER_ACCOUNT');
      } else {
        this.upgradeAccountError = true;
      }
    }
  }
}
</script>

<style>

</style>