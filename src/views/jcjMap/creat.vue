<template>
  <div class="dashboard-container">
    <router-link :to="'/jcjMap/edit/'+id">
      <el-button type="primary" size="small" icon="el-icon-edit">
        新增{{id}}
      </el-button>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'JcjMap',
  computed: {
    id() {
      return parseInt(Math.random()*(1000+1),10);
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
