<template>
  <div>
    <Carousel />
    <h1>Categories</h1>
    <v-row>
      <v-card
          v-for="card in this.$store.getters.getCategoryList" :key="card.id"
          class="mx-auto"
          max-width="300"
          :to="{ name: 'MenClothing', params: {category: card.id } }"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="card.image"
        >
          <v-card-title>{{ card.title }}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{ card.description }}</v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange"
            text
          >
            Share
          </v-btn>

          <v-btn
            color="orange"
            text
          >
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
      <NewsFeed />
    </v-row>
  </div>
</template>

<script>
  import Carousel from "@/components/Carousel";
  import NewsFeed from "@/components/NewsFeed";

    export default {
        components: {
          Carousel,
          NewsFeed,
        },
        name: "MainContent",
    }
</script>

<style scoped>
.mx-auto {
  margin: 10px 0;
}
</style>
