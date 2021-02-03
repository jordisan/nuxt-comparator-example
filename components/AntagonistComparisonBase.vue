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
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
import AntagonistBase from './AntagonistBase.vue'

/**
 * Base class for a comparison of antagonists of type TA
 */
@Component
export default class AntagonistComparisonBase<TA extends AntagonistBase> extends Vue {
    public antagonistList: TA[] = []
}
</script>
