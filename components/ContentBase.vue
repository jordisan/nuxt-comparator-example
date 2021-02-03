<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'

/**
 * Base class for content components
 */
@Component
export default class ContentBase extends Vue {
    public title: string = ''
    public description: string = ''
    public slug: string = ''
    public body: string = ''
    public createdAt: Date = new Date()
}
</script>
