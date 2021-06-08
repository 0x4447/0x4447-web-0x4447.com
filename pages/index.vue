<template>
  <div class="home">
    <div
      class="
        container
        full-screen-container
        d-flex
        flex-column
        justify-content-start justify-content-md-center
      "
    >
      <div class="row d-flex justify-content-center">
        <div
          class="
            col-12 col-md-11 col-lg-8
            d-flex
            flex-column
            justify-content-center
            mt-0 mt-sm-5
          "
        >
          <img
            class="home__header-logo mx-auto"
            src="~/assets/img/global/company_logo_rectangle.svg"
            alt="logo"
          />
          <p class="mt-3 text-center home__header-text">
            We build software with solid foundations to provide flexible
            solutions that are easily modified and extended.
          </p>
        </div>
      </div>
      <IconScroll />
    </div>
    <div class="container">
      <ContentWithImage
        v-for="(item, index) in data.content"
        :key="index"
        :data="item"
        :image-left="index % 2 === 0"
      />
      <hr class="featurette-divider" />

      <NextTextComponent :title="data.nextTitle" :text="data.nextContent" />
    </div>
  </div>
</template>

<script>
import IconScroll from '../components/IconScroll'
import ContentWithImage from '../components/common/ContentWithImage'
import headMixins from '../mixins/head-mixins'
import NextTextComponent from '../components/common/NextTextComponent'
import data from '~/assets/content/pages/home.json'

export default {
  name: 'Home',
  components: { IconScroll, NextTextComponent, ContentWithImage },
  mixins: [headMixins],
  data() {
    return {
      data,
    }
  },
}
</script>

<style lang="scss">
.home {
  &__header-logo {
    max-width: rem(480);
  }

  &__header-text {
    font-size: rem(28);

    @include media-breakpoint-down(md) {
      font-size: rem(20);
    }
  }
}
</style>
