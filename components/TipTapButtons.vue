<template>
  <div>
    <div v-if="editor" class="container mx-auto text-center my-4">
      <div class="w-full">
        <button
            @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{'is-active': editor.isActive('bold'), 'bg-gray-300 text-white': editor.isActive('bold'), 'hover:bg-gray-300': !editor.isActive('bold')}"
            class="px-4 py-2 rounded disabled:opacity-50 font-bold border"
        >
          B
        </button>
        <button
            @click="editor.chain().focus().toggleItalic().run()"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{'is-active': editor.isActive('italic'), 'bg-gray-300 text-white': editor.isActive('italic'), 'hover:bg-gray-300': !editor.isActive('italic')}"
            class="px-4 py-2 rounded disabled:opacity-50 italic border"
        >
          I
        </button>
        <button
            @click="editor.chain().focus().toggleStrike().run()"
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :class="{'is-active': editor.isActive('strike'), 'bg-gray-300 text-white': editor.isActive('strike'), 'hover:bg-gray-300': !editor.isActive('strike')}"
            class="px-4 py-2 rounded disabled:opacity-50 line-through border"
        >
          S
        </button>
        <button
            @click="editor.chain().focus().toggleCode().run()"
            :disabled="!editor.can().chain().focus().toggleCode().run()"
            :class="{'is-active': editor.isActive('code'), 'bg-gray-300 text-white': editor.isActive('code'), 'hover:bg-gray-300': !editor.isActive('code')}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          < >
        </button>
        <button
            @click="editor.chain().focus().toggleBlockquote().run()"
            :class="{'is-active': editor.isActive('blockquote'), 'bg-gray-300 text-white': editor.isActive('blockquote'), 'hover:bg-gray-300': !editor.isActive('blockquote')}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          "
        </button>
        <button
            @click="editor.chain().focus().setHorizontalRule().run()"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          __
        </button>
        <button
            @click="addImage"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          <input style="display:none"
                 ref="fileInput"
                 aria-label="lorem ipsum"
                 @change="onFileSelected"
                 type="file" accept=".jpg, .jpeg, .png">
          <font-awesome-icon icon="fa-solid fa-image"/>
        </button>
        <button
            @click="setLink"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          <font-awesome-icon icon="fa-solid fa-link"/>
        </button>
      </div>

      <div class="w-full">
        <button
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{'is-active': editor.isActive('heading', {level: 1}),
            'bg-gray-300 text-white': editor.isActive('heading', {level: 1}),
            'hover:bg-gray-300': editor.isActive('heading', {level: 1})}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          H1
        </button>
        <button
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{'is-active': editor.isActive('heading', {level: 2}),
            'bg-gray-300 text-white': editor.isActive('heading', {level: 2}),
            'hover:bg-gray-300': editor.isActive('heading', {level: 2})}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          H2
        </button>
        <button
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{'is-active': editor.isActive('heading', {level: 3}),
            'bg-gray-300 text-white': editor.isActive('heading', {level: 3}),
            'hover:bg-gray-300': editor.isActive('heading', {level: 3})}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          H3
        </button>
        <button
            @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            :class="{'is-active': editor.isActive('heading', {level: 4}),
            'bg-gray-300 text-white': editor.isActive('heading', {level: 4}),
            'hover:bg-gray-300': editor.isActive('heading', {level: 4})}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          H4
        </button>
        <button
            @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            :class="{'is-active': editor.isActive('heading', {level: 5}),
            'bg-gray-300 text-white': editor.isActive('heading', {level: 5}),
            'hover:bg-gray-300': editor.isActive('heading', {level: 5})}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          H5
        </button>
      </div>

      <div class="w-full">
        <button
            @click="editor.chain().focus().toggleBulletList().run()"
            :class="{'is-active': editor.isActive('bulletList'),
            'bg-gray-300 text-white': editor.isActive('bulletList'),
            'hover:bg-gray-300': editor.isActive('bulletList')}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          <font-awesome-icon icon="fa-solid fa-list"/>
        </button>
        <button
            @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{'is-active': editor.isActive('orderedList'),
            'bg-gray-300 text-white': editor.isActive('orderedList'),
            'hover:bg-gray-300': editor.isActive('orderedList')}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          <font-awesome-icon icon="fa-solid fa-list-ol"/>
        </button>
        <button
            @click="editor.chain().focus().setTextAlign('left').run()"
            :class="{'is-active': editor.isActive({ textAlign: 'left' }),
            'bg-gray-300 text-white': editor.isActive({ textAlign: 'left' }),
            'hover:bg-gray-300': editor.isActive({ textAlign: 'left' })}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          <font-awesome-icon icon="fa-solid fa-align-left"/>
        </button>
        <button
            @click="editor.chain().focus().setTextAlign('center').run()"
            :class="{'is-active': editor.isActive({ textAlign: 'center' }),
            'bg-gray-300 text-white': editor.isActive({ textAlign: 'center' }),
            'hover:bg-gray-300': editor.isActive({ textAlign: 'center' })}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          <font-awesome-icon icon="fa-solid fa-align-center"/>
        </button>
        <button
            @click="editor.chain().focus().setTextAlign('right').run()"
            :class="{'is-active': editor.isActive({ textAlign: 'right' }),
            'bg-gray-300 text-white': editor.isActive({ textAlign: 'right' }),
            'hover:bg-gray-300': editor.isActive({ textAlign: 'right' })}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          <font-awesome-icon icon="fa-solid fa-align-right"/>
        </button>
        <button
            @click="editor.chain().focus().setTextAlign('justify').run()"
            :class="{'is-active': editor.isActive({ textAlign: 'justify' }),
            'bg-gray-300 text-white': editor.isActive({ textAlign: 'justify' }),
            'hover:bg-gray-300': editor.isActive({ textAlign: 'justify' })}"
            class="px-4 py-2 rounded disabled:opacity-50 border"
        >
          <font-awesome-icon icon="fa-solid fa-align-justify"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { ref } from 'vue';

const props = defineProps(['editor'])
const fileInput = ref(null);

const onFileSelected = (event) => {
  const image = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = (e) => {
    props.editor.commands.setImage({ src: e.target.result });
    fileInput.value.value = '';
  };
};

const onClick = () => {
  fileInput.value.click();
};

const onKeyDown = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    fileInput.value.click();
  }
};

function addImage() {
  fileInput.value.click();
}

function setLink() {
  const previousUrl = props.editor.getAttributes('link').href
  const url = window.prompt('URL', previousUrl)

  if (url === null) {
    return
  }

  if (url === '') {
    props.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .unsetLink()
        .run()

    return
  }

  props.editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({href: url})
      .run()
}
</script>

<style lang="scss">

</style>