<template>
  <section v-if="antagonistList">
    <h1>Comparison</h1>

    <li v-for="antagonist of antagonistList" :key="antagonist.slug">
      <NuxtLink :to="'antagonists/' + antagonist.slug">
        <h2>{{ antagonist.title }}</h2>
      </NuxtLink>
    </li>
  </section>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
  Component,
  Prop,
  Vue
} from 'nuxt-property-decorator'

/**
 * Comparison of antagonists
 */
@Component
export default class AntagonistComparison extends Vue {
    @Prop()
    antagonistList!: IContentDocument[]
}
</script>
