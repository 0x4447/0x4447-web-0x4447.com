<template>
  <div>
    <TheHeader />
    <main role="main">
      <Nuxt />
      <TheFooter />
    </main>
  </div>
</template>

<script>
import TheHeader from '../components/partials/TheHeader'
import TheFooter from '../components/partials/TheFooter'
export default {
  components: { TheFooter, TheHeader },
}
</script>

<style>
.navbar-link {
  font-weight: 300;
}
</style>
