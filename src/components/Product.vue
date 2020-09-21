<template>
  <div class="mx-auto">
    <ul v-for="property in properties" :key="property.id">
      <li><h1>{{property.title}}</h1></li>
      <li><v-img :src="property.image"
        class="white--text align-end" contain="True"
      ></v-img></li>
      <li>Цена {{property.price}} руб.</li>
      <li>{{property.description}}</li>
    <p>{{ text }}</p>
    </ul>
    <div class="feedback">
      <v-textarea
      v-model="text"
      outlined
      name="input-7-4"
      label="Outlined textarea"
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Product",
        data() {
            return {
                text: null,
                product_id: this.$route.params.product_id,
                properties: []
            }
        },
        mounted() {
            const axios = require('axios');
            axios.get(`https://fakestoreapi.com/products/${this.product_id}`)
              .then(response => {
                  this.properties.push(response.data)
                  console.log(this.properties)
              }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>
.mx-auto {
  margin: 40px 0;
}
.feedback {
  padding: 0 5px;
}
ul {
  list-style: none;
}
</style>
