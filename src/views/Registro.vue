<template>
  <div id="registro">
    <v-row justify="center">
      <v-col sm="8" md="6">
        <v-card class="mt-4 mb-2">
          <v-card-title>Registro</v-card-title>
          <v-card-subtitle>Si ya estás registrado hace click <router-link to="/login">acá</router-link> para iniciar sesión</v-card-subtitle>
          <form name="registro-form" @submit.prevent>
            <v-card-text>
              <v-text-field
                label="Mail"
                autocomplete="off"
                hide-details="auto"
                v-model="form.mail"
                type="email"
                required
              ></v-text-field>

              <v-text-field
                label="Usuario"
                autocomplete="off"
                hide-details="auto"
                v-model="form.username"
              ></v-text-field>

              <v-text-field
                class="mt-2"
                label="Contraseña"
                :type="showPassword ? 'text' : 'password'"
                hide-details="auto"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                v-model="form.password"
                @click:append="showPassword = !showPassword"
              ></v-text-field>

              <v-text-field
                label="Apellido y nombre"
                autocomplete="off"
                hide-details="auto"
                v-model="form.nombre"
              ></v-text-field>

              <v-menu
                v-model="fechaDeNacimientoMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="form.fechaNacimiento"
                    label="Fecha de nacimiento"
                    v-bind="attrs"
                    v-on="on"
                    readonly
                    @blur="fechaDeNacimientoDate = parseDate(form.fechaDeNacimiento)"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="fechaDeNacimientoDate"
                  @input="fechaDeNacimientoMenu = false"
                ></v-date-picker>
              </v-menu>

              <v-text-field
                label="Profesión"
                autocomplete="off"
                hide-details="auto"
                v-model="form.profesion"
              ></v-text-field>
            </v-card-text>

            <v-card-text>
              <p>O podés registrarte con las siguientes redes sociales</p>
              <v-row>
                <v-col md="3">
                  <v-btn :disabled="isEmpresa" class="mr-2 white--text" color="red">Google</v-btn>
                </v-col>
                <v-col md="3">
                  <v-btn :disabled="isEmpresa" class="mr-2 white--text" color="blue">Facebook</v-btn>
                </v-col>
                <v-col md="3">
                  <v-btn :disabled="isEmpresa" class="mr-2 white--text" color="light-blue">Twitter</v-btn>
                </v-col>
                <v-col md="3">
                  <v-btn :disabled="isEmpresa" color="blue" class="white--text">LinkedIn</v-btn>
                </v-col>
              </v-row>
            </v-card-text>

            <v-divider />

            <v-card-text>
              <v-switch
                v-model="isEmpresa"
                color="primary"
                label="Me quiero registrar como una empresa"
                @change="onChange"
              ></v-switch>
            </v-card-text>

            <v-card-text v-if="isEmpresa">
              Para registrarte como una empresa necesitamos que cargues los
              siguientes datos adicionales:

              <empresa-form />
            </v-card-text>

            <v-card-text>
              <!-- <a href="#">Ver términos y condiciones</a> -->
              <v-checkbox
                v-model="aceptoTerminos"
                label="Acepto términos y condiciones"
              >
                <template #label>
                  <div>He leído y aceptado los <a href="#" @click.stop>términos y condiciones</a></div>
                </template>
              </v-checkbox>
            </v-card-text>

            <v-card-actions>
              <v-btn type="submit" color="primary" dark @click="handleSubmit">
                Registrate
              </v-btn>

              <v-dialog v-model="dialog" persistent max-width="400">
                <v-card>
                  <v-card-title class="headline">
                    ¡Ya casi estás registrado!
                  </v-card-title>
                  <v-card-text
                    ><p>
                      Te enviamos un mail a
                      <strong>{{ form.mail }}</strong> para que continues con el
                      registro.
                    </p>
                    <p>
                      Una vez que confirmes tu identidad vas a poder ingresar en
                      este sitio y disfrutar del mejor contenido.
                    </p></v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="$router.replace('/')">
                      Ir a inicio
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import EmpresaForm from '../components/EmpresaForm.vue';
import Usuario from "../models/Usuario";
import UsuarioEmpresa from "../models/UsuarioEmpresa";

export default {
  components: { EmpresaForm },
  name: "Registro",
  data: () => ({
      dialog: false,
      form: new Usuario(),
      showPassword: false,
      fechaDeNacimientoMenu: false,
      fechaDeNacimientoDate: null,
      isEmpresa: false,
      aceptoTerminos: false,
  }),
  methods: {
    handleSubmit() {
      if (document.forms["registro-form"].checkValidity()) {
        this.dialog = true;
      }
    },
    onChange(checked) {
      if (checked) {
        this.form = new UsuarioEmpresa(this.form);
      } else {
        this.form = new Usuario(this.form);
      }
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
  },
  watch: {
    fechaDeNacimientoDate () {
      this.form.fechaNacimiento = this.formatDate(this.fechaDeNacimientoDate)
    },
  },
};
</script>

<style>
#registro .v-text-field__details {
  display: none !important;
}

#registro .v-input__slot {
  margin-bottom: 0;
}

#registro .v-input {
  margin: 10px 0;
}

#registro .v-input:first-child {
  margin-top: 0;
}
</style>