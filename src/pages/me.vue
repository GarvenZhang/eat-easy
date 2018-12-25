<template>
	<div class="me">
		<HeaderBar to="/" title="我的"/>

		<div class="me-inner">
			<router-link to="/login">
				<div class="me-item">
					<div class="icon-wrapper">
						<img src="../assets/imgs/shenfenzheng.png">
					</div>

					<div class="me-content-wrapper" v-if="isLogin">
						<p class="me-content">
							<strong class="em">已登录</strong>
						</p>
						<p class="me-content" @click="logout">注销</p>
					</div>
					<div class="me-content-wrapper" v-else>
						<p class="me-content">
							<strong class="em">立即登录</strong>
						</p>
						<p class="me-content">解锁全部功能，畅想值友专属福利！</p>
					</div>
				</div>
			</router-link>
		</div>
		<Menu/>
	</div>
</template>

<script>
import HeaderBar from "../components/headerBar";
import Menu from "../components/menu";
import cookie from "../lib/cookie.js";

export default {
	components: {
		HeaderBar,
		Menu
	},
	data() {
		return {
			isLogin: cookie.get("user")
		};
	},
	methods: {
		logout() {
			cookie.unset("user", {});
		}
	}
};
</script>
<style lang="less" scoped>
.me {
	.me-inner {
		margin-top: 40px;

		.me-item {
			display: flex;
			padding: 15px;
			background: white;

			.icon-wrapper {
				margin-right: 15px;
			}
			.me-content-wrapper {
				text-align: left;
				.me-content {
					margin-bottom: 8px;
				}
				.me-content:last-of-type {
					margin-bottom: 0;
				}
				.em {
					font-size: 14px;
					color: #333;
				}
			}
		}
	}
}
</style>


