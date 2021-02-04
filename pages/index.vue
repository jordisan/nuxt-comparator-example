<template>
  <section class="home">
    <header class="title-wrapper">
      <Logo />
      <h1 v-if="globalContent" class="title">
        {{ globalContent.title }}
      </h1>
      <p v-if="globalContent">
        {{ globalContent.description }}
      </p>
    </header>
    <AntagonistComparison :content-list="antagonistContentList" />
    <BlogList :content-list="blogContentList" />
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import PageBase from './PageBase.vue'

@Component
export default class Index extends PageBase {
  async asyncData ({ $content, params }: any): Promise<any> {
    // read the markdown files
    const antagonistContentList = await $content('antagonists', params.slug).fetch()
    const blogContentList = await $content('blog', params.slug).fetch()
    // and return content
    return {
      antagonistContentList,
      blogContentList
    }
  }
}
</script>

<style lang="scss">
.home {
  .logo {
    width: 200px;
  }

  .title-wrapper {
    text-align: center;

    .title {
      display: block;
      font-weight: 300;
      font-size: 80px;
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
  }

}

</style>
