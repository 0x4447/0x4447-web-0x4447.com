import { extend, setInteractionMode } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
extend('required', {
  ...required,
  message: 'This field is required.',
})
extend('email', {
  ...email,
  message: 'There is something wrong with the email.',
})

setInteractionMode('eager')
