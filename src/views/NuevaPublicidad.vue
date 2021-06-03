<template>
  <div>
    <h2>Publicar publicidad</h2>
    <v-stepper class="mt-4" vertical non-linear v-model="stepper">
      <v-stepper-step editable step="1"> Tipo de publicación </v-stepper-step>

      <v-stepper-content step="1">
        <p>
          Podés elegir uno o más generos para que tu publicidad aparezca, si no
          seleccionás ninguno tu publicidad se va a ver en todos los géneros.
        </p>
        <v-select multiple :items="generos" label="Géneros"></v-select>
        <v-btn color="primary" @click="stepper = 2">Continuar</v-btn>
      </v-stepper-content>

      <v-stepper-step editable step="2"> Spot publicitario </v-stepper-step>

      <v-stepper-content step="2">
        <p>
          Podés subir un spot publicitario (video) o una serie de imágenes (hasta diez) si no
          disponés de uno.
        </p>

        <v-file-input
        label="Video o imágenes"
          chips
          counter
          multiple
          show-size
          small-chips
          truncate-length="20"
        ></v-file-input>

<v-subheader>Duración del spot publicitario (segundos)</v-subheader>
          <v-card-text>
            <v-slider
              v-model="tiempoSpot"
              ticks
              step="15"
              thumb-label="always"
              prepend-icon="mdi-timer-outline"
              :min="15"
              :max="120"
            ></v-slider>
          </v-card-text>

        <v-btn color="primary" @click="stepper = 3">Continuar</v-btn>
      </v-stepper-content>

      <v-stepper-step step="3"> Resumen </v-stepper-step>

      <v-stepper-content step="3">
        <p>Esto es lo que vas a tener que abonar para publicar tu publicidad:</p>
        <h3>Total</h3>
        <h2>$ {{ tiempoSpot * 40 }}</h2>
        <v-divider  class="my-4" />
        <p>Por favor, elegí el medio de pago</p>
        <v-select :items="formasDePago" label="Forma de pago"></v-select>
        <v-alert type="info">Se va a verificar en un plazo no mayor a dos horas el pago para que comience a actuar la publicidad.</v-alert>
        <v-btn color="primary" @click="stepper = 4">Pagar</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4"> ¡Listo! </v-stepper-step>

      <v-stepper-content step="4">
        <div class="mb-4">
          Se te va a notificar por mail y por whatsapp cuando tu publicidad esté
          activa.
        </div>
        <v-btn color="primary" to="/mis-publicidades"
          >Volver a Mis publicidades</v-btn
        >
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: "PublicarPublicidad",
  data() {
    return {
      tiempoSpot: 60,
      stepper: 1,
      formasDePago: [
        "Efectivo (pago en sucursales habilitadas)",
        "Tarjeta de débito",
        "Tarjeta de crédito",
        "MercadoPago",
        "Paypal",
      ],
      generos: [
        "Acción",
        "Animación",
        "Aventura",
        "Ciencia Ficción",
        "Comedia",
        "Crimen",
        "Documental",
        "Drama",
        "Fantasía",
        "Foreign",
        "Guerra",
        "Historia",
        "Pelicula De La Televisión",
        "Romance",
        "Suspense",
        "Terror",
        "Western",
        "Misterio",
      ],
    };
  },
};
</script>

<style>
</style>