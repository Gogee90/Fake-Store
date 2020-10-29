<template>
  <div class="login-form">
    <v-col cols="7">
        <v-card
        align="center"
        justify="center"
      >
      <v-card-title center>Login</v-card-title>
      <form>
        <ul>
          <li>
            <v-text-field type="text" label="Login" v-model="login"></v-text-field>
          </li>
          <li>
            <v-text-field v-model="password" type="password" label="Password"></v-text-field>
          </li>
          <li>
            <v-btn @click.prevent="submit">Submit</v-btn>
            <v-btn type="reset">Cancel</v-btn>
          </li>
          <li v-if="feedback">{{feedback}}</li>
        </ul>
      </form>
    </v-card>
    </v-col>
  </div>
</template>

<script>
  import axios from "axios";
    export default {
        name: "LoginPage",
        data() {
            return {
                login: null,
                password: null,
                feedback: null
            }
        },
        methods: {
            submit() {
                axios.post('/dj-rest-auth/login/', {
                    username: this.login,
                    password: this.password
                }).then(value => {
                    if (value.status == 200) {
                        localStorage.setItem('token', value.data['key'])
                        localStorage.setItem('is_logged', true)
                        this.$store.dispatch('saveStatus', localStorage['is_logged'])
                        console.log(this.$store.getters.getStatus)
                        this.$router.push('/')
                    } else {
                        this.feedback = 'Username or password are incorrect!'
                        alert(this.feedback)
                    }
                }).catch(err => {
                    console.log(err)
                    this.feedback = err
                })
            }
        }
    }
</script>

<style scoped>
.login-form {
  margin-top: 30px;
}

.login-form ul {
  list-style: none;
  padding: 20px;
}
</style>
