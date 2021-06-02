<template>
  <div id="panel-de-control">
    <div class="d-flex flex-row align-center mb-4">
      <h2>Panel de control</h2>
      <v-spacer />
      <v-btn
        title="Exportar datos a PDF"
        fab
        small
        dark
        color="red"
        class="mr-3"
      >
        <v-icon>mdi-file-pdf-box</v-icon>
      </v-btn>
      <v-btn title="Exportar datos a Excel" fab small dark color="green">
        <v-icon>mdi-file-excel-box</v-icon>
      </v-btn>
    </div>
    <v-row>
      <v-col md="4" sm="4" cols="12" v-for="graph in graficos" :key="graph.title">
        <v-card>
          <v-card-text>
            <v-sheet :color="graph.color" class="rounded elevation-1">
              <v-sparkline
                :value="graph.values"
                height="100"
                color="rgba(255, 255, 255, .7)"
                padding="12"
                stroke-linecap="round"
                line-width="1.2"
                smooth
              >
                <template v-slot:label="item">{{ item.value }}</template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>
          <v-card-title class="pt-0">{{ graph.title }}</v-card-title>
          <v-card-subtitle>{{ graph.subtitle }}</v-card-subtitle>

          <v-divider class="mt-2 mx-4" />

          <v-card-actions class="px-4 text-caption grey--text">
            <v-icon class="mr-1" small>mdi-clock-outline</v-icon>
            <span class="text-caption grey--text font-weight-light">
              actualizado hace {{ graph.lastUpdate }}
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="3" sm="6" cols="6" v-for="item in indicadores" :key="item.label">
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

    <v-row>
      <v-col md="6" sm="6" cols="12">
        <v-card>
          <v-card-title>Películas más vistas</v-card-title>
          <v-card-subtitle>En los últimos siete días</v-card-subtitle>
          <v-data-table
            hide-default-footer
            sort-by="popularity"
            sort-desc
            :headers="headersMovies"
            :items="trendingMovies"
            :items-per-page="10"
          >
            <!-- eslint-disable-next-line -->
            <template #item.title="data">
              <div class="d-flex align-center">
                <img
                  :src="`https://image.tmdb.org/t/p/w200${data.item.poster_path}`"
                  width="30"
                  class="my-1 rounded mr-3"
                />
                {{ data.value }}
              </div>
            </template>

            <!-- eslint-disable-next-line -->
            <template #item.rank="{ index }">
              {{ index + 1 }}
            </template>

            <!-- eslint-disable-next-line -->
            <template #item.popularity="{ value }">
              {{ formatVisualizations(value) }}
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col md="6" sm="6" cols="12">
        <v-card>
          <v-card-title>Series más vistas</v-card-title>
          <v-card-subtitle>En los últimos siete días</v-card-subtitle>
          <v-data-table
            hide-default-footer
            sort-by="popularity"
            sort-desc
            :headers="headersTV"
            :items="trendingTV"
            :items-per-page="10"
          >
            <!-- eslint-disable-next-line -->
            <template #item.name="data">
              <div class="d-flex align-center">
                <img
                  :src="`https://image.tmdb.org/t/p/w200${data.item.poster_path}`"
                  width="30"
                  class="my-1 rounded mr-3"
                />
                {{ data.value }}
              </div>
            </template>

            <!-- eslint-disable-next-line -->
            <template #item.popularity="{ value }">
              {{ formatVisualizations(value) }}
            </template>

            <!-- eslint-disable-next-line -->
            <template #item.rank="{ index }">
              {{ index + 1 }}
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CommonController from "@/controllers/CommonController";

export default {
  name: "PanelDeControl",
  mounted() {
    this.getTrendingMovies();
    this.getTrendingTV();
  },
  methods: {
    formatVisualizations(value) {
      value = value.toString();

      if (value.indexOf(".") >= 0) {
        value = value.split(".")[0];
      }

      return value;
    },
    async getTrendingMovies() {
      try {
        const { data } = await CommonController.getTrendingMovies();
        this.trendingMovies = data.results;

        // eslint-disable-next-line no-empty
      } catch (error) {}
    },
    async getTrendingTV() {
      try {
        const { data } = await CommonController.getTrendingTV();
        this.trendingTV = data.results;

        // eslint-disable-next-line no-empty
      } catch (error) {}
    },
  },
  data() {
    return {
      headersMovies: [
        { value: "rank", text: "#", sortable: false },
        {
          text: "Título",
          value: "title",
          sortable: false,
        },
        { text: "Lenguaje", value: "original_language", sortable: false },
        {
          text: "Visualizaciones",
          value: "popularity",
          align: "end",
          sortable: false,
        },
      ],
      headersTV: [
        { value: "rank", text: "#", sortable: false },
        {
          text: "Título",
          value: "name",
          sortable: false,
        },
        { text: "Lenguaje", value: "original_language", sortable: false },
        {
          text: "Visualizaciones",
          value: "popularity",
          align: "end",
          sortable: false,
        },
      ],
      trendingMovies: [],
      trendingTV: [],
      indicadores: [
        {
          title: "Visitas",
          value: "489.623",
          icon: "mdi-account-multiple",
          subtitle: "en la última semana",
          color: "pink",
        },
        {
          title: "Eventos deportivos",
          value: "34",
          icon: "mdi-basketball",
          subtitle: "eventos vendidos",
          color: "blue",
        },
        {
          title: "Contenido adulto",
          value: "29",
          icon: "mdi-bed-king",
          subtitle: "packs vendidos",
          color: "red",
        },
        {
          title: "Ingresos por publicidades",
          value: "$ 444.598,62",
          icon: "mdi-currency-usd",
          subtitle: "en la última semana",
          color: "green",
        },
      ],
      graficos: [
        {
          color: "cyan",
          values: [423000, 446456, 675423, 510489, 610354, 650687],
          title: "Cantidad de visitas",
          subtitle: "Los datos corresponden a los últimos seis meses",
          lastUpdate: "4 minutos",
        },
        {
          color: "pink",
          values: [23, 46, 75, 10, 50, 20],
          title: "Packs vendidos",
          subtitle: "Los datos corresponden a los últimos seis meses",
          lastUpdate: "7 minutos",
        },
        {
          color: "orange",
          values: [23, 46, 75, 10, 15, 60],
          title: "Suscripciones anuales",
          subtitle: "Los datos corresponden a los últimos seis meses",
          lastUpdate: "1 minuto",
        },
      ],
    };
  },
};
</script>

<style>
</style>