<template>
  <div class="dashboard-container">
    {{this.$route.params.id}}
    <div id="map" style="width:80%;float: left;height: 100%"></div>

  </div>
</template>

<script>

export default {
  name: 'JcjMap',
  created() {
    console.log(this.$route.params.id)
  },
  mounted() {
    var cMap = new CMap.Map("map");
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
