<template>
  <div>
    <div
      class="container full-screen-container d-flex flex-column justify-content-start justify-content-md-center"
    >
      <div class="row d-flex justify-content-center">
        <div
          class="col-12 col-md-11 col-lg-8 d-flex flex-column justify-content-center mt-0 mt-sm-5"
          id="home_header"
        >
          <img
            class="mx-auto"
            src="~/assets/img/global/company_logo_rectangle.svg"
            id="home_header_logo"
            alt="logo"
          />
          <p class="mt-3 text-center home-header-text">
            We build software with solid foundations to provide flexible
            solutions that are easily modified and extended.
          </p>
        </div>
      </div>
      <div class="row d-flex position-relative icon-scroll-row">
        <div class="icon-scroll" id="icon-scroll"></div>
      </div>
    </div>
    <div class="container marketing">
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
import ContentWithImage from "../components/common/ContentWithImage";
import headMixins from "../mixins/head-mixins";
import NextTextComponent from "../components/common/NextTextComponent";
import data from "~/assets/content/pages/home.json";

export default {
  name: "Home",
  components: { NextTextComponent, ContentWithImage },
  mixins: [headMixins],
  data() {
    return {
      data
    };
  },
  mounted() {
    setTimeout(() => {
      if (!$(window).scrollTop()) {
        this.show_icon_for_two_seconds();
      }
    }, 1000);
  },
  methods: {
    show_icon_for_two_seconds() {
      $("#icon-scroll").fadeIn();
      setTimeout(function() {
        $("#icon-scroll").fadeOut();
      }, 2000);
      $(window).scroll(function() {
        $("#icon-scroll").fadeOut();
      });
    }
  }
};
</script>
