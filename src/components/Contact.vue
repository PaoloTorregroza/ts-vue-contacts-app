<template>
    <v-card color="#26c6da" dark class="contact">
        <v-card-title >Lore</v-card-title>
        <v-card-text>+57 3455331234</v-card-text>
    </v-card>
</template>

<script lang="ts">
import {Vue, Component } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {

}
</script>

<style>
.contact {
    margin: 5px 0 0 5px;
    width: 32.8%;
}
</style>