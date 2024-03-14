<template>
    <div class="page-content">
        <!-- 추후 form component file로 분할-->
        <div class="form-wrapper">
            <form action="" @submit.prevent="onSubmitQuery">
                <div class="d-grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
                    <div class="form-group">
                        <flat-pickr v-model="fromDate" id="date_from" :config="config" placeholder="시작일" class="form-control"></flat-pickr>
                    </div>
                    <div class="form-group">
                        <flat-pickr v-model="toDate" id="date_to" :config="config" placeholder="종료일" class="form-control"></flat-pickr>
                    </div>
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
        <!-- <result-tras :results='res' @openDet='openDetail'></result-tras> -->
        <result-tras></result-tras>
    </div>
</template>
<script>
// 임시 데이터 json load
//import res from '@/assets/json/transactions.json'
//import axios from 'axios'

import ResultTras from './ResultTras.vue'

export default {
    name:'SearchTras',
    components: {
        ResultTras,
    },
    data() {
        return {
            fromDate:'',
            toDate:'',
            //res:''
        }
    },
    methods:{
        lazyLoadJson:()=>import('@/assets/json/transaction_star.json'),
        onSubmitQuery:function(){
            // axios로 데이터 로딩
            /*axios.get('transactions.json')
                .then(res=>{
                    console.log(res.data);
                    this.$store.dispatch('loadTransactions',res.data);
                })
                .catch(err=>{
                    alert('파일을 읽지 못했습니다');
                    console.log(err);
                })
            */
            // lazy loading 임시 데이터 json file - Promise를 기본으로 return해 주네?
            this.lazyLoadJson()
            .then(data=>{
                console.log(data);
                //this.res = data;
                this.$store.dispatch('loadTransactions',data);
            })
            .catch(err=>{
                console.log(err);
                alert('파일 읽기에 실패하였습니다');
            })
        },
        /*openDetail(item) {
            this.$emit('openDet',item);
        }*/
    },
    mounted(){ 
        //this.$emit('viewTras',false); //console.log(this.res.count, this.res.tras)
        // 내역조회 UI가 열릴 때는 뷰모드를 search로
        this.$emit('viewMode','search');
    }
}
</script>
<style scoped>
.form-group { min-width:300px; }
.form-group label { margin-bottom:5px }
</style>