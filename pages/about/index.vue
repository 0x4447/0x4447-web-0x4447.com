<template>
  <div>
    <PageHeader name="about" alt="0x4447, LLC. - Abouts" />
    <div class="container marketing">
      <PageHeaderText :title="data.title" :description="data.description" />

      <hr class="featurette-divider" />

      <NextTextComponent :title="data.nextTitle" :text="data.nextContent" />
    </div>
  </div>
</template>

<script>
import PageHeader from "../../components/common/PageHeader";
import PageHeaderText from "../../components/common/PageHeaderText";
import headMixins from "../../mixins/head-mixins";
import NextTextComponent from "../../components/common/NextTextComponent";
import data from "~/assets/content/pages/about.json";

export default {
  name: "About",
  components: { NextTextComponent, PageHeaderText, PageHeader },
  mixins: [headMixins],
  data() {
    return {
      data
    };
  }
};
</script>
