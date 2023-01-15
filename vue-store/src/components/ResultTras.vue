<template>
    <div class="card light result mt-20">
        <div class="card-header">
            <div class="card-title summary">거래내역 <span>{{countsOfTras}}</span>건</div>
            <div class="actions">Actions</div>
        </div>
        <div class="card-body">
            <table v-if="countsOfTras>0">
                <tr>
                    <th>결제건명</th>
                    <th>이용자명</th>
                    <th>결제금액</th>
                    <th>결제수단</th>
                    <th>주문번호</th>
                    <th>결제일시</th>
                    <th></th>
                </tr>
                <tr v-for='item in results' :key='item.tid' @click="viewTras(item.tid)" class="hoverable">
                        <td>{{item.productName}}</td>
                        <td>{{item.uname}}</td>
                        <td>{{item.paymentAmount}}</td>
                        <td>{{item.bankName}}</td>
                        <td>{{item.orderNo.slice(0,5)+'..'}}</td>
                        <td>{{item.adate}}</td>
                        <td>></td>
                </tr>
            </table>
            <!--<ul v-if="countsOfTras>0" class="u-table">
                <li class="table-row">
                    <div class="t-header">결제건명</div>
                    <div class="t-header">이용자명</div>
                    <div class="t-header"></div>
                    <div class="t-header"></div>
                    <div class="t-header"></div>
                    <div class="t-header"></div>
                </li>
                <li class="table-row">
                    <div class="t-data"></div>
                    <div class="t-data"></div>
                    <div class="t-data"></div>
                    <div class="t-data"></div>
                    <div class="t-data"></div>
                    <div class="t-data"></div>
                    <div class="t-data"></div>
                </li>
            </ul>-->
            <p v-else>해당하는 결과가 없습니다.</p>
        </div><!-- card-body-->
    </div>    
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name:'ResultTras',
    //props:['results'],
    computed:{
        /*countsOfTras() {
            return this.results.length;
        },
        results() {
            return this.$store.getters.tras;
        }*/
        ...mapGetters({
          countsOfTras:'getCounts',
          results:'tras'  
        })
    },
    methods:{
        viewTras(tid) {
            /* path의 param으로 tid를 전달하는 방식
            this.$router.push('/tras/'+tid);

            // 선택한 item(거래상세데이터)를 event payload로 상세 페이지에 전달하는 방식(non-Vuex)
            const item = this.results.tras.find(tra=>tra.tid == tid);
            console.log(item);
            this.$emit('openDet',item); */

            // vuex store에 선택된 아이템(tid)을 저장
            console.log(tid);
            this.$router.push('/tras/detail');
            // vuex mutation commit을 통해 현재 열릴 tid를 저장 
            this.$store.commit('setCurTid', tid);   
            //sessionStorage.setItem('curTid',tid);
        }
    }
}
</script>

<style scoped>
table { width:100%; border-collapse:collapse; table-layout:fixed; }
th, td { text-align:left; padding:0.25rem 0.5rem; overflow:hidden; white-space:nowrap;text-overflow:ellipsis; }
tr.hoverable:hover { cursor:pointer; background-color:var(--bg-lightgrey); }

.card.result table>tr>th:first-child, .card.result table>tr>td:first-child { width:240px;}
.card.result table>tr>th:nth-last-child(2) { width:110px;}
.card.result table>tr>th:last-child { width:26px;}


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