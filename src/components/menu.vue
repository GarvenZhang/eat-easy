<template>
	<nav class="main-menu">
		<ul class="menu-list">
			<li class="menu-list-item">
				<router-link to="/" class="menu-list-item-link">
					<span :class="['icon', 'icon-home', path === '/' ? 'active' : '']"></span>
					<span :class="['menu-txt', path === '/' ? 'active' : '']">首页</span>
				</router-link>
			</li>
			<li class="menu-list-item">
				<router-link to="/discovery" class="menu-list-item-link">
					<span :class="['icon', 'icon-find', path === '/discovery' ? 'active' : '']"></span>
					<span :class="['menu-txt', path === '/discovery' ? 'active' : '']">发现</span>
				</router-link>
			</li>
			<li class="menu-list-item">
				<router-link to="/list" class="menu-list-item-link">
					<span :class="['icon', 'icon-list', path === '/list' ? 'active' : '']"></span>
					<span :class="['menu-txt', path === '/list' ? 'active' : '']">清单</span>
				</router-link>
			</li>
			<li class="menu-list-item">
				<router-link to="/me" class="menu-list-item-link">
					<span :class="['icon', 'icon-user', path === '/me' ? 'active' : '']"></span>
					<span :class="['menu-txt', path === '/me' ? 'active' : '']">我的</span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	computed: {
		path() {
			return this.$route.path;
		}
	}
};
</script>
<style lang="less" scoped>
.main-menu {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 3px 0;
	background: white;
	border-top: 1px solid #f5f5f5;
	.menu-list {
		display: flex;
		justify-content: space-around;

		.menu-list-item-link {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-right: 40px;
		}
		.menu-list-item-link:last-of-type {
			margin-right: 0;
		}

		.menu-txt {
			color: #cdcdcd;
			&.active {
				color: #d81e06;
			}
		}
	}
	.icon {
		display: inline-block;
		width: 32px;
		height: 32px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.icon-home {
		background-image: url(../assets/imgs/homepage_fill.png);
		&.active {
			background-image: url(../assets/imgs/homepage_fill_a.png);
		}
	}
	.icon-find {
		background-image: url(../assets/imgs/browse_fill.png);
		&.active {
			background-image: url(../assets/imgs/browse_fill_a.png);
		}
	}
	.icon-list {
		background-image: url(../assets/imgs/label_fill.png);
		&.active {
			background-image: url(../assets/imgs/label_fill_a.png);
		}
	}
	.icon-user {
		background-image: url(../assets/imgs/group_fill.png);
		&.active {
			background-image: url(../assets/imgs/group_fill_a.png);
		}
	}
}
</style>


