<template>
  <div>
    <div
      class="container full-screen-container d-flex flex-column justify-content-start justify-content-md-center"
    >
      <PageHeader name="toolbox" alt="0x4447, LLC. - Toolbox" />
      <PageHeaderText :title="data.title" :description="data.description" />
    </div>

    <div class="container marketing">
      <ContentWithImage
        v-for="(item, index) in data.content"
        :key="index"
        :data="item"
        :image-left="index % 2 !== 0"
      />

      <hr class="featurette-divider" />

      <NextTextComponent :title="data.nextTitle" :text="data.nextContent" />
    </div>
  </div>
</template>

<script>
import PageHeader from "../../components/common/PageHeader";
import ContentWithImage from "../../components/common/ContentWithImage";
import PageHeaderText from "../../components/common/PageHeaderText";
import headMixins from "../../mixins/head-mixins";
import data from "~/assets/content/pages/toolbox.json";
import NextTextComponent from "../../components/common/NextTextComponent";

export default {
  name: "Toolbox",
  components: {
    NextTextComponent,
    PageHeaderText,
    ContentWithImage,
    PageHeader
  },
  mixins: [headMixins],
  data() {
    return {
      data
    };
  }
};
</script>
