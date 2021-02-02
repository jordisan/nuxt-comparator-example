<template>
  <article v-if="antagonist">
    <h1>{{ antagonist.title }}</h1>

    <nuxt-content :document="antagonist" />
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
    antagonist!: IContentDocument
}
</script>
