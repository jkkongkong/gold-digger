<template>
  <div class="app-container">
    <el-form ref="commentForm" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="名字" prop="name">
        <el-input v-model="form.name" size="small" placeholder="请输入" style="width:100%;" type="textarea"
          :autosize="{ minRows: 2, maxRows: 30 }" />
      </el-form-item>
      <el-form-item label="评论" prop="comment">
        <el-input v-model="form.comment" size="small" placeholder="请输入" style="width:100%;" type="textarea"
          :autosize="{ minRows: 2, maxRows: 30 }" />
      </el-form-item>
    </el-form>
    <div class="actions">
      <el-button v-waves class="filter-item" type="primary" @click="init">
        初始化
      </el-button>
      <el-button v-waves class="filter-item" type="primary" @click="clear">
        清空
      </el-button>
      <el-button v-waves class="filter-item" type="primary" @click="add">
        增加
      </el-button>
    </div>
  </div>
</template>

<script>

import waves from '@/directive/waves'

import { initComment, clearComment, addComment } from '@/api/comment'

export default {
  name: 'CommentManage',
  components: {},
  directives: { waves },
  data() {
    return {
      form: { name: '', comment: '' },
      rules: { name: [{ required: true, message: '字段必填', trigger: ['change', 'blur'] }], comment: [{ required: true, message: '字段必填', trigger: ['change', 'blur'] }] }
    }
  },
  methods: {
    init() {
      this.$refs.commentForm.validate(async (valid) => {
        if (valid) {
          const re = await initComment(this.form)
          if (re.status === 'success') {
            this.$message.success('初始化成功')
          } else {
            this.$message.error('初始化失败')
          }
        }
      })
    },
    async clear() {
      this.$confirm('确定清空吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(async () => {
        const re = await clearComment(this.form)
        if (re.status === 'success') {
          this.$message.success('清空成功')
        } else {
          this.$message.error('清空失败')
        }
      }).catch(() => { })
    },
    async add() {
      this.$refs.commentForm.validate(async (valid) => {
        if (valid) {
          const re = await addComment(this.form)
          if (re.status === 'success') {
            this.$message.success('添加成功')
          } else {
            this.$message.error('添加失败')
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;

  .actions {
    margin-top: 20px;
  }
}
</style>

