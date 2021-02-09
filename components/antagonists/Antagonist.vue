<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
  Component,
  Prop
} from 'nuxt-property-decorator'
import ContentDocumentBody from '../ContentDocumentBody.vue'
import AntagonistBase from './AntagonistBase.vue'

/**
 * Implementation of an Antagonist using a content document as data source
 */
@Component
export default class Antagonist extends AntagonistBase {
    @Prop()
    content!: IContentDocument

    private static readonly FEATURES_KEY: string = 'features'

    private created () {
      if (this.content) {
        // get data from content
        this.order = this.content.order
        this.title = this.content.title
        this.slug = this.content.slug
        this.description = this.content.description
        this.createdAt = this.content.createdAt
        this.img = this.content.img
        this.alt = this.content.alt
        this.references = this.content.references

        // get features (if any)
        this.features = {}
        if (this.content[Antagonist.FEATURES_KEY]) {
          Object.keys(this.content[Antagonist.FEATURES_KEY]).forEach((key) => { this.features[key] = this.content[Antagonist.FEATURES_KEY][key] })
        }
        // get body using ContentDocumentBody component
        this.body = ContentDocumentBody.getBodyAsHtml(this.content)
      }
    }
}
</script>
