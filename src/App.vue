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
          <TopCarousel :categories="categories"/>
          <v-divider></v-divider>
          <h1>Каталог товаров</h1>
          <MainContent :categories="categories"/>
          <v-divider></v-divider>
          <NewsFeed />
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
import TopCarousel from "@/components/Carousel";
import NewsFeed from "@/components/NewsFeed";

export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
    Sidenav,
    MainContent,
    TopCarousel,
    NewsFeed
  },

  data() {
      return {
          categories: []
      }
  },
  created() {
      const axios = require('axios');
      axios.get('https://fakestoreapi.com/products?limit=10/')
          .then(response => {
              let products = response.data
              products.forEach(items => {
                  this.categories.push(items)
              })
          }).catch(err => {
              console.log(err)
      })
    }
};
</script>
