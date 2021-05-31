<template>
  <div>
    <PageHeader name="error" alt="0x4447, LLC. - Error" />

    <div class="container marketing"></div>
  </div>
</template>

<script>
import PageHeader from "../components/common/PageHeader";
export default {
  name: "Error",
  components: { PageHeader },
  props: ["error"],
  layout: "error" // you can set a custom layout for the error page
};
</script>
