<template>
  <div class="login-form">
    <v-form
      >
      <v-text-field
        v-model="login"
        label="Login"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        required
      ></v-text-field>

      <v-btn
        class="mr-4"
        @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  import axios from "@/main";
    export default {
        name: "LoginPage",
        data() {
            return {
                login: null,
                password: null
            }
        },
        methods: {
            submit() {
                axios.post('https://gogee90.pythonanywhere.com/api/dj-rest-auth/login/', {
                    username: this.login,
                    password: this.password
                }).then(value => {
                    localStorage.setItem('token', value.data['key'])
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
.login-form {
  margin-top: 30px;
}
</style>
