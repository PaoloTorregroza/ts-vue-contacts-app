<template>
  <v-main>
    <v-card id="login-card">
      <v-card-title>Login</v-card-title>
      <v-form ref="form" v-model="form.valid" @submit.prevent="onSubmit">
        <v-card-text>
          <v-text-field type="email" v-model="form.fields.email" label="Email" :rules="form.rules.email" />
          <v-text-field type="password" v-model="form.fields.password" label="Password" :rules="form.rules.password" />
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" color="primary" :disabled="!form.valid">
            Continue
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-main>
</template>

<script lang="ts">
  import {Vue, Component } from 'vue-property-decorator';
  import {requiredRule, emailRule} from '../utils/form-rules';

  interface Form extends FormDefinition {
    valid: boolean;
    fields: {
      email: string;
      password: string;
    };
    rules: {
      email: ((message?: string) => {})[];
      password: ((message?: string) => {})[];
    };
  }

  @Component
  export default class Login extends Vue {
    form: Form = {
      valid: false,
      fields: {
        email: "",
        password: ""
      },
      rules: {
        email: [
                requiredRule(),
                emailRule()
        ],
        password: [
                requiredRule()
        ]
      }
    }
  }
</script>

<style>
  #login-card {
    padding: 1% 4.5%;
    margin: 20px 30% 5% 30%;
  }
</style>