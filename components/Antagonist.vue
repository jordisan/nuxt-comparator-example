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

    private mounted () {
      this.title = this.content?.title
      // get body using ContentDocumentBody component
      this.body = ContentDocumentBody.getBodyAsHtml(this.content)
    }
}
</script>
