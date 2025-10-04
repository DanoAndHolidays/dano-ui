<template>
    <div class="test">
        <BendCard
            small="12 hours ago"
            img="https://cdn.pixabay.com/photo/2015/11/05/18/56/lemon-1024641_1280.jpg"
        >
            灵感来自于
            <a
                href="https://www.bilibili.com/video/BV1vkbtzbEmb/?spm_id_from=333.1387.favlist.content.click&vd_source=47c9acd507be61251cd2bb730416395c"
                target="_blank"
                style="color: #e5c826"
                >Online Tutorials</a
            >，很喜欢这个漂亮的设计，为了能在更多的场景使用，就制作了这个单组件包。有bug还请联系我
            &nbsp;<a
                href="https://github.com/DanoAndHolidays"
                target="_blank"
                style="color: #e5c826"
                >GitHub主页</a
            >
        </BendCard>
        <BendCard
            title="文档"
            img="https://cdn.pixabay.com/photo/2016/07/29/10/51/watermelon-1552497_1280.jpg"
        >
            可以设置标题、副标题、图片与内容<br /><a
                href="https://github.com/DanoAndHolidays"
                target="_blank"
                style="color: #fd9f7e"
                >文档地址</a
            >
        </BendCard>
        <BendCard
            title="自我介绍"
            small="1 hours ago"
            img="https://cdn.pixabay.com/photo/2018/06/26/22/59/fox-3500499_1280.jpg"
        >
            你好，我是Dano 👋<br />一位热爱前端的学习者<br /><br />
            <a
                href="https://github.com/DanoAndHolidays"
                target="_blank"
                style="color: #c38d61"
                >GitHub主页</a
            >
            &nbsp;<a
                href="https://space.bilibili.com/111616585?spm_id_from=333.1007.0.0"
                target="_blank"
                style="color: #c38d61"
                >Bilibili主页</a
            ></BendCard
        >
    </div>
</template>

<script setup>
import { BendCard } from 'dano-ui'
import 'dano-ui/style'
</script>

<style scoped>
.test {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
</style>
