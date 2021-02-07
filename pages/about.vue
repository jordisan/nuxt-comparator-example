<template>
  <section class="about">
    <header class="title-wrapper">
      <h1 class="title">
        About
      </h1>
      <p class="description">
        {{ globalContent.description }}
      </p>
    </header>
    <nuxt-content v-if="globalContent" :document="globalContent" />
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import ContentPageBase from './ContentPageBase.vue'

/**
 * About page
 */
@Component
export default class About extends ContentPageBase {
  public async fetch (): Promise<any> {
    await this.getGlobalData()
    this.pageTitle = 'About'
  }
}
</script>

<style lang="scss">
</style>
