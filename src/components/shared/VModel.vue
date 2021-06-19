<template>
  <vue-final-modal
    v-slot="{ params }"
    v-bind="$attrs"
    classes="modal-container"
    content-class="modal-content"
    v-on="$listeners"
  >
    <span class="bg-gray-100 p-3 border-b">
      <slot name="title"></slot>
    </span>
    <div class="modal__content p-4 w-96">
      <slot v-bind:params="params"></slot>
    </div>
    <div class="bg-gray-100 p-3 justify-end border-t flex space-x-2">
        <slot name="footer"></slot>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  name: 'VModal',
  inheritAttrs: false
}
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>

