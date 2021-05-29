<template>
  <div>
    <h2>Mis packs</h2>
    <p>
      Desde acá podés gestionar los packs que tengas, para agregar un nuevo pack
      tenés que hacer click en el botón
      <v-btn fab max-width="20" max-height="20"
        ><v-icon small>mdi-plus</v-icon></v-btn
      >
      que está en la esquina inferior derecha de tu pantalla.
    </p>

    <v-card class="mb-4">
      <v-card-title>Suscripción anual</v-card-title>

      <v-card-text>
        <template v-if="$store.state.suscripcionAnual">
          <v-alert type="info">Tu suscripción termina el {{ endDateSuscription }}</v-alert>
          <v-btn color="primary" @click="$store.commit('SET_SUSCRIPCION_ANUAL', false)">Cancelar suscripción</v-btn>
        </template>
        <template v-else>
          <p>Al optar por una suscripción anual, ¡podés ver todos los eventos deportivos por un año en el idioma que prefieras (SAP)!</p>
          <v-btn color="primary" @click="anualSuscription">Comprar suscripción anual</v-btn>
        </template>
      </v-card-text>
    </v-card>

    <v-card>
      <v-tabs icons-and-text v-model="tab" centered dark>
        <v-tabs-slider />

        <v-tab href="#eventos-tab">
          Eventos deportivos
          <v-icon>mdi-basketball</v-icon>
        </v-tab>
        
        <v-tab href="#adultos-tab">
          Contenido adulto
          <v-icon>mdi-bed-king</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item value="eventos-tab">
          <v-card flat>
            <v-card-title>Eventos deportivos</v-card-title>

            <v-data-table
              :headers="headers"
              :items="eventosItems"
              class="elevation-1"
              hide-default-footer
            >
              <!-- eslint-disable-next-line -->
              <template #item.poster_path="{ item }">
                <v-img class="mt-4 my-md-4 elevation-2 rounded" width="100" contain :src="`https://image.tmdb.org/t/p/w300${item.poster_path}`"/>
              </template>
              
              <!-- eslint-disable-next-line -->
              <template #item.name="{ item }">
                {{ item.name || item.title }}
              </template>
              
              <!-- eslint-disable-next-line -->
              <template #item.fechaCompra="{ item }">
                {{ item.id % 2 === 0 ? '05/05/2021' : '20/05/2021' }}
              </template>
              
              <!-- eslint-disable-next-line -->
              <template #item.visto="{ item }">
                {{ item.id % 2 === 0 ? 'Sí' : 'No' }}
              </template>
              
              <!-- eslint-disable-next-line -->
              <template #item.reproduccionesDisponibles="{ item }">
                {{ item.id % 2 === 0 ? 0 : 1}}/1
              </template>

              <!-- eslint-disable-next-line -->
              <template #item.verAhora="{ item }">
                <v-btn :disabled="item.id % 2 === 0" color="primary">
                  <v-icon left>mdi-play</v-icon>
                  Reproducir
                </v-btn>
              </template>       
            </v-data-table>

          </v-card>
        </v-tab-item>

        <v-tab-item value="adultos-tab">
          <v-card flat>
            <v-card-title>Contenido adulto</v-card-title>
            <div class="my-5 text-center">
              <v-icon size="110">mdi-bed-king</v-icon>
              <p class="mt-2 pb-5">No tenés ningún pack de contenido adulto</p>
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-speed-dial v-model="fab" right bottom fixed>
      <template v-slot:activator>
        <v-btn v-model="fab" fab>
          <v-icon v-if="fab"> mdi-close </v-icon>
          <v-icon v-else> mdi-plus </v-icon>
        </v-btn>
      </template>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="blue" fab small dark v-bind="attrs" v-on="on" to="/comprar-pack?tipo=evento">
            <v-icon>mdi-basketball</v-icon>
          </v-btn>
        </template>
        <span>Evento deportivo</span>
      </v-tooltip>
      
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red" fab small dark v-bind="attrs" v-on="on"  to="/comprar-pack?tipo=adulto">
            <v-icon>mdi-bed-king</v-icon>
          </v-btn>
        </template>
        <span>Contenido adulto</span>
      </v-tooltip>
    </v-speed-dial>
  </div>
</template>

<script>
import CommonController from '../controllers/CommonController';

export default {
  name: "MisPacks",
  async mounted() {
    const { data } = await CommonController.getEventosDeportivos();
    this.eventosItems = data.results.slice(0,2);
  },
  methods: {
    anualSuscription() {
      this.$store.commit('SET_SUSCRIPCION_ANUAL', true);

      let date = new Date();
      date = date.setFullYear(date.getFullYear() + 1);

      date = new Date(date);
      let month = date.getMonth() + 1;
      month = (month < 10 ? '0' : '') + month;

      this.endDateSuscription = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${month}/${date.getFullYear()}`;
    },
  },
  data() {
    return {
      endDateSuscription: null,
      fab: false,
      tab: 1,
      headers: [
          { text: '', value: 'poster_path' },
          { text: 'Título', value: 'name' },
          { text: 'Fecha de compra', value: 'fechaCompra' },
          { text: '¿Ya lo viste?', value: 'visto' },
          { text: 'Reproducciones disponibles', value: 'reproduccionesDisponibles' },
          { text: '', value: 'verAhora' }
        ],
        eventosItems: [
          // {
          //   name: 'Cruella',
          //   fechaCompra: '05/05/2021',
          //   visto: false,
          //   imgUrl: 'https://image.tmdb.org/t/p/w300/hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg',
          //   reproduccionesDisponibles: 1,
          // },
          // {
          //   name: 'Friends: The Reunion',
          //   fechaCompra: '22/05/2021',
          //   visto: true,
          //   imgUrl: 'https://image.tmdb.org/t/p/w300/l00ff9dmop1UBfb4QNrLMQl5fgc.jpg',
          //   reproduccionesDisponibles: 0,
          // },
        ],
    };
  },
};
</script>

<style>
</style>