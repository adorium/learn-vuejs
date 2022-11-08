<template>
    <div class="page-container login">
		<div class="login-box">
			<div class="logo">
				<img src="../assets/images/logo.png"/>
			</div>
			<form class="login-form" action="" v-on:submit.prevent="submitForm">
                <div class="form-group">
                    <input type="email" id="userid" v-model="userid" autocomplete="off" placeholder="이메일 ID" class="form-control form-control-solid placeholder-no-fix">
                </div>
                <div class="form-group">
                    <input type="password" autocomplete="off" placeholder="비밀번호" name="password" class="form-control form-control-solid placeholder-no-fix">
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn navy btn-block uppercase">로그인</button>
                </div>
                <div class="form-actions">
                    <div class="pull-left">
                        <input type="checkbox" name="remember" value="1"><span style="padding: 3px 0px 5px;">아이디 저장</span>
                    </div>
                    <div class="pull-right">
                        <a href="#/newPassword" id="forget-password" class="forget-password">
                            <i class="fa fa-angle-right"></i> 비밀번호 재설정
                        </a>
                    </div>
                </div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
    name:'LogIn',
    data:function() {
        return {
            userid:'',
            userpw:'',
        }
    },
    methods:{
        submitForm: function() {
            var user = { "userid":this.userid, "password":this.password, "name":"Instapay User" }
            this.$emit('loginInfo', user);
        }
    }
}
</script>