<template>
  <article class="antagonist">
    <header class="antagonist-header">
      <h1>{{ title }}</h1>

      <p class="description">
        {{ description }}
      </p>

      <img :src="imgUrl" :alt="alt">
    </header>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <section class="antagonist-body" v-html="body" />

    <section v-if="features" class="antagonist-features">
      <h2>Features</h2>
      <table class="features">
        <tbody>
          <tr v-for="(value, name) in features" :key="name">
            <th>
              {{ name }}
            </th>
            <td>
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section v-if="references" class="antagonist-references">
      <h2>References</h2>
      <ul>
        <li v-for="url in references" :key="url">
          <a :href="url" target="_blank">
            {{ url }}
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script lang="ts">
import {
  Component
} from 'nuxt-property-decorator'
import ContentBase from '../ContentBase.vue'

/**
 * Base class for one of the items to be compared (data source agnostic)
 */
@Component
export default class AntagonistBase extends ContentBase {
    public order: number = Number.MAX_SAFE_INTEGER
    public features: { [name: string] : string; } = {}

    public get imgUrl (): string {
      return '/img/antagonists/' + this.img
    }
}
</script>

<style lang="scss">
.antagonist {
  &-header {
    text-align: center;

    img {
      max-height: 300px;
    }
  }
}
</style>
