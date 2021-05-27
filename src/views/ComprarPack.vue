<template>
  <div id="comprar-pack" v-if="knownTipo">
    <h2>Comprar pack ({{ tipo }})</h2>
    <p>En cuatro simples pasos podés adquirir uno de nuestro packs para que sigas disfrutando de nuestro contenido exclusivo.</p>
    <div v-if="tipo === 'adulto'" class="my-3">
      <v-stepper vertical v-model="adultoStepper" non-linear>
        <v-stepper-step editable step="1">
          {{ adultPanelTitle }}
          <small
            >Seleccioná una pélicula de nuestro ámplio catálogo de películas</small
          >
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-row>
            <v-col v-for="(media, i) of catalogoAdulto" :key="i" sm="6" md="3">
              <!-- <a class="media-link" href="#"> -->
              <div @click="handleClickMedia(media)">
                <media-card :media="media" />
              </div>
              <!-- </a> -->
            </v-col>
          </v-row>
        </v-stepper-content>

      <v-stepper-step editable step="2">
        Tiempo de contratación
      </v-stepper-step>

      <v-stepper-content step="2">
        Tiempo
      </v-stepper-content>
      
      <v-stepper-step editable step="3">
        Medio de pago
      </v-stepper-step>

      <v-stepper-content step="3">
        Elegí tu medio de pago
      </v-stepper-content>
      
      <v-stepper-step editable step="4">
        Idioma del contenido
      </v-stepper-step>

      <v-stepper-content step="4">
        Idioma del contenido
        <v-btn>Comprar pack</v-btn>
      </v-stepper-content>
      </v-stepper>


      <!-- <v-expansion-panels v-model="panels">
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <h3>{{ adultPanelTitle }}</h3>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col v-for="(media, i) of catalogoAdulto" :key="i" sm="6" md="3">
                                <div @click="handleClickMedia(media)">
                                <media-card :media="media" />
                                </div>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels> -->
    </div>
    <div v-else>Evento deportivo</div>
  </div>
  <div v-else>
    <h2>Comprar pack</h2>
    <v-alert type="warning" class="mt-4">No encontramos ningún pack disponible para la categoría que estás buscando.</v-alert>
    <p>Si crees que esto es un error por favor contactate con el área de soporte.</p>
    <v-btn @click="$router.replace('/mis-packs')">Volver a Mis packs</v-btn>
  </div>
</template>

<script>
import MediaCard from "../components/MediaCard.vue";
export default {
  components: { MediaCard },
  name: "ComprarPack",
  mounted() {
    this.getTipo();
  },
  beforeRouteUpdate(to, from, next) {
    if (to.query.tipo) {
      this.tipo = to.query.tipo;
    }
    next();
  },
  data() {
    return {
      adultoStepper: 1,
      selectedMedia: null,
      panels: 0,
      tipo: null,
      catalogoAdulto: [
        {
          title: "xXx",
          vote_average: 5.9,
          overview: `Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government "recruits" him to go on a mission, he's not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.`,
          poster_path: "/86BnliVDBo2TjKmrgQTJIPHxAKd.jpg",
        },
        {
          title: "American pie",
          vote_average: 6.5,
          overview: `At a high-school party, four friends find that losing their collective virginity isn't as easy as they had thought. But they still believe that they need to do so before college. To motivate themselves, they enter a pact to all "score" by their senior prom.`,
          poster_path: "/5P68by2Thn8wHAziyWGEw2O7hco.jpg",
        },
        {
          title: "Sex education",
          vote_average: 8.3,
          overview: `Inexperienced Otis channels his sex therapist mom when he teams up with rebellious Maeve to set up an underground sex therapy clinic at school.`,
          poster_path: "/4Bph0hhnDH6dpc0SZIV522bLm4P.jpg",
        },
        {
          title: "Californication",
          vote_average: 7.6,
          overview: `A self-loathing, alcoholic writer attempts to repair his damaged relationships with his daughter and her mother while combating sex addiction, a budding drug problem, and the seeming inability to avoid making bad decisions.`,
          poster_path: "/jPqOY8cq9KXQN4bD7zJGHCNvcb4.jpg",
        },
        {
          title: "Future sex",
          vote_average: 5.5,
          overview: `An anthology series that explores the future of sex.`,
          poster_path: "/20HVtcyeSDCUF4IL0Mg8Wm8NqmS.jpg",
        },
        {
          title: "Sex and the city",
          vote_average: 7.5,
          overview: `Based on the bestselling book by Candace Bushnell, Sex and the City tells the story of four best friends, all single and in their late thirties, as they pursue their careers and talk about their sex lives, all while trying to survive the New York social scene.`,
          poster_path: "/yd5tIz125kF25H4Okld3uqyQgvA.jpg",
        },
        {
          title: `Porky's`,
          vote_average: 6.5,
          overview: `Set in 1954, a group of Florida high schoolers seek out to lose their virginity which leads them to seek revenge on a sleazy nightclub owner and his redneck sheriff brother for harassing them.`,
          poster_path: "/2S4Bi3JqNXDzrxAJheIU1Wf6tz3.jpg",
        },
      ],
    };
  },
  methods: {
    getTipo() {
      if (this.$route.query.tipo) {
        this.tipo = this.$route.query.tipo;
      }
    },
    handleClickMedia(media) {
      this.panels = 1;
      this.adultoStepper = 2;
      this.selectedMedia = media;
    },
  },
  computed: {
    knownTipo() {
      return this.tipo === "evento" || this.tipo === "adulto";
    },
    adultPanelTitle() {
      return this.panels === 1
        ? `Contenido seleccionado: ${this.selectedMedia.title}`
        : "Catálogo adulto";
    },
  },
};
</script>

<style>
.media-link {
  text-decoration: none;
}

.media-link .v-card {
  opacity: 0.6;
}

.media-link:hover .v-card {
  opacity: 1;
}
</style>