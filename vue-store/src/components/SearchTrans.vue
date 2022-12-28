<template>
    <div class="page-content">
        Transaction list here
        <div class="form-wrapper">
            <form action="" @submit.prevent="onSubmitQuery">
                <div class="form-group">
                    <label for="DateFrom">From</label>
                    <input type="date" id="date_from" v-model="fromDate"/>
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
export default {
    name:'SearchTrans',
    data:function() {
        return {
            fromDate:'',
            toDate:''
        }
    },
    methods:{
        onSubmitQuery:()=>{
            //
        }
    },
    mounted(){ console.log('hi')}
}
</script>
<style scoped>

</style>