<template>
  <div>
    <el-dialog :title="type == 1 ? '新建' : '编辑'" :close-on-click-modal="false" width="90%" height="80%"
      class="edit-course" v-bind="$attrs" append-to-body destroy-on-close @close="closeDialog">
      <div class="content">
        <el-form ref="courseForm" :model="form" :rules="rules" label-width="100px" :inline="true">
          <el-form-item label="名称" prop="name">
            <el-input v-model="form.name" size="small" style="width:400px;" />
          </el-form-item>
          <el-form-item label="课程数" prop="num">
            <el-input v-model="form.num" size="small" style="width:400px;" />
          </el-form-item>
          <el-form-item label="大小" prop="size">
            <el-input v-model="form.size" size="small" style="width:400px;" />
          </el-form-item>
          <el-form-item label="热度" prop="hot">
            <el-input v-model="form.hot" size="small" style="width:400px;" />
          </el-form-item>
          <el-form-item label="点赞" prop="like">
            <el-input v-model="form.like" size="small" style="width:400px;" />
          </el-form-item>
          <el-form-item label="评论" prop="comment">
            <el-input v-model="form.comment" size="small" style="width:400px;" />
          </el-form-item>
          <el-form-item label="价格" prop="price">
            <el-input v-model="form.price" size="small" style="width:400px;" />
          </el-form-item>
          <el-form-item label="提货码" prop="pickingCode">
            <el-input v-model="form.pickingCode" size="small" style="width:400px;" type="textarea" />
          </el-form-item>
          <el-form-item label="描述" prop="desc" class="desc">
            <el-input v-model="form.desc" size="small" placeholder="请输入" style="width:100%;" type="textarea"
              :autosize="{ minRows: 2, maxRows: 30 }" />
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="closeDialog()">取消</el-button>
        <el-button type="primary" size="mini" @click="save">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getCourseDetails, updateCourse, addCourse } from '@/api/codeCourse'
export default {
  name: 'EditCourse',
  components: {},
  props: {
    type: {
      type: Number,
      default() {
        return 1
      }
    },
    id: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      test: '',
      form: { id: '', name: '', num: '', size: '', hot: '', like: '', comment: '', price: '', desc: '', pickingCode: '' },
      rules: {
        name: [{ required: true, message: '字段必填', trigger: ['change', 'blur'] }],
        num: [{ required: true, message: '字段必填', trigger: ['change', 'blur'] }],
        size: [{ required: true, message: '字段必填', trigger: ['change', 'blur'] }],
        hot: [{ required: true, message: '字段必填', trigger: ['change', 'blur'] }],
        like: [{ required: true, message: '字段必填', trigger: ['change', 'blur'] }],
        comment: [{ required: true, message: '字段必填', trigger: ['change', 'blur'] }],
        price: [{ required: true, message: '字段必填', trigger: ['change', 'blur'] }],
        desc: [{ required: true, message: '字段必填', trigger: ['change', 'blur'] }],
        pickingCode: [{ required: true, message: '字段必填', trigger: ['change', 'blur'] }]
      }
    }
  },
  watch: {},
  mounted() {
    if (this.id) {
      this.getCourseDetails(this.id)
    }
    if (this.type === 1) {
      this.form.hot = parseInt(Math.random() * 2000 + 500)
      let param = Math.random()
      this.form.like = parseInt((param > 0.9 ? 0.9 : param > 0.7 ? 0.8 : 0.7) * this.form.hot)
      param = Math.random()
      this.form.comment = parseInt((param > 0.9 ? 0.8 : param > 0.7 ? 0.6 : 0.4) * 300)
    }
  },
  methods: {
    async getCourseDetails(id) {
      const re = await getCourseDetails({ id })
      console.log(re)
    },
    closeDialog() {
      this.$emit('update:visible', false)
    },
    save() {
      this.$refs.courseForm.validate(async (valid) => {
        if (valid) {
          if (this.type === 1) {
            const re = await updateCourse(this.form)
            if (re.status === 'success') {
              this.$message.success('更新成功')
              this.$emit('change')
              this.$emit('update:visible', false)
            } else {
              this.$message.error('更新失败')
            }
          } else {
            const re = await addCourse(this.form)
            if (re.status === 'success') {
              this.$message.success('新增成功')
              this.$emit('change')
              this.$emit('update:visible', false)
            } else {
              this.$message.error('新增失败')
            }
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.edit-course {
  text-align: left;

  .content {
    background: #f7f7f7;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    letter-spacing: 0;
    text-align: left;
    padding: 22px 19px;
  }
}
</style>
<style lang="scss">
.edit-course {
  .desc {
    width: 100%;
    display: block;

    .el-form-item__content {
      width: 100%;
    }
  }
}
</style>
