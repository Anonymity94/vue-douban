<template>
  <transition>
    <svg class="spinner" :class="{ show: show }" v-show="show" width="68px" height="68px" viewBox="0 0 44 44">
      <circle class="path" fill="none" stroke-width="4" stroke-linecap="round" cx="22" cy="22" r="20"></circle>
    </svg>
  </transition>
</template>

<script>
  export default {
    props: ['show']
  }
</script>

<style lang="scss">
  $offset: 126;
  $duration: 1.4s;
  .spinner {
    position: fixed;
    z-index: 999;
    transition: opacity .15s ease;
    animation: rotator $duration linear infinite;
    animation-play-state: paused;
    right: 50%;
    top: 20%;
    margin-right: -34px;
    &.show {
      animation-play-state: running
    }
    &.v-enter, &.v-leave-active {
      opacity: 0;
    }
    &.v-enter-active, &.v-leave {
      opacity: 1;
    }
  }
  @keyframes rotator {
    0% {
      transform: scale(0.5) rotate(0deg);
    }
    100% {
      transform: scale(0.5) rotate(270deg);
    }
  }
  .spinner .path {
    stroke: #42b983;
    stroke-dasharray: $offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash $duration ease-in-out infinite;
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: $offset;
    }
    50% {
      stroke-dashoffset: ($offset/2) transform rotate(135deg);
    }
    100% {
      stroke-dashoffset: $offset transform rotate(450deg);
    }
  }
</style>
