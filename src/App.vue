<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-toolbar-title>Contacts app</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="toolbar-option"><a>Login</a></v-toolbar-title>
      <v-toolbar-title class="toolbar-option"><a>Register</a></v-toolbar-title>
    </v-app-bar>
    
    <v-main>
      <v-card id="main-container">
        <v-card-title>Your contacts</v-card-title>
        <div class="contact-container">
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </div>
      </v-card>
    </v-main>

    <v-footer app>
        <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Contact from "./components/Contact.vue";

export default Vue.extend(
{
  name: 'App',

  components: {
    Contact,
  },
  created() {
    this.$vuetify.theme.dark = true;
  }

});
</script>

<style>
#main-container {
  padding: 1% 4.5%;
  margin: 20px 10% 5% 10%;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
}

.toolbar-option {
  margin-right: 1%;
  font-weight: lighter;
}
</style>


  