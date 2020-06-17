<template>
  <v-app>
    <v-app-bar id="nav" app clipped-left>
      <v-toolbar-title>
        <router-link to="/">
          Contacts app
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-title v-if="!logged" class="toolbar-option">
          <router-link to="/login">Login</router-link>
        </v-toolbar-title>
        <v-toolbar-title v-if="!logged" class="toolbar-option">
          <router-link to="/register">Register</router-link>
        </v-toolbar-title>
        <v-toolbar-title v-if="logged" class="toolbar-option">
          <a @click="logout" href="/">Logout</a>
        </v-toolbar-title>
    </v-app-bar>

    <router-view></router-view>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend(
  {
    name: 'App',
    data() {
      return {
        logged: false
      }
    },
    methods: {
      logout() {
        console.log("Logged out")
        localStorage.clear();
      }
    },
    created() {
      this.$vuetify.theme.dark = true;
      if (localStorage.getItem('token')) {
        Vue.prototype.$logged = true;
      } else {
        Vue.prototype.$logged = false;
      }
      this.logged = Vue.prototype.$logged;
    }
  });
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    text-decoration: none;
    color: white;

    &.router-link-active {
      text-decoration: underline;
    }
  }
}

.toolbar-option {
  margin-right: 1%;
  font-weight: lighter;
}
</style>
