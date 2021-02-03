<template>
  <section class="home">
    <header class="title-wrapper">
      <Logo />
      <h1 class="title">
        nuxt-comparator site
      </h1>
    </header>
    <AntagonistComparison :content-list="antagonistContentList" />
    <BlogList :content-list="blogContentList" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
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
