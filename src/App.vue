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
          <HelloWorld/>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidenav from "@/components/Sidenav";

export default {
  name: 'App',

  components: {
    HelloWorld,
    Navbar,
    Footer,
    Sidenav
  },

  data() {
      return {

      }
  }
};
</script>
