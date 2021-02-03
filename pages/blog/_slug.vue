<template>
  <BlogEntry :content="content" />
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    // read the markdown file
    const content = await $content('blog', params.slug).fetch()
    // and return content
    return {
      content
    }
  }
}
</script>
