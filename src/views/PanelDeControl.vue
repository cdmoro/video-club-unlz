<template>
  <div id="panel-de-control">
    <h2 class="mb-4">Panel de control</h2>
    <v-row>
      <v-col md="4" sm="12" v-for="i in 3" :key="i">
        <v-card>
          <v-card-text>
            <v-sheet color="cyan" class="rounded elevation-1">
              <v-sparkline
                :value="value"
                height="100"
                color="rgba(255, 255, 255, .7)"
                padding="12"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item"> ${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>
          <v-card-title class="pt-0">Cantidad de visitas</v-card-title>
          <v-divider class="mt-2 mx-4" />
          <v-card-actions class="px-4 text-caption grey--text">
            <v-icon class="mr-1" small> mdi-clock-outline </v-icon>

            <span class="text-caption grey--text font-weight-light">
              updated 4 minutes ago
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="3" sm="6" v-for="i in 4" :key="i">
        <v-card class="mx-auto">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline">OVERLINE</div>
              <v-list-item-title class="text-h5 mb-1">
                Paquetes anuales
              </v-list-item-title>
              <v-list-item-subtitle
                >Greyhound divisely hello coldly
                fonwderfully</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="cyan"
              class="rounded"
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
        <v-col md="6" sm="12">
            <v-card>
                <v-card-title>Películas más vistas</v-card-title>
                <v-card-subtitle>En los últimos 30 días</v-card-subtitle>
                <v-data-table
                    hide-default-footer
                    sort-by="popularity"
                    sort-desc
                    :headers="headers"
                    :items="trendingMovies"
                    :items-per-page="10"
                >
                    <!-- eslint-disable-next-line -->
                    <template #item.posicion="{ index }">
                        {{ index + 1 }}
                    </template>
                </v-data-table>
            </v-card>
        </v-col>
        <v-col md="6" sm="12">
            <v-card>
                <v-card-title>Series más vistas</v-card-title>
                <v-card-subtitle>En los últimos 30 días</v-card-subtitle>
                <v-data-table
                    hide-default-footer
                    sort-by="popularity"
                    sort-desc
                    :headers="headers"
                    :items="trendingMovies"
                    :items-per-page="10"
                >
                    <!-- eslint-disable-next-line -->
                    <template #item.posicion="{ index }">
                        {{ index + 1 }}
                    </template>
                </v-data-table>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import CommonController from '@/controllers/CommonController';

export default {
  name: "PanelDeControl",
  async mounted() {
      try {
          const { data } = await CommonController.getTrending();
          this.trendingMovies = data.results;

      // eslint-disable-next-line no-empty
      } catch (error) {
          
      }
  },
  data() {
    return {
      value: [423, 446, 675, 510, 590, 610, 760],
      headers: [
          { value: 'posicion', text: "#", sortable: false},
          {
            text: 'Título',
            value: 'title',
            sortable: false
          },
          { text: 'Visualizaciones', value: 'popularity', align: 'end', sortable: false },
        ],
      trendingMovies: [
        ],
    };
  },
};
</script>

<style>
</style>