<template>
  <footer class="container text-center">

    <div class="row">

      <div class="col">

        <hr class="footer-divider">

        <div class="row d-flex">

          <div class="col-12 col-md-4">
            <div class="row justify-content-center">
              <div class="col-4">
                <p class="site-map-text">Site</p>
                <p class="site-map-link">
                  <NuxtLink
                    :to="{ name: 'index' }">
                    Home
                  </NuxtLink>
                </p>
                <p class="site-map-link">
                  <NuxtLink
                    :to="{ name: 'clients' }">
                    Clients
                  </NuxtLink>
                </p>
                <p class="site-map-link">
                  <NuxtLink
                    :to="{ name: 'toolbox' }">
                    Toolbox
                  </NuxtLink>
                </p>
              </div>
              <div class="col-4">
                <p class="site-map-text">Company</p>
                <p class="site-map-link">
                  <NuxtLink
                    :to="{ name: 'about' }">
                    About
                  </NuxtLink>
                </p>
                <p class="site-map-link">
                  <NuxtLink
                    :to="{ name: 'contact' }">
                    Contact
                  </NuxtLink>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 d-md-none">
            <hr class="footer-divider"></hr>
          </div>

          <div style="padding-left:4rem" class="col-12 col-md-4">
            <div class="row justify-content-center">
              <a target="_blank" class="social-badge" href="https://www.npmjs.com/org/0x4447"><img
                src="~/assets/img/global/npm.svg" alt="npm"/></a>
              <a target="_blank" class="social-badge" href="https://github.com/0x4447"><img
                src="~/assets/img/global/github.svg" alt="GitHub"/></a>
              <a target="_blank" class="social-badge" href="https://travis-ci.org/0x4447"><img
                src="~/assets/img/global/travisci.svg" alt="Travis"/></a>
            </div>
            <div style="padding-top:20px" class="row justify-content-center">
              <a target="_blank" class="social-badge" href="https://twitter.com/0x4447"><img
                src="~/assets/img/global/twitter.svg" alt="Twitter"/></a>
              <a target="_blank" class="social-badge" href="https://www.linkedin.com/company/0x4447"><img
                src="~/assets/img/global/linkedin.svg" alt="LinkedIn"/></a>
              <a target="_blank" class="social-badge" href="https://www.facebook.com/0x4447"><img
                src="~/assets/img/global/facebook.svg" alt="Facebook"/></a>
            </div>
          </div>

          <div class="col-12 d-md-none">
            <hr class="footer-divider"></hr>
          </div>

          <div class="col-12 col-md-4">
            <img class="img-fluid" src="~/assets/img/about/og.png"/>
          </div>

        </div>

        <hr class="footer-divider">

        <p id="copy">Est.2016, Copr.<a href="/">0x4447</a>™ LLC.</p>
        <p id="commit_id">
          <a class="text-muted" target="_blank"
             href="https://github.com/0x4447/0x4447.com/commit/14b3553ba12fc2353ace3091ae73e6e04909cb9c">14b3553</a>
        </p>
      </div>

    </div>

  </footer>
</template>

<script>
  export default {
    name: 'TheFooter'
  }
</script>

<style>

  .footer-divider {
    margin-top: 5em;
    margin-bottom: 5em;
  }

  .social-badge {
    display: inline-block;
    padding: 0 3.5rem 0 0;
  }

  .social-badge img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 62em) {
    .footer-divider {
      margin-top: 3em;
      margin-bottom: 3em;
    }
  }
</style>
