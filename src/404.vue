<template>
    <div class="pg-404">
        404
        <el-button @click="goHome">HOME</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter();
// 回到主页
const goHome = () => {
    router.push('/')
};
</script>

<style lang="scss" scoped>
.pg-404 {
}
</style>
