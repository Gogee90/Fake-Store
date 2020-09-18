<template>
  <div class="men-clothing-catalogue">
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
        <v-card-text class="pb-0">{{ product.description }}</v-card-text>

        <v-divider></v-divider>

        <div class="price">Цена: {{ product.price }} руб.</div>

        <v-card-actions
          class="buttons"
          >
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
  </div>
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
                    this.categories = this.categories.filter(result => {
                        return result.category == "men clothing"
                    })
                    console.log(this.categories)
                }).catch(err => {
                    console.log(err)
            })
        }

    }
</script>

<style scoped>
.men-clothing-catalogue {
  margin-top: 40px;
}

.mx-auto {
  margin: 10px 0;
}

.price {
  text-align: center;
  padding: 1em;
}

.buttons {
  align-content: center;
}
</style>
