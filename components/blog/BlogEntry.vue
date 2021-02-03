<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
  Component,
  Prop
} from 'nuxt-property-decorator'
import ContentDocumentBody from '../ContentDocumentBody.vue'
import BlogEntryBase from './BlogEntryBase.vue'

/**
 * Implementation of a blog entry using a content document as data source
 */
@Component
export default class BlogEntry extends BlogEntryBase {
    @Prop()
    content!: IContentDocument

    private created () {
      if (this.content) {
        // get data from content
        this.title = this.content.title
        this.slug = this.content.slug
        this.description = this.content.description
        this.createdAt = this.content.createdAt

        // get body using ContentDocumentBody component
        this.body = ContentDocumentBody.getBodyAsHtml(this.content)
      }
    }
}
</script>
