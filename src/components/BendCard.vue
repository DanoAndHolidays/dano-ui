<script setup>
defineOptions({
    name: 'BendCard',
})

const props = defineProps({
    img: {
        type: String,
        required: false,
        default:
            'https://cdn.pixabay.com/photo/2015/11/05/18/56/lemon-1024641_1280.jpg',
    },
    title: {
        type: String,
        required: false,
        default: 'Vue卡片组件',
    },
    small: {
        type: String,
        required: false,
        default: '5 hours ago',
    },
})
</script>

<template>
    <div class="container">
        <div class="bend-card">
            <div
                class="img"
                :style="`background-image: url(${props.img})`"
            ></div>
            <!-- <img class="img" :src="props.img" :alt="props.title" /> -->
            <div class="text"></div>
            <div class="font">
                <div class="title">{{ props.title }}</div>
                <div class="small">{{ props.small }}</div>
                <div class="content">
                    <slot>
                        你好，我是Dano 👋<br />一位热爱前端的学习者<br /><br />
                        <a
                            href="https://github.com/DanoAndHolidays"
                            target="_blank"
                            style="color: #e5c826"
                            >GitHub主页</a
                        >
                        &nbsp;<a
                            href="https://space.bilibili.com/111616585?spm_id_from=333.1007.0.0"
                            target="_blank"
                            style="color: #e5c826"
                            >Bilibili主页</a
                        >
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.container {
    height: 420px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: #000000 3px solid;
}

.font {
    cursor: default;
}

.bend-card {
    border: rgba(160, 160, 160, 0.255) solid 0.5px;
    min-height: 300px;
    min-width: 300px;
    height: 300px;
    width: 300px;
    border-radius: 40px;
    overflow: hidden;
    transition: height 0.5s ease, filter 0.5s ease;
    position: relative;
    background-color: #fff;
    // backdrop-filter: blur(100px);
    filter: blur(0.2px);

    box-shadow: 0 20px 10px rgba($color: #000000, $alpha: 0.1);
    &:hover {
        height: 420px;
        filter: blur(0px);

        .text {
            filter: blur(0);
        }
        .img {
            filter: blur(0);
        }
        .content {
            opacity: 1;
        }
    }

    .img {
        height: 255px;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all 0.5s ease;
        filter: blur(20px);
    }
    .text {
        // border: #000000 solid 2px;
        height: 200px;
        width: 100%;
        padding: 0px 30px;
        position: absolute;
        top: 219px;
        border-radius: 40px;

        transition: 0.5s ease;
        background-color: #fff;
        filter: blur(15px);

        &::after {
            content: '';
            height: 80px;
            aspect-ratio: 1;
            // background-color: #000000;
            position: absolute;
            top: -80px;
            right: 0;
            border-radius: 40px;
            box-shadow: 70px 75px 0 40px #ffffff;
        }
    }

    .title {
        color: #282828;
        position: absolute;
        top: 225px;
        width: 100%;
        padding: 0 27px;
        height: 50px;
        // background-color: red;
        font-weight: bold;
        font-size: 1.3rem;
        padding-top: 15px;
        // user-select: none;
        // filter: blur(0px);
    }
    .small {
        width: 100%;
        position: absolute;
        top: 268px;
        padding: 0 29px;
        height: 20px;
        color: #808080;
        font-size: small;
        margin-bottom: 10px;
        // user-select: none;
    }
    .content {
        width: 100%;
        max-height: 105px;
        color: #4d4d4d;
        padding: 0 29px;
        position: absolute;
        top: 300px;
        transition: 0.4s 0.1s ease;
        opacity: 0.1;
        font-size: 0.9rem;
        // border: red 2px solid;
        overflow: hidden;
    }
}
</style>
