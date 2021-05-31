<template>
  <div>
    <h1>{{ title }}</h1>
    <div ref="nextContent" v-html="text"></div>
  </div>
</template>

<script>
export default {
  name: "NextTextComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$refs.nextContent.addEventListener("click", this.convertAToNuxtLink);
  },
  beforeDestroy() {
    this.$refs.nextContent.removeEventListener(
      "click",
      this.convertAToNuxtLink
    );
  },
  methods: {
    convertAToNuxtLink(e) {
      e.preventDefault();
      const anchor = e.target.closest("a");
      if (anchor !== null) {
        this.$router.push({ path: anchor.getAttribute("href") });
      }
      return false;
    }
  }
};
</script>
