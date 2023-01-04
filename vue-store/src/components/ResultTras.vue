<template>
    <div class="card result mt-20">
        <div class="card-header">
            <div class="summary">거래내역 <span>{{countsOfTras}}</span>건</div>
            <div class="actions">Actions</div>
        </div>
        <div class="card-body">
            <table>
                <tr>
                    <th>결제건명</th>
                    <th>이용자명</th>
                    <th>결제금액</th>
                    <th>결제수단</th>
                    <th>주문번호</th>
                    <th>결제일시</th>
                    <th></th>
                </tr>
                <tr v-for='item in results.tras' :key='item.tid' @click="viewTras(item.tid)" class="hoverable">
                        <td>{{item.productName}}</td>
                        <td>{{item.uname}}</td>
                        <td>{{item.paymentAmount}}</td>
                        <td>{{item.bankName}}</td>
                        <td>{{item.orderNo.slice(0,5)+'..'}}</td>
                        <td>{{item.adate}}</td>
                        <td>></td>
                </tr>
            </table>
        </div>
    </div>    
</template>
<script>
export default {
    name:'ResultTras',
    props:['results'],
    computed:{
        countsOfTras:function() {
            return this.results.tras.length;
        }
    },
    methods:{
        viewTras(tid) {
            this.$router.push('/tras/'+tid);
        }
    }
}
</script>

<style scoped>
table { width:100%; border-collapse:collapse; }
th, td { text-align:left; padding:0.25rem 0.5rem; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}
tr.hoverable:hover { cursor:pointer; background-color:var(--bg-lightgrey); }
/* for Responsive Table */
/* @media (max-width:767px) {
#resultTable table.rs > tr > td:nth-of-type(1):before { font-weight:bold; content: "결제건명"; }
#resultTable table.rs > tr > td:nth-of-type(2):before { font-weight:bold; content: "이용자명"; }
#resultTable table.rs > tr > td:nth-of-type(3):before { font-weight:bold; content: "결제금액"; }
#resultTable table.rs > tr > td:nth-of-type(4):before { font-weight:bold; content: "결제기관"; }
#resultTable table.rs > tr > td:nth-of-type(5):before { font-weight:bold; content: "주문번호"; }
#resultTable table.rs > tr > td:nth-of-type(6):before { font-weight:bold; content: "결제일시"; }

#resultTable table.rs > tr > td:nth-of-type(7) { display:none; }
}*/

</style>