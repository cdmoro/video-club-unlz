<template>
  <div class="home">
    <h2 class="text-center mb-4">PELISPLUS - VER PELICULAS Y SERIES ONLINE EN HD</h2>
    <v-row>
      <v-col v-for="(trend, i) of trending" :key="i" sm="6" md="3">
        <v-card>
          <v-img
            height="200"
            :src="`https://image.tmdb.org/t/p/w300${trend.poster_path}`"
          ></v-img>

        <v-card-title>{{ trend.title }}</v-card-title>
        <v-card-text>{{ trend.overview.slice(0, 50).trim() }}...</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CommonController from '../controllers/CommonController'
export default {
  name: 'Home',
  data() {
    return {
      trending: []
    }
  },
  async mounted() {
    const { data } = await CommonController.getTrending();
    this.trending = data.results;
  }
}
</script>
