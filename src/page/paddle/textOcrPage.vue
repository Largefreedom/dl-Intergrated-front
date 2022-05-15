<template>
    <div v-loading="loading" :element-loading-text="loadingText" element-loading-background="rgba(122, 122, 122, 0.8)">
        <div  style="border:1px solid black">
            <h1>
                文本 OCR 在线识别接口
            </h1>
        </div>
        <div style="margin-top:100px">
            <el-upload
                class="avatar-uploader"
                action="/api/paddleApp/upload-image"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus></Plus></el-icon>
            </el-upload>
            <el-card shadow="never">
                 <template #header>
                    <div class="card-header">
                        <span>OCR 识别结果</span>
                    </div>
                 </template>
                 <div style="text-align: center;font-size: 20px;color:royalblue" v-for="o in resultText" :key="o" class="text item">{{o[1][0] ?o[1][0]:'' }}</div>
            </el-card>
          </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'

const imageUrl = ref('')
const resultText = ref('')
const loading = ref(false)
const loadingText = ref('识别中，请耐心等待')


const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  const resultData = response.data
  resultText.value = resultData.result
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  loading.value =false
  
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {

  if (!(rawFile.type === 'image/jpeg' || rawFile.type === 'image/png')) {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  loading.value = true
  return true
}


</script>

<style scoped>
.avatar-uploader .avatar {
    
  
  height: 300px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.el-card{
    margin-top: 50px;
    height: 300px;
}

.el-card__header{
    font-weight: 600;
    font-size: 30px;
}
.img{
    width: 400px;
}
</style>