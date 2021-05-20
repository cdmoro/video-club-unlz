<template>
  <div>
      <h2 class="text-center mb-4">Estas buscando: {{ $route.query.s }} página 1 latino HD - PELISPLUS</h2>
      <v-row>
      <v-col v-for="(movie, i) of movies" :key="i" sm="6" md="3">
        <v-card>
          <v-img
            height="200"
            :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
          ></v-img>

        <v-card-title>{{ movie.title }}</v-card-title>
        <v-card-subtitle>
          <v-row align="center" class="mx-0">
            <v-rating
            :value="(5 * movie.vote_average) / 10"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
            <span class="text-sm ml-2">({{ movie.vote_average }}/10)</span>
          </v-row>
        </v-card-subtitle>
        <v-card-text class="mt-4">
          {{ movie.overview.slice(0, 50).trim() }}...
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CommonController from '../controllers/CommonController';

export default {
    async mounted() {
        this.findMovies();
    },
    async beforeRouteUpdate(to, from, next) {
        await this.findMovies();
        next();
    },
    data() {
        return {
            loading: true,
            movies: []
        }
    },
    methods: {
        async findMovies() {
            this.loading = true;
            const { data } = await CommonController.findMovies(this.$route.query.s);
            this.movies = data.results;
            this.loading = false;
        }
    }
}
</script>

<style>

</style>