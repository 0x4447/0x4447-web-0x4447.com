<template>
  <div>
    <PageHeader name="error" alt="0x4447, LLC. - Error" />
    <div class="container"></div>
  </div>
</template>

<script>
import PageHeader from '../components/common/PageHeader'
export default {
  name: 'Error',
  components: { PageHeader },
  layout: 'error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
