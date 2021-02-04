<template>
  <section v-if="antagonistList" class="antagonist-comparison">
    <table class="comparison features">
      <thead>
        <tr>
          <th />
          <th v-for="antagonist in antagonistList" :key="antagonist.slug">
            <NuxtLink :to="'antagonists/' + antagonist.slug">
              <h3>{{ antagonist.title }}</h3>
            </NuxtLink>
            <p>{{ antagonist.description }}</p>
            <p><img :src="antagonist.imgUrl" :alt="antagonist.alt"></p>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- features -->
        <tr v-for="featureName in allFeaturesNames" :key="featureName">
          <th>
            {{ featureName }}
          </th>
          <td v-for="antagonist in antagonistList" :key="antagonist.slug">
            {{ antagonist.features[featureName] }}
          </td>
        </tr>
      </tbody>
    </table>
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

    // get feature names from all antagonists
    get allFeaturesNames (): string[] {
      let allFeaturesNames: string[] = []
      this.antagonistList.forEach((antagonist) => {
        // merge property names (without duplicates)
        allFeaturesNames = [...new Set([...allFeaturesNames, ...Object.keys(antagonist.features)])]
      })
      return allFeaturesNames
    }
}
</script>

<style lang="scss">
.antagonist-comparison {
  margin-top: 3.0em;

  th img {
    height: 50px;
  }
}
</style>
