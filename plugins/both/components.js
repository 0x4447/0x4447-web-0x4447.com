import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import BaseInput from '@/components/common/BaseInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseTextarea from '@/components/common/BaseTextarea.vue'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('BaseInput', BaseInput)
Vue.component('BaseButton', BaseButton)
Vue.component('BaseTextarea', BaseTextarea)
