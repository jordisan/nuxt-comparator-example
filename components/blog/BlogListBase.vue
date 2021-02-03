<template>
  <section v-if="blogEntryList" class="blog-entry-list">
    <h2>Blog</h2>

    <ol v-if="blogEntryList" class="blog blog-entries">
      <li v-for="blogEntry in blogEntryList" :key="blogEntry.slug">
        <NuxtLink :to="'blog/' + blogEntry.slug">
          <img :src="blogEntry.imgUrl" :alt="blogEntry.alt">
          <h3>{{ blogEntry.title }}</h3>
        </NuxtLink>
        <p>{{ blogEntry.description }}</p>
      </li>
    </ol>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
import BlogEntryBase from './BlogEntryBase.vue'

/**
 * Base class for a list of blog entries of type TB
 */
@Component
export default class BlogListBase<TB extends BlogEntryBase> extends Vue {
    public blogEntryList: TB[] = []
}
</script>

<style lang="scss">
.blog-entry-list {
  li {
    clear: both;
    list-style-type: none;
  }
  li img {
    width: 200px;
    float: left;
    margin: 0 5px 5px 0;
  }
}
</style>
