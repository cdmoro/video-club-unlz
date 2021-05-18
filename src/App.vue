<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped color="primary" dark>
      <v-list>
        <v-list-item :to="item.to" v-for="item of menu" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <img class="ml-3" src="../public/logo.png" height="50" />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    menu: [
      {
        title: "Inicio",
        to: "/",
        icon: "mdi-home",
      },
      {
        title: "Login",
        to: "/login",
        icon: "mdi-lock",
      },
      {
        title: "Nosotros",
        to: "/about",
        icon: "mdi-account",
      },
    ],
  }),
};
</script>
