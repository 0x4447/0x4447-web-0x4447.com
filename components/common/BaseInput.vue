<template>
  <div class="base-input form-group" :class="{ 'was-validated': wasValidated }">
    <label>{{ label }}</label>
    <input
      :value="value"
      :type="type"
      :required="required"
      :disabled="disabled"
      class="form-control"
      @input="onInput($event.target.value)"
      @blur="onBlur($event)"
      @change="onChange($event)"
    />
    <div
      v-for="(error, index) in errors"
      :key="index + '-base-input-error'"
      class="invalid-feedback"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
import inputMixins from '~/mixins/input-mixins'

export default {
  name: 'BaseInput',
  mixins: [inputMixins],
}
</script>
