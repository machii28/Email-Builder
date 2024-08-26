<template>
  <div class="mx-2">
    <div class="viewer p-4 tiptap"
         :style="{ width: deviceWidth, height: deviceHeight, overflow: 'auto', margin: '0 auto' }"
         v-html="renderedContent"></div>

    <div class="toolbar">
      <button @click="setDevice('desktop')" class="m-2">
        <font-awesome-icon icon="fa-solid fa-desktop"></font-awesome-icon>
      </button>
      <button @click="setDevice('mobile')" class="m-2">
        <font-awesome-icon icon="fa-solid fa-mobile"></font-awesome-icon>
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref, watch, onMounted} from 'vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps({
  previewContent: String
});

const renderedContent = ref('');
const deviceWidth = ref('100%');
const deviceHeight = ref('100%');

watch(() => props.previewContent, (newValue) => {
  renderedContent.value = newValue;
});

onMounted(() => {
  renderedContent.value = props.previewContent;
});

function setDevice(device) {
  switch (device) {
    case 'desktop':
      deviceWidth.value = '100%';
      deviceHeight.value = '100%';
      break;
    case 'mobile':
      deviceWidth.value = '375px';
      deviceHeight.value = '667px';
      break;
  }
}
</script>

<style lang="scss">
.toolbar {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.viewer {
  border: 1px solid #ccc;
}

button {
  margin-right: 5px;
}
</style>