<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
  Component,
  Prop
} from 'nuxt-property-decorator'
import AntagonistComparisonBase from './AntagonistComparisonBase.vue'
import Antagonist from './Antagonist.vue'

/**
 * Comparison of antagonists with data from .md documents
 */
@Component
export default class AntagonistComparison extends AntagonistComparisonBase<Antagonist> {
    @Prop()
    contentList!: IContentDocument[]

    private created () {
      this.antagonistList = []
      this.contentList?.forEach((content) => {
        // create antagonists from contents
        this.antagonistList.push(new Antagonist({ propsData: { content } }))
      })
    }
}
</script>
