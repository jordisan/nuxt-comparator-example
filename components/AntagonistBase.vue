<template>
  <article>
    <h1>{{ title }}</h1>

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
    public slug: string = ''
    public body: string = ''

    public features: { [name: string] : string; } = {}
}
</script>
