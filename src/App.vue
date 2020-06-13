<template>
  <v-app>
    <v-app-bar id="nav" app clipped-left>
      <v-toolbar-title>
        <router-link to="/">
          Contacts app
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="toolbar-option">
        <router-link to="/login">Login</router-link>
      </v-toolbar-title>
      <v-toolbar-title class="toolbar-option">
        <router-link to="/register">Register</router-link>
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
    created() {
      this.$vuetify.theme.dark = true;
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
</style>
