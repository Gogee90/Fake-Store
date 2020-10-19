<template>
  <div class="mx-auto">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <div class="buttons">

          </div>
          <v-icon
            class="ma-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            mdi-wrench
          </v-icon>
          <v-icon
            class="ma-2"
            dark
            right
            @click="deleteProduct"
          >
            mdi-cancel
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
                <input
                  id="file"
                  ref="file"
                  type="file"
                  v-on:change="handleFileUpload()"
                />
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
        value="feedback"
      >
      </v-textarea>
    </div>
  </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Product",
        data() {
            return {
                text: null,
                product_id: this.$route.params.product_id,
                properties: [],
                category: null,
                description: null,
                image: '',
                price: null,
                title: null,
                dialog: false
            }
        },
        mounted() {
            axios.get(`/products/${this.product_id}`)
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
                let formData = new FormData()
                formData.append('category', this.category)
                formData.append('description', this.category)
                formData.append('id', this.product_id)
                formData.append('image', this.image)
                formData.append('price', this.price)
                formData.append('title', this.title)
                axios.put(`/products/${this.product_id}`,formData, {
                  headers: {
                    'Authorization': `Token ${localStorage['token']}`,
                  },
                }).then(response => {
                    this.dialog = false
                    this.properties = []
                    this.properties.push(response.data)
                }).catch(err => {
                    console.log(err)
                })
            },
            handleFileUpload() {
                this.image = this.$refs.file.files[0]
                console.log(this.image)
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
  left: 18em;
  color: darkgray;
}
.ma-2:hover {
  color: black;
}
</style>
