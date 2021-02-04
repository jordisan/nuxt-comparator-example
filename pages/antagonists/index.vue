<template>
  <section class="antagonists">
    <header class="title-wrapper">
      <h1 class="title">
        Comparison
      </h1>
    </header>
    <AntagonistComparison :content-list="antagonistContentList" />
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import PageBase from '../PageBase.vue'

/**
 * Antagonists comparison page
 */
@Component
export default class Index extends PageBase {
  public pageTitle: string = 'Comparison'
  async asyncData ({ $content, params }: any): Promise<any> {
    // read the markdown files
    const antagonistContentList = await $content('antagonists', params.slug).fetch()
    // and return content
    return {
      antagonistContentList
    }
  }
}
</script>

<style lang="scss">
</style>
