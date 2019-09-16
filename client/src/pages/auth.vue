<template>
  <div class="q-pa-md auth">
    <div class="row container">
      <div class="col align--middle">
        <img class="img--md" src="../statics/coming-soon.png" alt />
      </div>
      <div class="col">
        <div class="text-h4 h4 text--white">Welcome! sign in to continue</div>
        <q-form color="white" @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            color="white"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            class="placeholder--white"
          />

          <q-input
            filled
            type="password"
            v-model="age"
            label="Your password"
            lazy-rules
            :rules="[
          val => val !== null && val !== '' || 'Please type your age',
        ]"
          />

          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth {
  background-color: #353740;
  height: 100vh;
}
</style>
<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      name: null,
      age: null,

      accept: false,
      provider: new firebase.auth.GoogleAuthProvider()
    }
  },
  mounted () {
    this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first'
        })
      } else {
        let provider = this.provider
        firebase.auth().signInWithPopup(provider).then(function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken
          // The signed-in user info.
          var user = result.user

          // ...
        }).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // The email of the user's account used.
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential
          // ...
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>
