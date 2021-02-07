<template>
  <section class="home">
    <header class="title-wrapper">
      <Logo />
      <h1 v-if="globalContent" class="title">
        {{ globalContent.title }}
      </h1>
      <p v-if="globalContent" class="description">
        {{ globalContent.description }}
        <NuxtLink to="/about">
          More ...
        </NuxtLink>
      </p>
    </header>
    <AntagonistComparison :content-list="antagonistContentList" />

    <NuxtLink to="/blog">
      <h2 class="blog-title">
        Blog
      </h2>
    </NuxtLink>
    <BlogList :content-list="blogContentList" />
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import PageBase from './PageBase.vue'

/**
 * Home page
 */
@Component(
  { layout: 'home' }
)
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
    margin-top: 3.0rem;
  }

  .title-wrapper {
    text-align: center;

    .title {
      margin-top: 1.0rem;
      margin-bottom: 1.0rem;
      display: block;
      font-weight: 300;
      font-size: 70px;
      color: #35495e;
      letter-spacing: 1px;
    }

    .description {
      font-size: 22px;
    }
  }

  .blog-title {
    text-align: center;
    margin-top: 3.0rem;
  }

}

</style>
