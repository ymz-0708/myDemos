<template>
    <div class="app">
        <div class="box">
            <span class="content"> 单行居中，多行居左 </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
</script>

<style lang="scss" scoped>
.app {
    .box {
        max-width: 200px;
        background-color: antiquewhite;
        text-align: center;
        .content {
            display: inline-block;
            text-align: left;
        }
    }
}
</style>
