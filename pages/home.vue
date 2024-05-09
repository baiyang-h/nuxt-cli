<template>
  <div class="home">
    <i class="iconfont icon-icon_fabu"></i>
    <div>
     <div>
       <p>在assets/images下的引入，会通过loader处理图片，最后在单文件js中</p>
       <img src="~/assets/images/pic.jpg" alt="" width="100">
     </div>
      <div>
        <p>在public下的引入, 打包后是直接在根目录下的不会做处理</p>
        <img src="/pic2.jpg" alt="" width="100">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  color: $red;
}
</style>
