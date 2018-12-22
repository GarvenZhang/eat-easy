<template>
	<nav class="main-menu">
		<ul class="menu-list">
			<li class="menu-list-item">
				<router-link to="/" class="menu-list-item-link">
					<span class="icon icon-home"></span>
					<span class="menu-txt">首页</span>
				</router-link>
			</li>
			<li class="menu-list-item">
				<router-link to="/discovery" class="menu-list-item-link">
					<span class="icon icon-find"></span>
					<span class="menu-txt">发现</span>
				</router-link>
			</li>
			<li class="menu-list-item">
				<router-link to="/list" class="menu-list-item-link">
					<span class="icon icon-list"></span>
					<span class="menu-txt">清单</span>
				</router-link>
			</li>
			<li class="menu-list-item">
				<router-link to="/me" class="menu-list-item-link">
					<span class="icon icon-user"></span>
					<span class="menu-txt">我的</span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.main-menu {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 3px 0;
	background: red;
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
			color: white;
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
	}
	.icon-find {
		background-image: url(../assets/imgs/browse_fill.png);
	}
	.icon-list {
		background-image: url(../assets/imgs/label_fill.png);
	}
	.icon-user {
		background-image: url(../assets/imgs/group_fill.png);
	}
}
</style>


