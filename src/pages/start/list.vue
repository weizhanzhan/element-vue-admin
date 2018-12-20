<template>
    <div class="blogs">
        <div class="blogs-title">博客列表</div>
        <div class="blog-item">
            <div class="blog-item-list" v-for="n in 5" :key="n">
                我是博客一
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.blogs{
    background: #ffffff;
    position: relative;
    width: 95%;
    margin: 0 auto
}
.blogs-title{
    padding: 0.5rem;
    border-bottom: 1px solid #eeeeee

}

.blog-item{
    padding: 0.3rem 0.5rem
}
.blog-item-list{
    border-bottom: 1px solid #eeeeee
}
</style>
