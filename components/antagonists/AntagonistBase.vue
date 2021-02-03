<template>
  <article>
    <h1>{{ title }}</h1>

    <p>{{ description }}</p>

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
}
</script>
