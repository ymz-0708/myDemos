<template>
    <!-- <div class="app">这个网站拿来做啥呢</div>
    <el-input v-model="value" />
    <el-button @click="success">success</el-button>
    <el-button @click="fail">fail</el-button>
    <span> {{ result }}</span> -->
    <router-view></router-view>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import http from "@utils/http";

const result = ref<string>();

const value = ref<string>("");

const success = () => {
    http.get("/users", { value: value.value }).then((res: any) => {
        result.value = res;
    });
};
const fail = () => {
    http.get("/users/id").then((res: any) => {
        console.log(res);
    });
};
</script>

<style lang="scss" scoped>
// .app {
// }
</style>
