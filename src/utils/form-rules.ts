export function requiredRule(message = 'This field is required'): (value: any) => boolean|string {
    return (value) => (!!value || value === 0) || message;
}

export function emailRule(message = 'Must be an email'): (value: any) => boolean|string {
    return (value) => /.+@.+\..+/.test(value) || message;
}

export function phoneRule(message = "Must be a phone"): (value: any) => boolean|string {
    return (value) => /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value) || message; 
}
