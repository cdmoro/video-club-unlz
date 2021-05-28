<template>
  <div id="comprar-pack" v-if="knownTipo">
    <h2>Comprar pack ({{ tipo }})</h2>
    <p>
      En cuatro simples pasos podés adquirir uno de nuestro packs para que sigas
      disfrutando de nuestro contenido exclusivo.
    </p>
    <div v-if="tipo === 'adulto'" class="my-3">
      <v-stepper vertical v-model="adultoStepper" non-linear>
        <v-stepper-step step="1" :complete="adultoStepper > 1">
          Mayoría de edad
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-alert type="info"
            >Tu perfil está validado para ver este tipo de contenidos</v-alert
          >
          <v-btn color="primary" @click="adultoStepper = 2">Siguiente</v-btn>
        </v-stepper-content>

        <v-stepper-step editable step="2">
          {{ adultPanelTitle }}
          <small
            >Seleccioná una pélicula de nuestro ámplio catálogo de
            películas</small
          >
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-row>
            <v-col v-for="(media, i) of catalogoMedia" :key="i" sm="6" md="3">
              <media-card :media="media" @click="handleClickMedia(media)" />
            </v-col>
          </v-row>
        </v-stepper-content>

        <v-stepper-step editable step="3">
          Tiempo de contratación
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-subheader>¿Cuántas horas querés tener activo el pack?</v-subheader>
          <v-card-text>
            <v-slider
              v-model="tiempoAdulto"
              thumb-label="always"
              prepend-icon="mdi-alarm"
              :min="1"
              :max="50"
            ></v-slider>
          </v-card-text>
          <v-btn color="primary" @click="adultoStepper = 4">Siguiente</v-btn>
        </v-stepper-content>

        <v-stepper-step editable step="4"> Resumen </v-stepper-step>

        <v-stepper-content step="4">
          <p>Contenido seleccionado</p>
          <v-card class="flex" v-if="selectedMedia" width="300">
            <v-img
              height="150"
              width="300"
              :src="`https://image.tmdb.org/t/p/w300${selectedMedia.poster_path}`"
            />
            <v-card-title>{{ selectedMedia.title || selectedMedia.name }}</v-card-title>
            <v-card-text
              >Tiempo de contratación: {{ tiempoAdulto }} hora/s</v-card-text
            >
            <v-divider class="mx-4" />
            <v-card-title>Total: ${{ tiempoAdulto * 80 }},00</v-card-title>
          </v-card>

          <v-divider class="my-5" />

          <p>Elegí el medio de pago</p>
          <v-select :items="formasDePago" label="Forma de pago"></v-select>

          <v-btn color="primary" @click="adultoStepper = 5">Pagar</v-btn>
        </v-stepper-content>

        <v-stepper-step editable step="5"> Contenido adicional </v-stepper-step>

        <v-stepper-content step="5">
          <h2 class="mb-3">
            ¡Listo! ya podés disfrutar del contenido que elegiste
          </h2>
          <p>
            Si querés ver el contenido en otro idioma (SAP) podés adquirir un
            pack de idiomas
          </p>
          <v-btn color="primary">Comprar pack de idiomas</v-btn>
          <v-divider class="my-5" />
          <p>O podés finalizar la operación y seguir navegando</p>
          <v-btn color="primary" to="/mis-packs" replace>Finalizar</v-btn>
        </v-stepper-content>
      </v-stepper>
    </div>

    <div v-else>Evento deportivo</div>
  </div>
  <div v-else>
    <h2>Comprar pack</h2>
    <v-alert type="warning" class="mt-4"
      >No encontramos ningún pack disponible para la categoría que estás
      buscando.</v-alert
    >
    <p>
      Si crees que esto es un error por favor contactate con el área de soporte.
    </p>
    <v-btn @click="$router.replace('/mis-packs')">Volver a Mis packs</v-btn>
  </div>
</template>

<script>
import CommonController from "../controllers/CommonController";
import MediaCard from "../components/MediaCard.vue";

export default {
  components: { MediaCard },
  name: "ComprarPack",
  async mounted() {
    this.getTipo();

    try {
      this.loading = true;
      let response;

      if (this.tipo === 'adulto') {
        response = await CommonController.getContenidoAdulto();
      } else {
        response = await CommonController.getEventosDeportivos();
      }

      this.catalogoMedia = response.data.results;
    } catch (error) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.query.tipo) {
      this.tipo = to.query.tipo;
    }
    next();
  },
  data() {
    return {
      error: false,
      loading: false,
      formasDePago: [
        "Efectivo (pago en sucursales habilitadas)",
        "Tarjeta de débito",
        "Tarjeta de crédito",
        "MercadoPago",
        "Paypal",
      ],
      tiempoAdulto: 0,
      adultoStepper: 1,
      selectedMedia: null,
      panels: 0,
      tipo: null,
      catalogoMedia: [],
    };
  },
  methods: {
    getTipo() {
      if (this.$route.query.tipo) {
        this.tipo = this.$route.query.tipo;
      }
    },
    handleClickMedia(media) {
      this.adultoStepper = 3;
      this.selectedMedia = media;
    },
  },
  computed: {
    knownTipo() {
      return this.tipo === "evento" || this.tipo === "adulto";
    },
    adultPanelTitle() {
      return this.adultoStepper > 2
        ? `Contenido seleccionado: ${this.selectedMedia.title}`
        : "Catálogo adulto";
    },
  },
};
</script>