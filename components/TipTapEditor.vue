<template>
  <div>
    <div class="w-full mb-5">
      <label class="block mb-2">Choose a Template:</label>
      <div class="flex space-x-4 justify-center">
        <div class="w-1/6 cursor-pointer border p-2" id="template1" @click="selectTemplate('template1')">
          <img src="../assets/template_1.png">
        </div>

        <div class="w-1/6 cursor-pointer border p-2" id="template2" @click="selectTemplate('template2')">
          <img src="../assets/template_2.png" class="mx-auto">
        </div>
      </div>
    </div>

    <div class="flex mt-5">
      <div class="w-1/2">
        <EmailPreview :preview-content="previewContent"/>
        <div class="image-placeholder"></div>
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
import {getTemplate2} from "~/components/templates/template2.js";

const previewContent = ref('');
const editor = useEditor({
  extensions: [
    TiptapStarterKit,
    TiptapDropcursor,
    TiptapLink,
    TextAlign.configure({
      alignments: ['left', 'right', 'center', 'justify'],
      types: ['paragraph', 'heading', 'image']
    }),
    TiptapHardBreak.configure({
      keepMarks: true
    }),
    Image,
  ],
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto p-10 rounded-b-xl focus:outline-none',
    }
  },
  content: `
    <p>Dear [Recipient's Name],</p>

    <p>I hope this message finds you well. We are reaching out to keep you updated with the latest developments here at [Your Company].</p>

    <h3>Here’s what’s new:</h3>
    <ul>
        <li>Update 1: [Brief description of the update, news, or feature]</li>
        <li>Update 2: [Brief description of another update, news, or feature]</li>
    </ul>

    <h3>Special Offers:</h3>
    <p>We are excited to offer [describe any special offers, discounts, or promotions]. Be sure to take advantage of these by [date offer ends].</p>

    <h3>Looking Ahead:</h3>
    <p>[Mention any upcoming events, promotions, or relevant news items]</p>

    <p>We value your continued support and feedback. If you have any questions or need further information, please do not hesitate to reach out. You can reply to this email or contact our support team at [Contact Information].</p>

    <p>Thank you for being a part of the [Your Company] community!</p>

    <p>Warm regards,</p>
    <p>[Your Name] [Your Position]</p>
    <p>[Your Company]</p>
    <p>[Contact Information]</p>
  `,
  onUpdate: ({ editor }) => {
    updatePreviewContent(editor.getHTML());
  }
});

const templateFunctions = reactive({
  current: getTemplate2 // Default function
});

function selectTemplate(templateId) {
  const templateElements = ['template1', 'template2'];
  templateElements.forEach(id => document.getElementById(id).classList.remove('border-blue-500'));
  document.getElementById(templateId).classList.add('border-blue-500');
  templateFunctions.current = (templateId === 'template1' ? getTemplate1 : getTemplate2);

  updatePreviewContent(editor.value.getHTML());
}

function updatePreviewContent(html) {
  console.log('test');
  previewContent.value = templateFunctions.current(html);
}

function generateMJML(contentHtml) {
  convertHtmlToMjml(contentHtml);
}

onMounted(() => {
  updatePreviewContent(editor.value.getHTML());
});

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>
