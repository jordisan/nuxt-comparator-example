<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component } from 'nuxt-property-decorator'
import PageBase from './PageBase.vue'

/**
 * Base class for pages reading content from .md files
 */
@Component
export default class ContentPageBase extends PageBase {
  PATH: string = ''
  content: IContentDocument | null = null

  async mounted (): Promise<any> {
    // read the markdown file
    this.content = await this.$content(this.PATH, this.$route.params.slug).fetch() as IContentDocument
    this.pageTitle = this.content.title
    this.pageDescription = this.content.description
  }
}
</script>
