<template>
    <v-card color="#26c6da" dark class="contact">
        <v-card-title >{{ name }}</v-card-title>
        <v-card-subtitle>{{ number }}</v-card-subtitle>
        <v-icon class="mr-1" @click="deleteContact">mdi-delete</v-icon>
    </v-card>
</template>

<script lang="ts">
import {Vue, Component, Prop } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Contact extends Vue {
    @Prop()
    name: string;

    @Prop()
    number: string;

    @Prop()
    id: string;

    async deleteContact() {
        const token = localStorage.getItem('token');
        const route = "http://localhost:4000/user/remove-phone/"+this.id;
        try {
            await axios.delete(route, {headers: {"auth":token}});
        } catch (e) {
            alert("Error deleting contact");
        }
        this.$emit("updateContacts");
    }
}
</script>

<style>
.contact {
    margin: 1% 0 0 1%;
    width: 31%;
}
</style>
