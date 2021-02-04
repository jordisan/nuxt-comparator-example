<template>
  <section v-if="blogEntryList" class="blog-entry-list">
    <h2>Blog</h2>

    <ol v-if="blogEntryList" class="blog blog-entries">
      <li v-for="blogEntry in blogEntryList" :key="blogEntry.slug">
        <NuxtLink :to="'blog/' + blogEntry.slug">
          <h3>{{ blogEntry.title }}</h3>
          <p><img :src="blogEntry.imgUrl" :alt="blogEntry.alt"></p>
        </NuxtLink>
        <small>{{ blogEntry.createdAtFormatted }}</small>
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
  margin-top: 3.0em;
  text-align: center;

  .blog-entries {
    margin: 0;
    padding: 0;

    li {
      clear: left;
      list-style-type: none;
      margin-top: 2.0em;

      img {
        width: 200px;
        margin: 5px;
      }
    }
  }
}
</style>
