<template>
  <div class="login-wrapper">
    <div class="login-box">
      <div class="login-brand">
        <img src="../assets/img_logo_navy.png" class='logo'/>
      </div>
      <div class="login-form">
        <form action="" v-on:submit.prevent="submitForm">
          <div>
            <label for="username">ID</label>
            <input type="text" id="username" v-model="user.userid"/>
          </div>
          <div>
            <label for="password">PW</label>
            <input type="password" id="password" v-model="user.password"/>
          </div>
        <p class="text-left">비밀번호를 잊으셨습니까?</p>
          <button type="submit" class="block primary">로그인</button>
        </form>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name:'LogIn',
  data: function() {
    return {
      user: {
        userid:'',
        password:''
      }
    }
  },
  methods: {
    submitForm: function(){
      //var user = { "userid":this.userid, "password":this.password, "name":"Instapay User" }
      //console.log(user);

      if(this.user.userid=='ks') {
        localStorage.setItem('token', 'logined');
        localStorage.setItem('userid',this.user.userid);
        //this.$emit('loginInfo', this.user);
      }
      this.$router.push('/tras');//.catch(()=>{});
    },
  },
}
</script>

<style scoped>
.login-wrapper {
	display:flex;
	justify-content:center;
	align-items: center;
	position:absolute;
	top:0;
	left:0;
	width:100vw;
	height:100vh;
}
.login-box {
	width: calc(100% - 2rem);
	max-width: 400px; text-align:center; 
}

	.login-box .login-brand {
		padding:0 20px 20px;
	}
	.login-box img.logo {
		max-height:80px;
	}

  .login-form {
    padding:0 20px 20px; 
  }
	.login-box input {
		display: block;
		width: 100%;
		padding: 6px 12px;
		font-size: 14px;
		height: 43px;
		margin-bottom: 0.5rem; }

	.login-box .btn {
		margin-top: 20px;
		padding: 10px 25px;
		font-weight: 600;  }

  button {
    padding:0.75rem;
    font-size:1rem;
  }
</style>