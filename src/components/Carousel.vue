<template>
  <div class="carousel">
    <h1>Недавнее поступление</h1>
    <carousel
      autoplay=True
      perPage=3
      loop=True>
      <slide v-for="slide in cities" :key="slide.id">
        <v-card
          class="mx-auto"
          max-width="300">
          <v-img
            class="white--text align-end"
            height="200px"
            v-bind:src="slide.link.path"
          >
            <v-card-title>{{ slide.title }}</v-card-title>
          </v-img>

        <v-card-subtitle class="pb-0">{{ slide.subtitle }}</v-card-subtitle>
      </v-card>
    </slide>
  </carousel>
  </div>
</template>


<script>
  import { Carousel, Slide } from 'vue-carousel';
    export default {
        components: {
          Carousel,
          Slide
        },
        name: "TopCarousel",
        props: ['cities'],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
.carousel {
  margin-top: 40px;
}
</style>
