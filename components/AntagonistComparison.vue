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
      // create antagonists from contents
      this.antagonistList = []
      this.contentList?.forEach((content) => {
        this.antagonistList.push(new Antagonist({ propsData: { content } }))
      })
      // order antagonists
      this.antagonistList = this.antagonistList.sort((a1: Antagonist, a2: Antagonist) => a1.order - a2.order)
    }
}
</script>
