<template>    
    <div class="page-content">
        <div class="noticebar bg-lightgrey">주문번호: {{tid}}</div>
    </div>
</template>

<script>
export default {
    name:'TraDetail',
    data() {
        return {
            tid:'',
        }
    },
    props:['tra'],
    created() {
        const tid = this.$route.params.tid;
        console.log('detail', tid);
        this.tid = tid;
        this.$emit('viewTras',true);
    }
}
</script>
<style scoped>
.noticebar { padding:1rem 1rem; font-size:13px; border-left:6px solid #c0bec0!important; }
</style>