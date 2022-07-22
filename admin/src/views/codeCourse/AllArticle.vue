<template>
  <div class="app-container">
    <div class="actions">
      <el-input v-model="searchCourse" placeholder="文章名字或者编号" style="width: 200px;margin-right:20px" class="filter-item"
        @keyup.enter.native="queryArticleList" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="queryArticleList">
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
      <el-table-column label="日期" prop="date" />
      <el-table-column label="大小" prop="size" />
      <el-table-column label="热度" prop="hot" />
      <el-table-column label="点赞" prop="like" />
      <el-table-column label="评论" prop="comment" />
      <el-table-column label="源地址" show-overflow-tooltip>
        <template slot-scope="scope">
          <span @click.ctrl="openUrl(scope.row.origin)" @click.alt="copyUrl(scope.row.origin)">{{ scope.row.origin
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="解压密码">
        <template slot-scope="scope">
          <span @click.alt="copyUrl(scope.row.password)">{{ scope.row.password }}</span>
        </template>
      </el-table-column>
      <el-table-column label="actions">
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-edit" @click="edit(scope.row.id)" />
          <el-button type="text" icon="el-icon-delete" @click="del(scope.row.id)" />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination" :current-page="currentPage" :page-size="pageSize"
      layout="total, prev, pager, next, jumper" :total="total" @current-change="handleCurrentChange" />
    <EditArticle v-if="visible" :id="curCourseId" :visible.sync="visible" :type="actionType"
      @change="queryArticleList()" />
  </div>
</template>

<script>
import checkPermission from '@/utils/permission' // 权限判断函数
import waves from '@/directive/waves'
import EditArticle from './EditArticle.vue'
import { queryArticleList, delArticle } from '@/api/codeCourse'
import { openUrl, copyUrl } from './utils'

export default {
  name: 'AllCourse',
  components: { EditArticle },
  directives: { waves },
  data() {
    return {
      searchCourse: '',
      curCourseId: '',
      courseList: [{ id: '1111', name: '基于Excel的使用技巧', url: 'http://localhost:9527/#/codeCourse/index', date: '2020-01-12', size: 88, hot: 1457, like: 1200, comment: 100, origin: 'http://localhost:9527/#/codeCourse/index', password: '123' }],
      visible: false,
      actionType: 1,
      currentPage: 1,
      total: 0,
      pageSize: 40
    }
  },
  methods: {
    openUrl,
    copyUrl(url) {
      copyUrl(url, this)
    },
    checkPermission,
    handleCurrentChange(val) {
      this.currentPage = val
      this.queryArticleList()
    },
    async queryArticleList() {
      const re = await queryArticleList({
        key: this.searchCourse, offset: (this.currentPage - 1) * this.pageSize,
        limit: this.pageSize
      })
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
        const re = await delArticle({ id })
        if (re.status === 'success') {
          this.$message.success('删除成功')
          this.queryArticleList()
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

  .pagination {
    margin: 10px auto 10px auto;
    text-align: center;
  }
}
</style>

