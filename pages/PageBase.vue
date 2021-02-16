<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component, Vue } from 'nuxt-property-decorator'

/**
 * Common class for all pages: read global content, set metadata, ...
 */
@Component
export default class PageBase extends Vue {
  public globalContent: IContentDocument | null = null
  public pageTitle: string = ''
  public pageDescription: string = ''

  public async getGlobalData () : Promise<void> {
    // read global content
    if (!this.globalContent) {
      this.globalContent = await this.$content('global').fetch() as IContentDocument
    }
  }

  // get data on app load (or every page when JS disabled)
  public async fetch (): Promise<any> {
    await this.getGlobalData()
  }

  // get data for every page
  public async created (): Promise<any> {
    await this.getGlobalData()
  }

  // set page metadata
  public head (): any {
    return {
      title: (this.pageTitle ? this.pageTitle + ' — ' : '') + this.globalContent?.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.pageDescription ? this.pageDescription : this.globalContent?.description
      }]
    }
  }
}
</script>
