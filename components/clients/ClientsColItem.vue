<template>
  <div class="col-lg-4">
    <picture class="rounded-circle">
      <source
        :srcset="
          `${require(`~/assets/img/clients/logos/${client.logo}@1x.jpg`)} 1x, ${require(`~/assets/img/clients/logos/${client.logo}@2x.jpg`)} 2x`
        "
      />
      <img
        :src="`~/assets/img/clients/logos/${client.logo}@1x.jpg`"
        width="140"
        height="140"
        :alt="client.name"
      />
    </picture>
    <h2>{{ client.name }}</h2>
    <p>{{ client.description }}</p>
  </div>
</template>

<script>
export default {
  name: "ClientsColItem",
  props: {
    client: {
      type: Object,
      required: true
    }
  }
};
</script>
