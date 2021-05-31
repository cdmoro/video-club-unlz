<template>
  <div id="empresa-form">
    <v-text-field
      label="Nombre de la empresa"
      autocomplete="off"
      hide-details="auto"
      v-model="form.nombreEmpresa"
    ></v-text-field>

    <v-text-field
      label="CUIT/CUIL"
      type="number"
      autocomplete="off"
      hide-details="auto"
      v-model="form.identificacionTributaria"
    ></v-text-field>

    <v-text-field
      label="Rubro"
      autocomplete="off"
      hide-details="auto"
      v-model="form.rubro"
    ></v-text-field>

    <v-menu
      v-model="fechaInicioActividadMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="form.fechaInicioActividad"
          label="Fecha inicio actividad"
          v-bind="attrs"
          v-on="on"
          readonly
          @blur="
            fechaInicioActividadDate = parseDate(form.fechaInicioActividad)
          "
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="fechaInicioActividadDate"
        @input="fechaInicioActividadMenu = false"
      ></v-date-picker>
    </v-menu>

    <v-text-field
      label="Mail responsable a cargo"
      autocomplete="off"
      hide-details="auto"
      v-model="form.responsableMail"
    ></v-text-field>

    <v-text-field
      label="Télefono responsable a cargo"
      autocomplete="off"
      hide-details="auto"
      v-model="form.responsableTelefono"
    ></v-text-field>

    <v-text-field
      label="Celular responsable a cargo"
      autocomplete="off"
      hide-details="auto"
      v-model="form.responsableCelular"
    ></v-text-field>

    <v-select
      v-model="form.formaPago"
      :items="formasDePago"
      label="Forma de pago"
      multiple
      chips
      hint="¡Podés elegir más de una!"
      persistent-hint
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "EmpresaForm",
  data() {
    return {
      form: {},
      fechaInicioActividadMenu: false,
      fechaInicioActividadDate: null,
      formasDePago: [
        "Efectivo (pago en sucursales habilitadas)",
        "Tarjeta de débito",
        "Tarjeta de crédito",
        "MercadoPago",
        "Paypal",
      ],
    };
  },
  methods: {
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
  },
  watch: {
    fechaInicioActividadDate() {
      this.form.fechaInicioActividad = this.formatDate(
        this.fechaInicioActividadDate
      );
    },
  },
};
</script>

<style>
#empresa-form .v-text-field__details {
  display: none !important;
}

#empresa-form .v-input__slot {
  margin-bottom: 0;
}

#empresa-form .v-input {
  margin: 10px 0;
}

#empresa-form .v-input:first-child {
  margin-top: 0;
}
</style>