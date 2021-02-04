<template>
  <Antagonist v-if="content" :content="content" />
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import ContentPageBase from '../ContentPageBase.vue'

@Component
export default class Slug extends ContentPageBase {
  PATH: string = 'antagonists'
}
</script>
