<template>
    <div class="page-content">
        Transaction list here
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
    </div>
</template>
<script>
import tras from '@/assets/json/transactions.json'

export default {
    name:'SearchTrans',
    data() {
        return {
            fromDate:'',
            toDate:'',
            tras:tras,
        }
    },
    methods:{
        onSubmitQuery:()=>{
            // axios로 데이터 요청하여 아래 렌더링
            
        }
    },
    mounted(){ console.log(this.tras.tras)}
}
</script>
<style scoped>

</style>