<template>
  <div class="clients-col-item col-lg-4">
    <picture class="mb-3">
      <source
        :srcset="`${require(`~/assets/img/clients/logos/${client.logo}@1x.jpg`)} 1x, ${require(`~/assets/img/clients/logos/${client.logo}@2x.jpg`)} 2x`"
      />
      <img
        :src="`~/assets/img/clients/logos/${client.logo}@1x.jpg`"
        :alt="client.name"
        class="clients-col-item__img"
      />
    </picture>
    <h2>{{ client.name }}</h2>
    <p>{{ client.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ClientsColItem',
  props: {
    client: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.clients-col-item {
  &__img {
    width: 140px;
    height: 140px;
  }
}
</style>
