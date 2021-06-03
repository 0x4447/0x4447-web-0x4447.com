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
        data-bs-target="#navbarSupportedContent"
        data-bs-toggle="collapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler mx-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="header__menu-button">Menu</span>
      </button>

      <div
        id="navbarSupportedContent"
        class="header__navbar collapse navbar-collapse"
      >
        <ul
          class="
            header__navbar-list
            navbar-nav
            mr-auto
            container
            d-flex
            flex-column flex-md-row
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
}
</script>

<style lang="scss">
.header {
  &__menu-button {
    font-size: 1.375rem;
    color: #007bff;
  }
}
</style>
