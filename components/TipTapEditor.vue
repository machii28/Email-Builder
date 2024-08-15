<template>
  <div>
    <div class="flex mt-5">
      <div class="w-1/2">
        <TipTapButtons class="w-full border" :editor="editor"/>
        <TiptapEditorContent @change="generateMJML" class="border" :editor="editor"/>
      </div>

      <div class="w-1/2">
        <EmailPreview :preview-content="previewContent"/>
      </div>
    </div>

    <div class="w-full text-center">
      <button @click="generateMJML(editor.getHTML())" class="mt-5 rounded border p-5 text-white bg-green-600">Generate
        MJML
      </button>
    </div>
  </div>
</template>


<script setup>
import {ref} from "vue";
import {convertHtmlToMjml} from '~/utils/mjmlGenerator.js';
import {TextAlign} from "@tiptap/extension-text-align";
import {Image} from "@tiptap/extension-image";

const previewContent = ref();
const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [
    TiptapStarterKit,
    TiptapDropcursor,
    TiptapLink,
    Image,
    TextAlign.configure({
      alignments: ['left', 'right', 'center', 'justify'],
      types: ['paragraph', 'heading', 'image']
    }),
    TiptapHardBreak.configure({
      keepMarks: true
    }),
  ],
  editorProps: {
    attributes: {
      class: 'bg-gray-50 text-black prose prose-sm sm:prose-base lg:prose-lg p-4 xl:prose-2xl focus:outline-none',
    },
  },
  onUpdate: ({editor}) => {
    let updateTimeout;

    clearTimeout(updateTimeout);

    updateTimeout = setTimeout(() => {
      previewContent.value = editor.getHTML();
    }, 1000);
  }
});

function generateMJML(contentHtml) {
  convertHtmlToMjml(contentHtml);
}

onMounted(() => {
  previewContent.value = editor.value.getHTML();
})

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>
