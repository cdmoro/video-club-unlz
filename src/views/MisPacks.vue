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

    <v-card>
      <v-tabs icons-and-text v-model="tab">
        <v-tabs-slider />

        <v-tab href="#peliculas-tab">
          Películas
          <v-icon>mdi-movie</v-icon>
        </v-tab>

        <v-tab href="#series-tab">
          Series
          <v-icon>mdi-filmstrip-box-multiple</v-icon>
        </v-tab>

        <v-tab href="#eventos-tab">
          Eventos
          <v-icon>mdi-basketball</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item value="peliculas-tab">
          <v-card flat>
            <v-card-title>Películas</v-card-title>

            <v-data-table
              :headers="headers"
              :items="peliculasItems"
              class="elevation-1"
              hide-default-footer
            >
              <template #item.imgUrl="{ item }">
                <v-img class="mt-4 my-md-4 elevation-2 rounded" width="100" contain :src="item.imgUrl"/>
              </template>
              
              <template #item.visto="{ item }">
                {{ item.visto ? 'Sí' : 'No' }}
              </template>

              <template #item.verAhora="{ item }">
                <v-btn :disabled="item.visto" color="primary" @click="item.reproduccionesDisponibles = 0; item.visto = true">
                  <v-icon left>mdi-play</v-icon>
                  Reproducir
                </v-btn>
              </template>       
            </v-data-table>

          </v-card>
        </v-tab-item>

        <v-tab-item value="series-tab">
          <v-card flat>
            <v-card-title>Series</v-card-title>
            <div class="my-5 text-center">
              <v-icon size="110">mdi-filmstrip-box-multiple</v-icon>
              <p class="mt-2 pb-5">No tenés ninguna serie</p>
            </div>
          </v-card>
        </v-tab-item>

        <v-tab-item value="eventos-tab">
          <v-card flat>
            <v-card-title>Eventos</v-card-title>
            <div class="my-5 text-center">
              <v-icon size="110">mdi-basketball</v-icon>
              <p class="mt-2 pb-5">No tenés ningún evento</p>
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-speed-dial v-model="fab" right bottom fixed open-on-hover>
      <template v-slot:activator>
        <v-btn v-model="fab" fab>
          <v-icon v-if="fab"> mdi-close </v-icon>
          <v-icon v-else> mdi-plus </v-icon>
        </v-btn>
      </template>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="green" fab small dark v-bind="attrs" v-on="on">
            <v-icon>mdi-movie</v-icon>
          </v-btn>
        </template>
        <span>Película</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red" fab small dark v-bind="attrs" v-on="on">
            <v-icon>mdi-filmstrip-box-multiple</v-icon>
          </v-btn>
        </template>
        <span>Serie</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="blue" fab small dark v-bind="attrs" v-on="on">
            <v-icon>mdi-basketball</v-icon>
          </v-btn>
        </template>
        <span>Evento</span>
      </v-tooltip>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  name: "MisPacks",
  data() {
    return {
      fab: false,
      tab: 1,
      headers: [
          { text: '', value: 'imgUrl' },
          { text: 'Título', value: 'name' },
          { text: 'Fecha de compra', value: 'fechaCompra' },
          { text: '¿Ya la viste?', value: 'visto' },
          { text: 'Reproducciones disponibles', value: 'reproduccionesDisponibles' },
          { text: '', value: 'verAhora' }
        ],
        peliculasItems: [
          {
            name: 'Cruella',
            fechaCompra: '05/05/2021',
            visto: false,
            imgUrl: 'https://image.tmdb.org/t/p/w300/hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg',
            reproduccionesDisponibles: 1,
          },
          {
            name: 'Friends: The Reunion',
            fechaCompra: '22/05/2021',
            visto: true,
            imgUrl: 'https://image.tmdb.org/t/p/w300/l00ff9dmop1UBfb4QNrLMQl5fgc.jpg',
            reproduccionesDisponibles: 0,
          },
        ],
    };
  },
};
</script>

<style>
</style>