<template>
  <nuxt-content :document="content" />
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from 'nuxt-property-decorator'
import { IContentDocument } from '@nuxt/content/types/content'

/**
 * Rendered body of a IContentDocument (from a .md file) using nuxt-content component
 */
@Component
export default class ContentDocumentBody extends Vue {
    @Prop()
    content!: IContentDocument

    /**
     * Get the body of a content as a HTML string
     */
    public static getBodyAsHtml (content: IContentDocument): string {
      const ContentDocumentBodyClass = Vue.extend(ContentDocumentBody)
      const contentBody = new ContentDocumentBodyClass({ propsData: { content } })
      contentBody.$mount()
      return contentBody.$el?.outerHTML
    }
}
</script>
