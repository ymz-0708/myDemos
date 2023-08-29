<template>
    <div class="app">
        <div class="box">
            <el-button @click="btnClick"> 点击一下 </el-button>
            {{ result }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import http from "@utils/http";
const result = ref('')
const btnClick = () => {
    http.get('/api/test').then((res: any) => {
        result.value = res
    })
}
</script>

<style lang="scss" scoped>
.app {
    .box {
        max-width: 300px;
        text-align: center;
        .content {
            display: inline-block;
            text-align: left;
        }
    }
}
</style>
