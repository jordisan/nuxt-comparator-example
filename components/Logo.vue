<template>
  <img src="/logo.svg" class="logo" @error="onImageLoadFailure($event)">
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

/**
 * Site logo; image must be /static/logo.svg or /static/logo.png
 */
@Component
export default class Logo extends Vue {
  alternate: boolean = false
  onImageLoadFailure (event: ErrorEvent): void {
    // try load alternate image
    const alternateSrc: string = '/logo.png'
    const image: HTMLImageElement = event.target as HTMLImageElement
    if (!this.alternate) {
      this.alternate = true
      image.src = alternateSrc
    }
  }
}
</script>

<style>
.logo {
  animation: 2s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
