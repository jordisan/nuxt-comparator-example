<template>
  <section v-if="globalContent" class="about">
    <header class="title-wrapper">
      <h1 class="title">
        About
      </h1>
      <p class="description">
        {{ globalContent.description }}
      </p>
    </header>
    <nuxt-content :document="globalContent" />
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import ContentPageBase from './ContentPageBase.vue'

/**
 * About page (shows info from global document)
 */
@Component
export default class About extends ContentPageBase {
  public mounted (): void {
    this.pageTitle = 'About'
  }
}
</script>

<style lang="scss">
</style>
