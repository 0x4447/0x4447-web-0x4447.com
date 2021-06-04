<template>
  <header class="header">
    <nav
      class="
        navbar navbar-light navbar-expand-lg
        site-header
        sticky-top
        d-flex
        justify-content-end
      "
    >
      <button
        aria-label="Toggle navigation"
        class="navbar-toggler mx-auto pt-1 border-0 mb-2"
        type="button"
        @click="toggleMenu"
      >
        <span class="header__menu-button">Menu</span>
      </button>

      <div ref="navbar" class="header__navbar navbar-collapse">
        <ul
          ref="navbarList"
          class="
            header__navbar-list
            navbar-nav
            mr-auto
            container
            d-flex
            flex-column flex-md-row
            align-items-center
            justify-content-between
          "
        >
          <li class="nav-item">
            <NuxtLink
              exact
              class="navbar-link py-2 d-md-inline-block"
              :to="{ name: 'index' }"
            >
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              exact
              class="navbar-link py-2 d-md-inline-block"
              :to="{ name: 'about' }"
            >
              About
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              exact
              class="navbar-link py-2 d-md-inline-block"
              :to="{ name: 'clients' }"
            >
              Clients
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              exact
              class="navbar-link py-2 d-md-inline-block"
              :to="{ name: 'toolbox' }"
            >
              Toolbox
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="navbar-link py-2 d-md-inline-block"
              :to="{ name: 'contact' }"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      menuIsOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      const { navbar, navbarList } = this.$refs
      navbar.style.maxHeight = this.menuIsOpen
        ? '0px'
        : navbarList.clientHeight + 'px'

      this.menuIsOpen = !this.menuIsOpen
    },
  },
}
</script>

<style lang="scss">
.header {
  &__menu-button {
    font-size: 1.375rem;
    color: #007bff;
  }

  &__navbar {
    overflow: hidden;
    max-height: none;
    transition: 0.3s ease;

    @include media-breakpoint-down(lg) {
      max-height: 0;
    }
  }

  .exact-active {
    font-weight: 100 !important;
  }
}
</style>
