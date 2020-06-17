<template>
    <v-main>
        <v-card id="login-card">
            <v-card-title>Register</v-card-title>
            <v-form ref="form" v-model="form.valid" @submit.prevent="onSubmit">
                <v-card-text>
                    <v-text-field v-model="form.fields.name" label="Name" :rules="form.rules.name" />
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
    import axios from "axios";

    interface Form extends FormDefinition {
        valid: boolean;
        fields: {
            name: string;
            email: string;
            password: string;
        };
        rules: {
            name: ((message?: string) => {})[];
            email: ((message?: string) => {})[];
            password: ((message?: string) => {})[];
        };
    }

    @Component
    export default class Register extends Vue {
        form: Form = {
            valid: false,
            fields: {
                email: "",
                name: "",
                password: ""
            },
            rules: {
                email: [
                    requiredRule(),
                    emailRule()
                ],
                name: [
                    requiredRule()
                ],
                password: [
                    requiredRule()
                ]
            }
        }
        async onSubmit() {
            const queryData = {
                email: this.form.fields.email,
                password: this.form.fields.password,
                name: this.form.fields.name
            }
            try {
                await axios.post('http://localhost:4000/auth/register', queryData);
                await this.$router.push("/login");
            } catch (e) {
                console.log(e);
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