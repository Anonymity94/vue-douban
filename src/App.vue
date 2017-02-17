<template>
<div id="app">
  <div class="header">
    <h2>豆瓣电影</h2>
  </div>
  <router-view></router-view>

<div class="footer">
  <div class="bar">
    <div class="bar bar-tab">
        <router-link class="bar-item" to="/movie/coming-soon">即将上映</router-link>
        <router-link class="bar-item" to="/movie/top250">Top250</router-link>
        <router-link class="bar-item" to="/movie/weekly">口碑榜</router-link>
        <router-link class="bar-item" to="/movie/us-box">北美票房榜</router-link>
        <router-link class="bar-item" to="/movie/new-movies">新片榜</router-link>
    </div>
  </div>
</div>

</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">

.footer{
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 50px;
  line-height: 50px;

  .bar {
      background-color: #eef1f6;
      display: flex;
      width: 100%;
      height: inherit;;
      line-height: inherit;;
      font-size: 14px;

      .bar-item{
        width: 20%;
        padding: 0 4px;
        text-align: center;
        border-top: 1px solid #d1dbe5;

        &.active{
          background-color: #fff;
          color: #20a0ff;
          border-top-color: #fff;
          border-left: 1px solid #d1dbe5;
          border-right: 1px solid #d1dbe5;
        }

        &:first-child{
          &.active{
            border-left: none;
          }
        }

        &:last-child{
          &.active{
            border-right: none;
          }
        }

        a{
          color: #8391a5;
        }
      }
  }
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
