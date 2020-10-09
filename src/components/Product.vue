<template>
  <div class="mx-auto">
    <ul v-for="property in properties" :key="property.id">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            class="ma-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            mdi-wrench
          </v-icon>
        </template>
        <v-card>
        <v-card-title>
          <span class="headline">Edit Product</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Title" required v-model="title"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Price" hint="example of helper text only on focus" v-model="price"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Description" required v-model="description"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Image link" required v-model="image"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['men clothing', 'women clothing', 'electronics', 'jewelry']"
                  label="Categories"
                  multiple
                  v-model="category"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>The product won't be updated in real life</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="updateProduct">Save</v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>

      <v-icon
        class="ma-2"
        dark
        right
        @click="deleteProduct"
      >
        mdi-cancel
      </v-icon>
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
        value="feedback"
      >
      </v-textarea>
    </div>
  </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: "Product",
        data() {
            return {
                text: null,
                product_id: this.$route.params.product_id,
                properties: [],
                category: null,
                description: null,
                image: null,
                price: null,
                title: null,
                dialog: false
            }
        },
        mounted() {
            axios.get(`http://gogee90.pythonanywhere.com/api/products/${this.product_id}`)
              .then(response => {
                  this.properties.push(response.data)
                  this.properties.forEach(value => {
                      this.category = value.category,
                      this.description = value.description,
                      this.image = value.image,
                      this.price = value.price,
                      this.title = value.title
                  })
              }).catch(err => {
                console.log(err)
            })
        },
        methods: {
            deleteProduct() {
                this.$router.push({name: 'DeleteProduct', params: {category: this.$route.params.category, product_id: this.product_id}})
            },
            updateProduct() {
                axios({
                  method: 'put',
                  url:`http://gogee90.pythonanywhere.com/api/products/${this.product_id}`,
                  data: {
                    category: this.category,
                    description: this.description,
                    id: this.product_id,
                    image: this.image,
                    price: this.price,
                    title: this.title,
                  }
                }).then(response => {
                    this.dialog = false
                    this.properties = []
                    this.properties.push(response.data)
                }).catch(err => {
                    console.log(err)
                })
            }
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
.ma-2 {
  left: 13em;
  color: darkgray;
}
.ma-2:hover {
  color: black;
}
</style>
