<template>
    <div class="page-content">
        <!-- 추후 form component file로 분할-->
        <div class="form-wrapper">
            <form action="" @submit.prevent="onSubmitQuery">
                <div class="form-group">
                    <label for="DateFrom">From</label>
                    <input type="date" id="date_from" placeholder="hi" v-model="fromDate"/>
                </div>
                <div class="form-group">
                    <label for="DateTo">To</label>
                    <input type="date" id="data_to" v-model="toDate"/>
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
        <result-tras :results='res' @openDet='openDetail'></result-tras>
    </div>
</template>
<script>
// 임시 데이터 json load
import results from '@/assets/json/transactions.json'
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
            res:results,
        }
    },
    methods:{
        onSubmitQuery:()=>{
            // axios로 데이터 요청하여 아래 렌더링
            
        },
        openDetail(item) {
            this.$emit('openDet',item);
        }
    },
    mounted(){ 
        this.$emit('viewTras',false); //console.log(this.res.count, this.res.tras)
    }
}
</script>
<style scoped>

</style>