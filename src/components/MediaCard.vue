<template>
  <v-card @click="$emit('click')" class="media-card">
    <v-img
      height="200"
      :src="`https://image.tmdb.org/t/p/w300${media.poster_path}`"
    ></v-img>

    <v-card-title>{{ media.title }}</v-card-title>
    <v-card-subtitle>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="(5 * media.vote_average) / 10"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <span class="text-sm ml-2">({{ media.vote_average }}/10)</span>
      </v-row>
    </v-card-subtitle>
    <v-card-text class="mt-4">
      {{ media.overview.slice(0, 50).trim() }}...
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MediaCard",
  props: {
    media: { type: Object, required: true },
  },
};
</script>

<style>
.media-card {
  opacity: 0.7;
  transform: scale(.95);
  transition: all .15s ease;
}

.media-card:hover {
  opacity: 1;
  transform: scale(1);
}
</style>