<template>
  <div class="row full-height-row d-flex align-items-center" :id="data.value">
    <div
      :class="
        `col-md-6 ${[
          imageLeft ? 'order-md-2 order-sm-1' : 'order-md-1 order-sm-2'
        ]}`
      "
    >
      <picture class="featurette-image img-fluid mx-auto">
        <source
          :srcset="
            `${require(`~/assets/img/${data.img}@1x.png`)} 1x,
          ${require(`~/assets/img/${data.img}@2x.png`)} 2x`
          "
        />
        <img
          class="featurette-image img-fluid mx-auto"
          :src="require(`~/assets/img/${data.img}@1x.png`)"
          alt="0x4447 Tomato"
        />
      </picture>
    </div>
    <div class="col-md-6 order-md-1 order-sm-2">
      <h2 class="featurette-heading hover-link-container">
        {{ data.name }}
        <NuxtLink :to="{ hash: data.value }">
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
  name: "ContentWithImage",
  props: {
    imageLeft: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.full-height-row {
  min-height: 100vh;
}

#header .featurette-image {
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
  @media (min-width: 40em) {
    font-size: 50px;
  }

  @media (min-width: 62em) {
    margin-top: 7rem;
  }
}

.lead {
  font-weight: 300;
}
</style>
