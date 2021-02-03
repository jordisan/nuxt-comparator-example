<template>
  <article>
    <h1>{{ title }}</h1>
    <small>{{ createdAt }}</small>

    <p>{{ description }}</p>

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
}
</script>
