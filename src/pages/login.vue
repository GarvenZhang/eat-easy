<template>
	<div class="login">
		<HeaderBar to="/me" title="登录"/>

		<div class="login-inner">
			<div class="login-item" @click="login">
				<span class="icon icon-wechat"></span>
				<span class="login-txt">微信登录</span>
			</div>
			<div class="login-item" @click="login">
				<span class="icon icon-phone"></span>
				<span class="login-txt">手机登录</span>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderBar from "../components/headerBar";
import cookie from "../lib/cookie.js";

export default {
	components: {
		HeaderBar
	},
	data() {
		return {
			fPath: ""
		};
	},
	methods: {
		login() {
			cookie.set("user", "jmazm", {});
			alert("登录成功");

			if (this.$route.query.from === "discovery") {
				this.$router.push("/discovery");
			}
		}
	}
};
</script>
<style lang="less" scoped>
.login {
	.login-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		margin-top: 40px;
		padding-top: 200px;
		.login-item {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 150px;
			height: 36px;
			font-size: 16px;
			line-height: 36px;
			background: #333;
			color: white;
			margin-bottom: 20px;

			.icon {
				display: inline-block;
				width: 20px;
				height: 20px;
				margin-right: 10px;
				background-size: contain;
				background-position: center;
				background-repeat: no-repeat;
			}

			.icon-wechat {
				background-image: url(../assets/imgs/wechat.png);
			}
			.icon-phone {
				background-image: url(../assets/imgs/phone.png);
			}
		}
	}
}
</style>


