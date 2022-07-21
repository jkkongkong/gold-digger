<template>
  <div>
    <el-dialog :title="type == 1 ? '新建' : '编辑'" :close-on-click-modal="false" width="800px" height="80%" class="edit-course" v-bind="$attrs" append-to-body destroy-on-close @close="closeDialog">
      <div class="content">
        
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
      test:''
    };
  },
  watch:{},
  mounted() {

  },
  methods: {
    closeDialog() {
      this.$emit("update:visible", false);
    },
    save(){},
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
