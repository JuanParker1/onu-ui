<template>
  <Component
    :is="to ? 'a' : 'button'"
    :href="to"
    class="o-button o-transition o-button-base hover:o-button-hover active:o-button-active focus-visible:o-focus-base o-disabled:o-disabled"
  >
    <slot name="icon">
      <!-- <NIcon v-if="icon" :icon="icon" class="c-buttoc-icon" /> -->
    </slot>
    <slot />
  </Component>
</template>

<script setup lang="ts" name="O-Button">
defineProps<{
  to?: string
  icon?: string
}>()
</script>
