<template>
  <section class="blog">
    <header class="title-wrapper">
      <h1 class="title">
        Blog
      </h1>
    </header>
    <BlogList :content-list="blogContentList" />
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import PageBase from '../PageBase.vue'

/**
 * Blog page
 */
@Component
export default class Index extends PageBase {
  public pageTitle: string = 'Blog'
  async asyncData ({ $content, params }: any): Promise<any> {
    // read the markdown files
    const blogContentList = await $content('blog', params.slug).fetch()
    // and return content
    return {
      blogContentList
    }
  }
}
</script>

<style lang="scss">
</style>
