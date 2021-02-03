<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-comparator site
      </h1>
      <AntagonistComparison :content-list="contentList" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  async asyncData ({ $content, params }: any): Promise<any> {
    // read the markdown file
    const contentList = await $content('antagonists', params.slug).fetch()
    // and return content
    return {
      contentList
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
