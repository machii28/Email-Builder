<template>
  <div class="p-4 tiptap" v-html="renderedContent"></div>
</template>

<script setup>
import {watch, ref} from "vue";

const props = defineProps({
  previewContent: String
})
const renderedContent = ref('');

watch(() => props.previewContent, (newValue, oldValue) => {
  renderedContent.value = newValue;
  console.log(renderedContent.value);
});

onMounted(() => {
  renderedContent.value = props.previewContent
});
</script>

<style lang="scss">
</style>