<template>
  <v-row>
    <v-card v-for="product in categories" v-bind:key="product.id"
      class="mx-auto"
      max-width="300"
    >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="product.image"
        >
          <v-card-title>{{ product.title }}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{ product.description }}</v-card-subtitle>

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
  </v-row>
</template>

<script>
    export default {
        name: "MenClothing",
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

    }
</script>

<style scoped>

</style>
