<template>
  <div>
    <PageHeader name="thankyou" alt="0x4447, LLC. - Thank You" />
    <div class="container">
      <NextTextComponent :title="data.nextTitle" :text="data.nextContent" />
    </div>
  </div>
</template>

<script>
import NextTextComponent from '../../../components/common/NextTextComponent'
import PageHeader from '../../../components/common/PageHeader'
import data from '~/assets/content/pages/thankyou.json'

export default {
  name: 'Thankyou',
  components: { PageHeader, NextTextComponent },
  data() {
    return {
      data,
    }
  },
}
</script>
