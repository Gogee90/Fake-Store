<template>
  <div class="men-clothing-catalogue">
    <v-row>
      <v-card v-for="product in categories" v-bind:key="product.id"
        class="mx-auto"

      >
        <router-link :to="{ name: 'Product', params: { category: product.category, product_id: product.id }}">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="product.image"
          >
          </v-img>
        </router-link>

        <v-card-title>{{ product.title }}</v-card-title>

        <v-divider></v-divider>

        <div class="price">Price: {{ product.price }} $.</div>

        <v-card-actions
          class="buttons"
          >
          <v-btn
            color="orange"
            text
            @click="addToCart(product.id)"
          >
            Add to cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
  import addToCart from '@/components/mixins/AddToCart'
    export default {
        name: "MenClothing",
        mixins: [addToCart],
        data() {
            return {
                categories: null
            }
        },
        methods: {
          getContent(category) {
            this.categories = this.$store.getters.getProducts.filter(result => {
                return result.category == category
            })
          }
        },
        created() {
            this.$store.dispatch('saveCategories')
            this.getContent(this.$route.params.category)
        },
        beforeRouteUpdate(to, from, next) {
            this.getContent(to.params.category)
            next()
        }
    }
</script>

<style scoped>
.men-clothing-catalogue {
  margin-top: 30px;
}

.mx-auto {
  margin: 10px 0;
  max-width: 300px;
}

.price {
  text-align: center;
  padding: 1em;
}

.buttons {
  align-content: center;
}

.ma-2 {
  left: 9em;
  color: darkgray;
}

@media screen and (max-width: 1260px){
  .mx-auto {
    max-width: 60%;
  }
}
</style>
