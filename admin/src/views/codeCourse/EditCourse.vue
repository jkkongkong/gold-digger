<template>
  <div>
    <el-dialog :title="type == 1 ? '新建' : '编辑'" :close-on-click-modal="false" width="90%" height="80%"
      class="edit-course" v-bind="$attrs" append-to-body destroy-on-close @close="closeDialog">
      <div class="content">
        <el-form :model="form" :rules="rules" label-width="100px" ref="argForm" :inline="true">
          <el-form-item label="名称" prop="name">
            <el-input size="small" v-model="form.name" style="width:400px;"></el-input>
          </el-form-item>
          <el-form-item label="课程数" prop="num">
            <el-input size="small" v-model="form.num" style="width:400px;"></el-input>
          </el-form-item>
          <el-form-item label="大小" prop="size">
            <el-input size="small" v-model="form.size" style="width:400px;"></el-input>
          </el-form-item>
          <el-form-item label="热度" prop="hot">
            <el-input size="small" v-model="form.hot" style="width:400px;"></el-input>
          </el-form-item>
          <el-form-item label="点赞" prop="like">
            <el-input size="small" v-model="form.like" style="width:400px;"></el-input>
          </el-form-item>
          <el-form-item label="评论" prop="comment">
            <el-input size="small" v-model="form.comment" style="width:400px;"></el-input>
          </el-form-item>
          <el-form-item label="价格" prop="price">
            <el-input size="small" v-model="form.price" style="width:400px;"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="desc" class="desc">
            <el-input size="small" v-model="form.desc" placeholder="请输入" style="width:100%;" type="textarea"
              :autosize="{ minRows: 2, maxRows: 30 }"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog()" size="mini">取消</el-button>
        <el-button type="primary" @click="save" size="mini">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "EditCourse",
  props: {
    type: {
      type: Number,
      default() {
        return 1;
      },
    },
    id: {
      type: String,
      default() {
        return '';
      },
    },
  },
  components: {},
  data() {
    return {
      test: '',
      form: { id: '', name: '', num: '', size: '', hot: '', like: '', comment: '', price: '', desc: '' }
    };
  },
  watch: {},
  mounted() {

  },
  methods: {
    closeDialog() {
      this.$emit("update:visible", false);
    },
    save() {
      this.$emit("update:visible", false);
    },
  },
};
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
