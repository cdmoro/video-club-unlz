<template>
  <div>
    <h2 class="text-center mb-4">
      Estas buscando: {{ $route.query.s }} página 1 latino HD - PELISPLUS
    </h2>
      <v-row>
        <v-col v-for="(movie, i) of movies" :key="i" sm="6" md="3">
        <media-card :media="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MediaCard from "../components/MediaCard.vue";
import CommonController from "../controllers/CommonController";

export default {
  components: { MediaCard },
  async mounted() {
    this.findMovies(this.$route.query.s);
  },
  async beforeRouteUpdate(to, from, next) {
    await this.findMovies(to.query.s);
    next();
  },
  data() {
    return {
      loading: true,
      movies: [],
    };
  },
  methods: {
    async findMovies(query) {
      this.loading = true;
      const { data } = await CommonController.findMovies(query);
      this.movies = data.results;
      this.loading = false;
    },
  },
};
</script>

<style>
</style>