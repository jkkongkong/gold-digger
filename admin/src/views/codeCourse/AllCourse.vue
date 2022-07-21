<template>
  <div class="app-container">
    <div class="actions">
      <el-input v-model="searchCourse" placeholder="课程名字或者编号" style="width: 200px;margin-right:20px" class="filter-item"
        @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-plus" @click="create">
        New
      </el-button>
      <el-table :data="courseList" border style="margin-top:20px">
        <el-table-column label="id" prop="id"></el-table-column>
        <el-table-column label="名字" prop="name"></el-table-column>
        <el-table-column label="链接" show-overflow-tooltip>
          <template slot-scope="scope">
            <a :href="scope.row.url" target="_blank" rel="noopener noreferrer">{{ scope.row.url }}</a>
          </template>
        </el-table-column>
        <el-table-column label="课程数" prop="num"></el-table-column>
        <el-table-column label="大小" prop="size"></el-table-column>
        <el-table-column label="热度" prop="hot"></el-table-column>
        <el-table-column label="点赞" prop="like"></el-table-column>
        <el-table-column label="评论" prop="comment"></el-table-column>
        <el-table-column label="价格" prop="price"></el-table-column>
        <el-table-column label="条数" prop="fishNum"></el-table-column>
        <el-table-column label="actions">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-edit" @click="edit(scope.row.id)"></el-button>
            <el-button type="text" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <EditCourse :visible.sync="visible" :type="actionType" :id="curCourseId" v-if="visible" @change="queryCourse()">
      </EditCourse>
    </div>
  </div>
</template>

<script>
import checkPermission from '@/utils/permission' // 权限判断函数
import waves from '@/directive/waves'
import EditCourse from './EditCourse.vue'

export default {
  name: 'AllCourse',
  components: { EditCourse },
  directives: { waves },
  data() {
    return {
      searchCourse: '',
      curCourseId: '',
      courseList: [{ id: '1111', name: '基于Excel的使用技巧', url: 'http://localhost:9527/#/codeCourse/index', num: 15, size: 88, hot: 1457, like: 1200, comment: 100, price: 50, fishNum: 10 }],
      visible: false,
      actionType: 1,
    }
  },
  methods: {
    checkPermission,
    handleFilter() {
      console.log(111)
    },
    queryCourse() { },
    create() {
      this.curCourseId = ''
      this.actionType = 1
      this.visible = true
    },
    edit(id) {
      this.curCourseId = id
      this.actionType = 2
      this.visible = true
    },
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
}
</style>

