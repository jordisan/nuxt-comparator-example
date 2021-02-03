<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
  Component,
  Prop
} from 'nuxt-property-decorator'
import AntagonistBase from './AntagonistBase.vue'
import ContentDocumentBody from './ContentDocumentBody.vue'

/**
 * Implementation of an Antagonist using a content document as data source
 */
@Component
export default class Antagonist extends AntagonistBase {
    @Prop()
    content!: IContentDocument

    // exclude common properties from antagonist properties to compare
    private static readonly FEATURES_KEY: string = 'features'

    private created () {
      this.title = this.content?.title
      this.slug = this.content?.slug
      // get features
      this.features = {}
      Object.keys(this.content[Antagonist.FEATURES_KEY]).forEach((key) => { this.features[key] = this.content[Antagonist.FEATURES_KEY][key] })
      // get body using ContentDocumentBody component
      this.body = ContentDocumentBody.getBodyAsHtml(this.content)
    }
}
</script>
