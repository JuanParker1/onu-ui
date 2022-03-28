<template>
  <div prose ma>
    <h1>Playground</h1>
    <P b="~ rounded" p="x-4 b-4">
      <h4>Avatar</h4>
      <div flex="~ text-0">
        <CAvatar mr-4 />
        <c-avatar />
      </div>
    </P>
    <P b="~ rounded" p="x-4 b-4">
      <h4>Button</h4>
      <CButton mr-4>
        asd
      </CButton>
      <c-button>button1</c-button>
    </P>
  </div>
</template>

<style>
html, body {
  @apply m0 p0;
}
</style>
