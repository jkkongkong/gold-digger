<template>
  <div class="app-container">
    <div class="actions">
      <el-input v-model="searchCourse" placeholder="课程名字或者编号" style="width: 200px;margin-right:20px" class="filter-item"
        @keyup.enter.native="queryCourseList" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="queryCourseList">
        Search
      </el-button>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-plus" @click="create">
        New
      </el-button>
    </div>
    <el-table :data="courseList" border style="margin-top:20px">
      <el-table-column label="id" prop="id" />
      <el-table-column label="名字">
        <template slot-scope="scope">
          <span @click.alt="copyUrl(scope.row.name)">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="链接" show-overflow-tooltip>
        <template slot-scope="scope">
          <span @click.ctrl="openUrl(scope.row.url)" @click.alt="copyUrl(scope.row.url)">{{ scope.row.url }}</span>
        </template>
      </el-table-column>
      <el-table-column label="课程数" prop="num" />
      <el-table-column label="大小" prop="size" />
      <el-table-column label="热度" prop="hot" />
      <el-table-column label="点赞" prop="like" />
      <el-table-column label="评论" prop="comment" />
      <el-table-column label="价格" prop="price" />
      <el-table-column label="条数" prop="fishNum" />
      <el-table-column label="提货码" show-overflow-tooltip>
        <template slot-scope="scope">
          <span @click.alt="copyUrl(scope.row.pickingCode)">{{ scope.row.pickingCode }}</span>
        </template>
      </el-table-column>
      <el-table-column label="actions">
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-edit" @click="edit(scope.row.id)" />
          <el-button type="text" icon="el-icon-delete" @click="del(scope.row.id)" />
        </template>
      </el-table-column>
    </el-table>
    <EditCourse v-if="visible" :id="curCourseId" :visible.sync="visible" :type="actionType"
      @change="queryCourseList()" />

  </div>
</template>

<script>
import checkPermission from '@/utils/permission' // 权限判断函数
import waves from '@/directive/waves'
import EditCourse from './EditCourse.vue'
import { queryCourseList, delCourse } from '@/api/codeCourse'
import { openUrl, copyUrl } from './utils'

export default {
  name: 'AllCourse',
  components: { EditCourse },
  directives: { waves },
  data() {
    return {
      searchCourse: '',
      curCourseId: '',
      courseList: [{ id: '1111', name: '基于Excel的使用技巧', url: 'http://localhost:9527/#/codeCourse/index', num: 15, size: 88, hot: 1457, like: 1200, comment: 100, price: 50, fishNum: 10, pickingCode: 'rrtiyiyukgasdfsdafsadfasdfasdfs' }],
      visible: false,
      actionType: 1
    }
  },
  created() {
    this.queryCourseList()
  },
  methods: {
    openUrl,
    copyUrl(url) {
      copyUrl(url, this)
    },
    checkPermission,
    async queryCourseList() {
      const re = await queryCourseList({ key: this.searchCourse })
      if (re.status !== 'success') {
        this.$message.error('获取失败')
      }
    },
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
    del(id) {
      this.$confirm('确定删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(async () => {
        const re = await delCourse({ id })
        if (re.status === 'success') {
          this.$message.success('删除成功')
          this.queryCourseList()
        } else {
          this.$message.error('删除成功')
        }
      }).catch(() => { })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
}
</style>

