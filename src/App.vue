<template>
  <v-app>
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col
          cols="3">
          <Sidenav />
        </v-col>
        <v-col
          cols="8">
          <MainContent />
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
import MainContent from "@/components/MainContent";

export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
    Sidenav,
    MainContent
  },

  data() {
      return {

      }
  }
};
</script>
