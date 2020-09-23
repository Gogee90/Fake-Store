<template>
  <div>
    <Carousel :categories="categories"/>
    <h1>Categories</h1>
    <v-row>
      <v-card
          class="mx-auto"
          max-width="300"
          :to="{ name: 'MenClothing', params: {category: 'men clothing'} }"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://i.pinimg.com/736x/9c/9c/8f/9c9c8fd739b13eed999f8d178db9abfe.jpg"
        >
          <v-card-title>Men clothing</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">Men clothing collection</v-card-subtitle>

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
      <v-card
        class="mx-auto"
        max-width="300"
        :to="{ name: 'MenClothing', params: {category: 'women clothing'} }"
      >
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://image01.bonprix.ru/api/s,x,460,y,460/teaser/homepage/2036-dob-kw-36/kleider-940488-1766614.jpg?h=YOe8OSA7bwGVfKhYyKK+S4lYTYzyAfLJhKAZreqmHtk="
          >
          <v-card-title>Women clothing</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">Women clothing collection</v-card-subtitle>

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
      <v-card
        class="mx-auto"
        max-width="300"
        :to="{ name: 'MenClothing', params: {category: 'electronics'} }"
      >
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSCVFJyM5P5KQPs-em597jcZVSL96-pU0TsQ&usqp=CAU"
          >
            <v-card-title>Electronics</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">Electronics</v-card-subtitle>

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
  import { requestData } from "@/components/mixins/axios_mixin";

    export default {
        mixins: [requestData],
        components: {
          Carousel,
          NewsFeed,
        },
        name: "MainContent",
        data() {
            return {
                categories: [],
            }
        },
    }
</script>

<style scoped>
.mx-auto {
  margin: 10px 0;
}
</style>
