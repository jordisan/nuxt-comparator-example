<template>
  <article v-if="content">
    <h1>{{ content.title }}</h1>

    <nuxt-content :document="content" />
  </article>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
  Component,
  Prop,
  Vue
} from 'nuxt-property-decorator'

/**
 * One of the items to be compared
 */
@Component
export default class Antagonist extends Vue {
    @Prop()
    content!: IContentDocument
}
</script>
