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

  public async created (): Promise<any> {
    // read global content
    this.globalContent = await this.$content('global').fetch() as IContentDocument
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
