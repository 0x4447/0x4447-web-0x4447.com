<template>
  <footer class="footer container text-center">
    <div class="row">
      <div class="col">
        <hr class="footer__divider" />

        <div class="row d-flex">
          <div class="col-12 col-md-4">
            <div class="row justify-content-center">
              <div class="col-4">
                <p class="footer__site-map-text">Site</p>
                <p class="footer__site-map-link">
                  <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
                </p>
                <p class="footer__site-map-link">
                  <NuxtLink :to="{ name: 'clients' }">Clients</NuxtLink>
                </p>
                <p class="footer__site-map-link">
                  <NuxtLink :to="{ name: 'toolbox' }">Toolbox</NuxtLink>
                </p>
              </div>
              <div class="col-4">
                <p class="footer__site-map-text">Company</p>
                <p class="footer__site-map-link">
                  <NuxtLink :to="{ name: 'about' }"> About</NuxtLink>
                </p>
                <p class="footer__site-map-link">
                  <NuxtLink :to="{ name: 'contact' }"> Contact</NuxtLink>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 d-md-none">
            <hr class="footer__divider" />
          </div>

          <div style="padding-left: 4rem" class="col-12 col-md-4">
            <div class="row justify-content-center">
              <a
                target="_blank"
                class="footer__social-badge"
                href="https://www.npmjs.com/org/0x4447"
              >
                <img
                  src="~/assets/img/global/npm.svg"
                  alt="npm"
                  class="footer__social-badge-img"
                />
              </a>
              <a
                target="_blank"
                class="footer__social-badge"
                href="https://github.com/0x4447"
              >
                <img
                  src="~/assets/img/global/github.svg"
                  alt="GitHub"
                  class="footer__social-badge-img"
                />
              </a>
              <a
                target="_blank"
                class="footer__social-badge"
                href="https://travis-ci.org/0x4447"
              >
                <img
                  src="~/assets/img/global/travisci.svg"
                  alt="Travis"
                  class="footer__social-badge-img"
                />
              </a>
            </div>
            <div style="padding-top: 20px" class="row justify-content-center">
              <a
                target="_blank"
                class="footer__social-badge"
                href="https://twitter.com/0x4447"
              >
                <img
                  src="~/assets/img/global/twitter.svg"
                  alt="Twitter"
                  class="footer__social-badge-img"
                />
              </a>
              <a
                target="_blank"
                class="footer__social-badge"
                href="https://www.linkedin.com/company/0x4447"
              >
                <img
                  src="~/assets/img/global/linkedin.svg"
                  alt="LinkedIn"
                  class="footer__social-badge-img"
                />
              </a>
              <a
                target="_blank"
                class="footer__social-badge"
                href="https://www.facebook.com/0x4447"
              >
                <img
                  src="~/assets/img/global/facebook.svg"
                  alt="Facebook"
                  class="footer__social-badge-img"
                />
              </a>
            </div>
          </div>

          <div class="col-12 d-md-none">
            <hr class="footer__divider" />
          </div>

          <div class="col-12 col-md-4">
            <img class="img-fluid" src="~/assets/img/about/og.png" />
          </div>
        </div>

        <hr class="footer__divider" />

        <p class="footer__copy">Est.2016, Copr.<a href="/">0x4447</a>™ LLC.</p>
        <p class="footer__commit-id">
          <a
            class="text-muted"
            target="_blank"
            href="https://github.com/0x4447/0x4447.com/commit/14b3553ba12fc2353ace3091ae73e6e04909cb9c"
            >14b3553</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style lang="scss">
.footer {
  &__divider {
    margin-top: rem(80);
    margin-bottom: rem(80);

    @include media-breakpoint-down(lg) {
      margin-top: rem(48);
      margin-bottom: rem(48);
    }
  }

  &__site-map-text {
    text-align: left;
    font-weight: 700;
    font-size: rem(14);
    margin-bottom: rem(8);
  }

  &__site-map-link {
    text-align: left;
    line-height: rem(22);
  }

  &__social-badge {
    display: inline-block;
    padding: 0 rem(56) 0 0;

    &-img {
      width: 30px;
      height: 30px;
    }
  }

  &__copy {
    margin-top: 40px;
  }

  &__commit-id {
    margin-top: 40px;
  }

  .exact-active {
    font-weight: 100 !important;
  }
}
</style>
