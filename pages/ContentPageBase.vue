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

<<<<<<< HEAD
  async fetch (): Promise<any> {
    await this.getGlobalData()
    // read the markdown file
    this.content = await this.$content(this.PATH, this.$route.params.slug).fetch() as IContentDocument
    this.pageTitle = this.content.title
    this.pageDescription = this.content.description
=======
  // get content
  public async getContent () : Promise<void> {
    // read the markdown file
    if (!this.content) {
      this.content = await this.$content(this.PATH, this.$route.params.slug).fetch() as IContentDocument
      this.pageTitle = this.content.title
      this.pageDescription = this.content.description
    }
  }

  // get data on app load (or every page when JS disabled)
  async fetch (): Promise<any> {
    await this.getGlobalData()
    await this.getContent()
  }

  // get data for every page
  public async created (): Promise<any> {
    await this.getGlobalData()
    await this.getContent()
>>>>>>> template/main
  }
}
</script>
