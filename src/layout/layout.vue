<template>
  <div ref="Area" class="vanta_area">
    <!-- 头部 -->
    <div
      style="
        display: flex;
        height: 70px;
        background-color: rgb(231, 197, 197);
        line-height: 60px;
        border-bottom: 1px solid #ddd;
      "
    >
      <div style="width: 85%; display: flex">
        <div style="width: 100px; padding-left: 30px; display: flex"></div>
        <div
          style="
            flex: 1;
            color: rgb(128, 124, 153);
            font-size: 16px;
            text-align: center;
            font-size: 30px;
            font-weight: bolder;
          "
        >
          <b>牧畜知识图文检索</b>
        </div>
      </div>
      <!-- 头像和下拉菜单 -->
      <div style="width: 200px; text-align: right; padding-right: 10px">
        <el-dropdown>
          <div style="line-height: 70px; display: flex">
            <el-avatar
              :size="50"
              :src="avatar"
              style="position: relative; top: 15px; right: 5px"
            />
            <div style="margin-left: 10px; margin-top: 5px">用户名</div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <div @click="router.push('/personCenter?page=myInfo')">
                  个人中心
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div @click="logout">退出登录</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <!-- 侧边栏 -->
    <div style="display: flex">
      <div style="display: flex">
        <div
          style="
            width: 230px;
            min-height: calc(100vh - 80px);
            border-right: 1px solid #ccc;
            background-color: #ddd;
          "
        >
          <el-menu
            class="el-menu-vertical-demo"
            style="background-color: #ddd"
            :collapse="showSide"
          >
            <el-menu-item
              index="1"
              class="meun_index"
              path="text"
              @click="router.push('/home')"
            >
              <el-icon><Search /></el-icon>
              <span>文本检索</span>
            </el-menu-item>
            <el-menu-item
              index="2"
              class="meun_index"
              @click="router.push('/photo')"
            >
              <el-icon><More /></el-icon>
              <span>图片检索</span>
            </el-menu-item>
            <el-menu-item
              index="3"
              class="meun_index"
              @click="router.push('/book')"
            >
              <el-icon><Reading /></el-icon>
              <span>牧畜知识大全</span>
            </el-menu-item>
            <el-menu-item
              index="4"
              class="meun_index"
              @click="router.push('/person')"
            >
              <el-icon><User /></el-icon>
              <span>个人信息管理</span>
            </el-menu-item>
            <el-menu-item
              index="5"
              class="meun_index"
              @click="router.push('/instructions')"
            >
              <el-icon><Document /></el-icon>
              <span>项目简介</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>

      <!--  主体 -->
      <div style="margin: 10px 20px 0 0; width: 60%">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  Search,
  More,
  Setting,
  Document,
  User,
  Reading,
} from "@element-plus/icons-vue";
import router from "@/router";
import * as Three from "three";
import GLOBE from "vanta/src/vanta.globe";
import { onMounted, onBeforeUnmount, ref } from "vue";
const Area = ref(null);
let vantaEffect = null;
onMounted(() => {
  vantaEffect = GLOBE({
    el: Area.value,
    THREE: Three,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xffffff,
    backgroundColor: 0x7c7cfc,
    size: 0.50
    
  });
});
onBeforeUnmount(() => {
  if (vantaEffect) {
    vantaEffect.destroy();
  }
});
</script>
<style scoped>
.meun_index {
  margin-top: 40px;
  font-size: 20px;
  opacity: 1;
}
.vanta_area {
  width: 100vw;
  height: 100vh;
}
.meun_index::after{
  content: '';
  background: #776886;
  position: absolute;
  width:100%;
  height: 3px;
  bottom:-5px;
  left:0;
  transform: scaleX(0);
  transform-origin:bottom right ;
  transition: transform 0.4s ease-in-out;
}
.meun_index:hover::after{
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>