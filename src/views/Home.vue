<template>
  <div class="home">
    <h2 class="text-center mb-4">PELISPLUS - VER PELICULAS Y SERIES ONLINE EN HD</h2>
    <v-row>
      <v-col v-for="(trend, i) of trending" :key="i" sm="6" md="3">
        <media-card :media="trend" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CommonController from '../controllers/CommonController'
import MediaCard from '../components/MediaCard.vue';

export default {
  name: 'Home',
  components: {
    MediaCard
  },
  data() {
    return {
      trending: []
    }
  },
  async mounted() {
    const { data } = await CommonController.getTrendingMovies();
    this.trending = data.results;
  }
}
</script>
