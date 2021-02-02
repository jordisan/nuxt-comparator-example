<template>
  <article>
    <h1>{{ title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="antagonist-body" v-html="body" />
  </article>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'

/**
 * Base class for one of the items to be compared (data source agnostic)
 */
@Component
export default class AntagonistBase extends Vue {
    public title: string = ''
    public body: string = ''
}
</script>
