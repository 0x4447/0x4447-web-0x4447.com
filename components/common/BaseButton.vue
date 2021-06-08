<template>
  <button
    :type="type"
    :disabled="disableButton"
    class="base-button btn btn-primary eggshell-background"
  >
    <span
      class="base-button__spinner spinner-border text-light"
      :hidden="!loading"
      role="status"
    >
      <span class="sr-only"></span>
    </span>
    <span><slot /></span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    disableButton() {
      return this.disabled || this.loading
    },
  },
}
</script>

<style lang="scss">
.base-button {
  &__spinner {
    width: 1.3rem;
    height: 1.3rem;
  }
}
</style>
