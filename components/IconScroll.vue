<template>
  <div class="icon-scroll row d-flex position-relative">
    <div class="icon-scroll__content"></div>
  </div>
</template>

<script>
export default {
  name: 'IconScroll',
}
</script>

<style lang="scss">
// Scrolling icon

.icon-scroll {
  height: 70px;
  margin-bottom: 5vh;
  &__content {
    position: absolute;
    left: 50%;
    top: 0;
    width: 40px;
    height: 70px;
    margin-left: -20px;
    box-shadow: inset 0 0 0 1px rgb(33, 37, 41);
    border-radius: 25px;
    animation-name: fade;
    animation-duration: 3s;
    animation-delay: 1s;
    opacity: 0;

    &::before {
      position: absolute;
      left: 50%;
      content: '';
      width: 8px;
      height: 8px;
      background: rgb(33, 37, 41);
      margin-left: -4px;
      top: 8px;
      border-radius: 4px;
      animation-duration: 1.5s;
      animation-delay: 1s;
      animation-iteration-count: infinite;
      animation-name: scroll;
    }
  }

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    16% {
      opacity: 1;
    }
    84% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
