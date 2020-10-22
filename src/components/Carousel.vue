<template>
  <div class="carousel">
    <h1>Recent income</h1>
    <carousel
      autoplay=True
      perPage=3
      loop=True>
      <slide v-for="slide in categories" :key="slide.id">
        <v-card
          class="mx-auto"
          max-width="300"
          :to="{name: 'Product', params: {category: slide.category, product_id: slide.id}}">
          <v-img
            class="white--text align-end"
            height="200px"
            v-bind:src="slide.image"
          >
            <v-card-title>{{ slide.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0 font-weight-medium"
            text
            color="orange"
          >
            Price: {{ slide.price }} $.
          </v-card-subtitle>
        </v-card>
      </slide>
    </carousel>
    <v-divider></v-divider>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add product
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Product</span>
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
              <v-col cols="12" sm="6">
                <form>
                  <select v-model="selected">
                    <option v-for="option in categoryList" :value="option.id" :key="option.id">{{option.category}}</option>
                  </select>
                  <span>Выбрано: {{ selected }}</span>
                  <label>File
                    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
                  </label>
                </form>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
          <p v-if="feedback">
            {{ feedback }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="addProduct">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
  import axios from 'axios'
  import { Carousel, Slide } from 'vue-carousel';
    export default {
        components: {
          Carousel,
          Slide
        },
        name: "TopCarousel",
        props: ['categories'],
        data() {
            return {
                dialog: false,
                title: null,
                price: null,
                description: null,
                image_link: '',
                category: null,
                feedback: null,
                categoryList: null,
                selected: null
            }
        },
        methods: {
            addProduct() {
                let formData = new FormData()
                formData.append('category', this.selected)
                formData.append('description', this.description)
                formData.append('id', this.product_id)
                formData.append('image', this.image_link)
                formData.append('price', this.price)
                formData.append('title', this.title)
                axios.post('/products/', formData, {
                  headers: {
                    'Authorization': `Token ${localStorage['token']}`,
                  },
                }).then(response => {
                    this.categories.push(response.data)
                    this.dialog = false
                }).catch(err => {
                    this.feedback = err
                })
            },
            handleFileUpload() {
                this.image_link = this.$refs.file.files[0];
                console.log('>>>> 1st element in files array >>>> ', this.image_link);
            },
            getCategory() {
                axios.get('/category/')
                  .then(response => {
                      this.categoryList = response.data
                  })
            }
        },
        created() {
            this.getCategory()
        }
    }
</script>

<style scoped>
.carousel {
  margin-top: 40px;
}
</style>
