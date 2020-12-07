<template>
  <div class="carousel">
    <h1>Recent income</h1>
    <carousel
      autoplay=True
      perPage=3
      loop=True>
      <slide v-for="slide in this.$store.getters.getProducts" :key="slide.id">
        <v-card
          class="mx-auto"
          max-width="300"
          >
          <router-link :to="{name: 'Product', params: {category: slide.category, product_id: slide.id}}">
            <v-img
              class="white--text align-end"
              height="200px"
              v-bind:src="slide.image"
            >
            </v-img>
          </router-link>
          <v-card-title>{{ slide.title }}</v-card-title>

          <v-card-subtitle class="pb-0 font-weight-medium"
            text
            color="orange"
          >
            Price: {{ slide.price }} $.
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange"
              text
              @click="addToCart(slide.id)"
            >
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </slide>
    </carousel>
    <v-divider></v-divider>
    <DialogWindow />
  </div>
</template>


<script>
  import { Carousel, Slide } from 'vue-carousel';
  import DialogWindow from "@/components/DialogWindow";
    export default {
        components: {
          DialogWindow,
          Carousel,
          Slide
        },
        name: "TopCarousel",
        data() {
            return {
                products: []
            }
        },
        methods: {
          addToCart(id) {
              this.products.push(id)
              console.log(this.products)
              this.$store.dispatch('saveCart', this.products)
          }
        }
    }
</script>

<style scoped>
.carousel {
  margin-top: 40px;
}
</style>
