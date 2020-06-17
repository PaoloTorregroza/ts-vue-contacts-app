<template>
    <v-main>
        <v-card v-if="this.$logged" class="main-container">
        <v-card-title>Your contacts</v-card-title>
            <NewNumberDialog @updateContacts="getContacts"/>
            <div class="contact-container">
              <Contact @updateContacts="getContacts"
                      v-for="contact in contacts"
                      v-bind:key="contact.id"
                      :name="contact.name"
                      :number="contact.number"
                      :id="contact.id"
              ></Contact>
            </div>
        </v-card>
        <v-card v-else class="main-container">
            <v-card-title >
                Your contacts app UwU
            </v-card-title>
        </v-card>
    </v-main>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Contact from "../components/Contact.vue";
  import NewNumberDialog from "../components/NewNumberDialog.vue";
  import axios from 'axios';

  export default Vue.extend(
  {
    name: 'App',
    data() {
      return {
          contacts: []
        }
    },
    methods: {
        async getContacts() {
            const token = localStorage.getItem('token');
            const result = await axios.get("http://localhost:4000/user/phones",
                {headers: {"auth": token}});
            this.contacts = result.data;
        }
    },
    components: {
      Contact,
      NewNumberDialog
    },
    created() {
        this.$vuetify.theme.dark = true;
    },
    mounted() {
        if (localStorage.getItem('token')) {
            this.getContacts();
        }
    }
  });
</script>

<style>
  .main-container {
    padding: 1% 4.5%;
    margin: 20px 10% 5% 10%;
  }

  .contact-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>


