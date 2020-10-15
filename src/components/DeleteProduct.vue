<template>
  <v-row>
    <v-col
      class="warning-message"
      center
    >
      <p>Are you sure you want do delete a product?
         Note:The product will not be deleted on the database. but if you sent data successfully it will return you the fake deleted product.
      </p>
      <v-btn @click="deleteProduct">Delete</v-btn>
      <v-btn @click="redirectTo">Cancel</v-btn>
    </v-col>
    <ul v-if="properties != null">
      <li><strong>The product has been deleted</strong></li>
      <li v-for="property in properties" :key="property.id">{{ property }}</li>
      <li><strong>Now you will be redirected to the category page</strong></li>
    </ul>
  </v-row>
</template>

<script>
  import axios from "axios";
    export default {
        name: "EditProduct",
        data() {
            return {
                category: this.$route.params.category,
                product_id: this.$route.params.product_id,
                properties: null
            }
        },
        methods: {
            deleteProduct() {
                axios({
                  method: 'delete',
                  url: `/products/${this.product_id}`,
                })
                  .then(response => {
                      this.properties = response.data
                      setTimeout(() => {
                          this.$router.push({name: 'MenClothing', params: {category: this.category}})
                      }, 5000)
                  }).catch(err => {
                    alert(err)
                })
            },
            redirectTo() {
                this.$router.push({name: 'Product', params:{category: this.category, product_id: this.product_id}})
            }
        }
    }
</script>

<style scoped>
.warning-message {
  color: red;
  margin-top: 30px;
  text-align: center;
}
ul {
  list-style: none;
  text-align: center;
}
</style>
