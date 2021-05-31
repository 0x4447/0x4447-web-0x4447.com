<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-html="description"></div>
  </div>
</template>

<script>
export default {
  name: "PageHeaderText",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>
