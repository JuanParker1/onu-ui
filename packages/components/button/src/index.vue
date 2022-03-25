<template>
  <Component
    :is="to ? 'a' : 'button'"
    :href="to"
    class="c-button c-transition c-button-base hover:c-button-hover active:c-button-active focus-visible:n-focus-base c-disabled:c-disabled"
  >
    <slot name="icon">
      <!-- <NIcon v-if="icon" :icon="icon" class="c-buttoc-icon" /> -->
    </slot>
    <slot />
  </Component>
</template>

<script setup lang="ts" name="C-Button">
defineProps<{
  to?: string
  icon?: string
}>()
</script>
