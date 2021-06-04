export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    submitted: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: Array,
      required: true,
    },
    wasValidated: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value)
    },
    onBlur(event) {
      this.$emit('blur', event)
    },
    onChange(event) {
      this.$emit('change', event)
    },
  },
}
