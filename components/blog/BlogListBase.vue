<template>
  <section v-if="blogEntryList">
    <h2>Blog</h2>

    <ol v-if="blogEntryList" class="blog blog-entries">
      <li v-for="blogEntry in blogEntryList" :key="blogEntry.slug">
        <NuxtLink :to="'blog/' + blogEntry.slug">
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
