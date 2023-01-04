<template>    
    <div class="page-content">
        <div class="content-wrapper">
            <div class="noticebar bg-lightgrey">주문번호: {{tid}}</div>
        </div>
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