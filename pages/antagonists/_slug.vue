<template>
  <Antagonist :antagonist="content" />
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    // read the markdown file
    const content = await $content('antagonists', params.slug).fetch()
    // and return content
    return {
      content
    }
  }
}
</script>
