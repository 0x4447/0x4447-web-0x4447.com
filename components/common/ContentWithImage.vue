<template>
  <div
    :id="data.value"
    class="content-with-image row d-flex align-items-center my-4 my-lg-0"
  >
    <div
      :class="`col-md-6 ${[
        imageLeft ? 'order-md-2 order-sm-1' : 'order-md-1 order-sm-2',
      ]}`"
    >
      <picture class="img-fluid mx-auto">
        <source
          :srcset="`${require(`~/assets/img/${data.img}@1x.png`)} 1x,
          ${require(`~/assets/img/${data.img}@2x.png`)} 2x`"
        />
        <img
          class="img-fluid mx-auto"
          :src="require(`~/assets/img/${data.img}@1x.png`)"
          alt="0x4447 Tomato"
        />
      </picture>
    </div>
    <div class="col-md-6 order-md-1 order-sm-2">
      <h2 class="content-with-image__heading">
        {{ data.name }}
        <NuxtLink
          class="content-with-image__heading-link-icon"
          :to="{ hash: data.value }"
        >
          <img src="~/assets/img/global/baseline-link.svg" alt="Link Icon" />
        </NuxtLink>
      </h2>
      <div v-html="data.text"></div>
      <a v-if="data.npmUrl" :href="data.npmUrl" target="_blank">
        <img src="~/assets/img/global/npm.svg" alt="npm" width="50" />
      </a>
      <a v-if="data.githubUrl" :href="data.githubUrl" target="_blank">
        <img src="~/assets/img/global/github.svg" alt="GitHub" width="20" />
      </a>
      <a v-if="data.travisUrl" :href="data.travisUrl" target="_blank">
        <img src="~/assets/img/global/travisci.svg" alt="Travis" width="20" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentWithImage',
  props: {
    imageLeft: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.content-with-image {
  min-height: 100vh;

  &__heading-link-icon {
    position: relative;
    visibility: hidden;
    margin: 0 -10px;
  }

  &__heading {
    font-weight: 300;
    line-height: 1;
    letter-spacing: rem(-0.8);
    &:hover {
      .content-with-image__heading-link-icon {
        visibility: visible;
      }
    }

    @include media-breakpoint-up(sm) {
      font-size: 50px;
    }

    @include media-breakpoint-up(lg) {
      margin-top: rem(112);
    }
  }
}
</style>
