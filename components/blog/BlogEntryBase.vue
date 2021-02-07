<template>
  <article class="blog-entry">
    <header class="blog-entry-header">
      <p class="blog-entry-img-wrapper">
        <img :src="imgUrl" :alt="alt">
      </p>
      <h1>{{ title }}</h1>
      <p class="created">
        <time>{{ createdAtFormatted }}</time>
      </p>
      <p class="description">
        {{ description }}
      </p>
    </header>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <section class="blog-entry-body" v-html="body" />

    <section v-if="references" class="blog-references">
      <h2>References</h2>
      <ul>
        <li v-for="url in references" :key="url">
          <a :href="url" target="_blank">
            {{ url }}
          </a>
        </li>
      </ul>
    </section>
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
    .blog-entry-img-wrapper {
      text-align: center;

      img {
        max-height: 200px;
      }
    }
  }
}
</style>
