<template lang='pug'>
  .admin-auth-page
    .auth-container
      form(@submit.prevent="onSubmit")
        app-control-input(type="email" v-model="email") E-Mail Address
        app-control-input(type="password" v-model="password") Password
        app-button(type="submit") {{ isLogin ? 'Login' : 'Sign Up' }}
        app-button(
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin") Switch to {{ isLogin ? 'Signup' : 'Login' }}
</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      let defaultAuthUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.fbAPIKey}`
      if (!this.login) {
        defaultAuthUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.fbAPIKey}`
      }
      this.$axios.$post(defaultAuthUrl, {
        email: this.email,
        password: this.password,
        secureSecureToken: true,
      }).then(result => {
        console.log(result)
      }).catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
