<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-if="is_logged"
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
                    <option v-for="option in this.$store.getters.getCategoryList" :value="option.id" :key="option.id">{{option.category}}</option>
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
</template>

<script>
    import axios from "axios";
    export default {
        name: "DialogWindow",
        data() {
            return {
                dialog: false,
                title: null,
                price: null,
                description: null,
                image_link: '',
                category: [],
                feedback: null,
                selected: null,
                is_logged: localStorage['is_logged']
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
                }).then(() => {
                    this.$store.dispatch('saveCategories')
                    this.dialog = false
                }).catch(err => {
                    this.feedback = err
                })
            },
            handleFileUpload() {
                this.image_link = this.$refs.file.files[0];
                console.log('>>>> 1st element in files array >>>> ', this.image_link);
            },
        },
    }
</script>

<style scoped>

</style>
