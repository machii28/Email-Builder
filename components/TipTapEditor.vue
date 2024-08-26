<template>
  <div>
    <div class="w-full mb-5">
      <label class="block mb-2">Choose a Template:</label>
      <div class="flex space-x-4">
        <div class="w-1/3 cursor-pointer border p-2" id="template1" @click="selectTemplate('template1')">
          <p>This is a preview of Template 1</p>
        </div>
      </div>
    </div>

    <div class="flex mt-5">
      <div class="w-1/2">
        <EmailPreview :preview-content="previewContent"/>
      </div>

      <div class="w-1/2">
        <TipTapButtons class="w-full border" :editor="editor"/>
        <TiptapEditorContent @change="generateMJML" class="border" :editor="editor"/>
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
import {getTemplate1} from "~/components/templates/template1.js";

const previewContent = ref();
const editor = useEditor({
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
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto p-10 rounded-b-xl focus:outline-none',
    },
    handleDrop: function (view, event, slice, moved) {
      if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
        let file = event.dataTransfer.files[0];
        let filesize = ((file.size / 1024) / 1024).toFixed(4);
        if ((file.type === "image/jpeg" || file.type === "image/png") && filesize < 10) {
          let _URL = window.URL || window.webkitURL;
          let img = new Image(); /* global Image */
          img.src = _URL.createObjectURL(file);
          img.onload = function () {
            if (this.width > 5000 || this.height > 5000) {
              window.alert("Your images need to be less than 5000 pixels in height and width.");
            } else {
              // handle the image upload here
            }
          };
        } else {
          window.alert("Images need to be in jpg or png format and less than 10mb in size.");
        }
        return true;
      }
      return false;
    }
  },
  content: '',
  onUpdate: ({editor}) => {
    let updateTimeout;

    clearTimeout(updateTimeout);

    updateTimeout = setTimeout(() => {
      previewContent.value = getTemplate1(editor.getHTML());
    }, 10);
  }
});

function selectTemplate(templateId) {
  document.getElementById('template1').classList.remove('border-blue-500');

  document.getElementById(templateId).classList.add('border-blue-500');
}

function generateMJML(contentHtml) {
  convertHtmlToMjml(contentHtml);
}

onMounted(() => {
  previewContent.value = getTemplate1(editor.value.getHTML());
})

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>
