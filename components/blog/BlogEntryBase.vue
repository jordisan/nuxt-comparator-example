<template>
  <article class="blog-entry">
    <header class="blog-entry-header">
      <h1>{{ title }}</h1>
      <small>{{ createdAt }}</small>

      <p>{{ description }}</p>

      <img :src="imgUrl" :alt="alt">
    </header>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <section class="blog-entry-body" v-html="body" />
  </article>
</template>

<script lang="ts">
import {
  Component
} from 'nuxt-property-decorator'
import ContentBase from '../ContentBase.vue'

/**
 * Base class for one blog entry (data source agnostic)
 */
@Component
export default class BlogEntryBase extends ContentBase {
  public get imgUrl (): string {
    return '/img/blog/' + this.img
  }
}
</script>

<style lang="scss">
.blog-entry {
  &-header {
    text-align: center;

    img {
      height: 100px;
    }
  }
}
</style>
