<template>
  <div style="margin-left: 20%;">
    <div style="width: 880px">
      <el-input
        v-model="input"
        placeholder="请输入您要检索的内容"
        style="height: 50px; width: 800px"
      />
      <el-button
        type="primary"
        style="margin: 10px; height: 40px; border-radius: 10px"
        >搜索</el-button
      >
    </div>
    <div>
      <el-card style="margin: 10px auto 10px auto ;width:1000px;">
        
    </el-card>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const input = ref();
</script>
<style>
</style>