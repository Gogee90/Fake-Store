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
          <TopCarousel :cities="cities"/>
          <h1>Каталог товаров</h1>
          <MainContent :cities="cities"/>
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
import db from "@/firebase/init";

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
          cities: []
      }
  },
  created() {
      db.collection("online-shop").get()
          .then(snapshot => {
              snapshot.forEach(doc => {
                  let cards = doc.data()
                  cards.id = doc.id
                  this.cities.push(cards)
            })
        })
      }
};
</script>
