<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped color="primary" dark>
      <v-list>
        <v-list-item :to="item.to" v-for="item of menuComputed" :key="item.title">
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
      <img class="mr-3" src="../public/logo.png" height="50" />
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      
      <v-spacer></v-spacer>

      <v-menu offset-y v-if="$store.getters.isUserLogged">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left>mdi-account</v-icon>
          {{ $store.state.user.username }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-avatar color="#223143">
            <v-img :src="$store.state.user.imgUrl"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">{{ $store.state.user.nombre }}</v-list-item-title>
            <v-list-item-subtitle>{{ $store.state.user.mail }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ tipo[$store.state.user.tipo] }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-lock-open</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
      
      <v-btn text v-else to="/login">
        <v-icon left>mdi-lock</v-icon>
        Ingreso
      </v-btn>
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
    tipo: ['Usuario', 'Empresa', 'Administrador'],
    menu: [
      {
        title: "Inicio",
        to: "/",
        icon: "mdi-home",
      },
    ],
  }),

  methods: {
    logout() {
      this.$store.commit('LOGOUT');
    }
  },

  computed: {
    menuComputed() {
      const menu = [
      {
        title: "Inicio",
        to: "/",
        icon: "mdi-home",
      },
    ];

      if (this.$store.getters.isUserLogged) {
        if (this.$store.getters.isUser || this.$store.getters.isEmpresa) {
          menu.push({
            title: "Comprar pack",
            to: "/comprar-pack",
            icon: "mdi-cart-plus",
          })
        }

        if (this.$store.getters.isEmpresa) {
          menu.push({
            title: "Publicar publicidad",
            to: "/publicar-publicidad",
            icon: "mdi-bullhorn",
          })
        }

        if (this.$store.getters.isAdmin) {
          menu.push({
            title: "Panel de control",
            to: "/admin",
            icon: "mdi-chart-box",
          })
        }
  
      }

      menu.push({
        title: 'Información',
        to: '/informacion',
        icon: 'mdi-information'
      })

      return menu;
    }
  }
};
</script>
