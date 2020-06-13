export function requiredRule(message = 'This field is required'): (value: any) => boolean|string {
    return (value) => (!!value || value === 0) || message;
}

export function emailRule(message= 'Must be an email'): (value: any) => boolean|string {
    return (value) => /.+@.+\..+/.test(value) || message;
}