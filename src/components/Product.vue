<template>
  <div class="mx-auto">
    <ul v-for="property in properties" :key="property.id">
      <li><h1>{{property.title}}</h1></li>
      <li><v-img :src="property.image"
        class="white--text align-center"
        height="50%"
        width="50%"
      ></v-img></li>
      <li class="price">Price {{property.price}} $.</li>
      <li>{{property.description}}</li>
    <p>{{ text }}</p>
    </ul>
    <div class="feedback">
      <v-textarea
      v-model="text"
      outlined
      name="input-7-4"
      label="Leave a feedback"
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

.price {
  color: darkorange;
}
.feedback {
  padding: 0 5px;
}
ul {
  list-style: none;
  text-align: -webkit-center;
}
</style>
