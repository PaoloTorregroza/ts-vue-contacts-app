<template>
    <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add contact
        </v-btn>
      </template>
      <v-card>
      <v-card-title>Add new contact</v-card-title>
      <v-form ref="form" v-model="form.valid" @submit.prevent="onSubmit">
        <v-card-text>
          <v-card-text class="error" v-if="invalidData">Invalid email or password</v-card-text>
          <v-text-field type="text" v-model="form.fields.name" label="Name" :rules="form.rules.name" />
          <v-text-field type="phone" v-model="form.fields.phoneNumber" label="Number" :rules="form.rules.phoneNumber" />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDialog">
            Close
          </v-btn>
          <v-btn type="submit" color="primary" :disabled="!form.valid">
            Continue
          </v-btn>
        </v-card-actions>
      </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import {requiredRule, emailRule, phoneRule} from '../utils/form-rules';
import axios from 'axios';

interface Form extends FormDefinition {
    valid: boolean;
    fields: {
      name: string;
      phoneNumber: string;
    };
    rules: {
      name: ((message?: string) => {})[];
      phoneNumber: ((message?: string) => {})[];
    };
  }

@Component
export default class NewNumberDialog extends Vue{
    form: Form = {
      valid: false,
      fields: {
        name: "",
        phoneNumber: ""
      },
      rules: {
        name: [
                requiredRule()
        ],
        phoneNumber: [
                requiredRule(),
                phoneRule()
        ]
      }
    }

    invalidData = false;
    dialog = false;

    closeDialog() {
        this.dialog = false;
    }

    async onSubmit() {
        const token = localStorage.getItem('token');
        const queryData = {name: this.form.fields.name, number: this.form.fields.phoneNumber} 
        this.dialog = false;
        try {
            const response = await axios.post("http://localhost:4000/user/add-phone", queryData, {headers: {"auth":token}});
        } catch (e) {
            this.invalidData = true;
        }
        this.$emit("updateContacts");
        this.form.fields.name = "";
        this.form.fields.phoneNumber = "";
    }
}
</script>

<style scoped>

</style>
