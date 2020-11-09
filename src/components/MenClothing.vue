<template>
  <div class="men-clothing-catalogue">
    <v-row>
      <v-card v-for="product in categories" v-bind:key="product.id"
        class="mx-auto"
        max-width="300"
        :to="{ name: 'Product', params: { category: product.category, product_id: product.id }}"
      >

        <v-img
          class="white--text align-end"
          height="200px"
          :src="product.image"
        >
          <v-card-title>{{ product.title }}</v-card-title>
        </v-img>

        <v-divider></v-divider>

        <div class="price">Price: {{ product.price }} $.</div>

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
            this.$store.dispatch('saveCategories')
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
</style>
