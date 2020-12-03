<template>
  <v-app>
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col
          xs="5"
          lg="3">
          <Sidenav />
        </v-col>
        <v-col
          xs="12"
          lg="8">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidenav from "@/components/Sidenav";

export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
    Sidenav,
  },

  data() {
      return {

      }
  },
  beforeCreate() {
      this.$store.dispatch('saveCategories')
  }
};
</script>
