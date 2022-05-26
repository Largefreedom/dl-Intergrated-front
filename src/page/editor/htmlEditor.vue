<template>
<el-card shadow="never">
    <template #header>
        <div class="card-header">
            <span>HTML富文本编辑器</span>
        </div>
    </template>
    <quill-editor
        style="height:600px"
        v-model:value="state.content"
        :options="state.editorOption"
        :disabled="state.disabled"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
        @change="onEditorChange($event)"
    />
  </el-card>
</template>

<script>
import { reactive } from 'vue'
import { quillEditor } from 'vue3-quill'

export default {
  name: 'App',
  components: {
    quillEditor
  },
  setup() {
    const state = reactive({
      dynamicComponent: null,
      content: '<p>2333</p>',
      _content: '',
      editorOption: {
        placeholder: 'core',
        modules: {
           toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ header: 1 }, { header: 2 }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ direction: 'rtl' }],
                [{ size: ['small', false, 'large', 'huge'] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ align: [] }],
                ['clean'],
                ['link', 'image', 'video']
            ]
        }
        // more options
      },
      disabled: false
    })

    const onEditorBlur = quill => {

    }
    const onEditorFocus = quill => {
 
    }
    const onEditorReady = quill => {

    }
    const onEditorChange = ({ quill, html, text }) => {

      state._content = html
    }



    return { state, onEditorBlur, onEditorFocus, onEditorReady, onEditorChange }
  }
}
</script>