<template>
  <section v-if="blogEntryList" class="blog-entry-list">
    <ol v-if="blogEntryList" class="blog blog-entries">
      <li v-for="blogEntry in blogEntryList" :key="blogEntry.slug">
        <NuxtLink :to="'blog/' + blogEntry.slug">
          <h3>{{ blogEntry.title }}</h3>
        </NuxtLink>
        <p class="created">
          <time>{{ blogEntry.createdAtFormatted }}</time>
        </p>
        <NuxtLink :to="'blog/' + blogEntry.slug">
          <p><img :src="blogEntry.imgUrl" :alt="blogEntry.alt"></p>
        </NuxtLink>
        <p class="description">
          {{ blogEntry.description }}
        </p>
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
  margin-top: 1.0em;
  text-align: center;

  .blog-entries {
    margin: 0;
    padding: 0;

    li {
      clear: left;
      list-style-type: none;
      margin-bottom: 3.0em;

      img {
        width: 300px;
        margin: 5px;
      }
    }
  }
}
</style>
