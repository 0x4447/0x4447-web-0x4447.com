<template>
  <div id="header" class="container">
    <picture>
      <source
        :srcset="`${require(`~/assets/img/${name}/header@1x.png`)} 1x,
          ${require(`~/assets/img/${name}/header@2x.png`)} 2x`"
      />
      <img
        class="img-fluid mx-auto"
        :src="require(`~/assets/img/${name}/header@1x.png`)"
        :alt="alt"
      />
    </picture>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    name: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
}
</script>
