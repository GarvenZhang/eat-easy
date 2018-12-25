<template>
	<div class="home">
		<div class="banner">
			<mt-swipe :auto="3000">
				<mt-swipe-item>
					<img src="../assets/imgs/banner-01.jpg" class="banner-img">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/imgs/banner-02.jpg" class="banner-img">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/imgs/banner-03.jpg" class="banner-img">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<nav class="menu">
			<ul class="menu-list">
				<li class="menu-list-item">
					<router-link to="/">
						<div class="menu-list-item-link">
							<span class="icon icon-sign"></span>
							<span class="menu-txt">签到</span>
						</div>
					</router-link>
				</li>
				<li class="menu-list-item">
					<router-link to="/">
						<div class="menu-list-item-link">
							<span class="icon icon-recommend"></span>
							<span class="menu-txt">每周推荐</span>
						</div>
					</router-link>
				</li>
				<li class="menu-list-item">
					<router-link to="/category/1">
						<div class="menu-list-item-link">
							<span class="icon icon-type"></span>
							<span class="menu-txt">分类</span>
						</div>
					</router-link>
				</li>
			</ul>
		</nav>
		<Container class="container-index">
			<div class="message-list">
				<router-link
					v-for="(item, index) in messageListData"
					:key="index"
					:to="`/message/${item.messageId}`"
					@click.native="saveMsgDataByCookie(item)"
				>
					<MessageItem
						:imgSrc="item.goods.goodsImgSrc"
						:userLogoSrc="item.user.userLogoSrc"
						:desc="item.goods.goodsDesc"
						:username="item.user.username"
						:commentNum="item.commentNum"
						:praiseNum="item.praiseNum"
					/>
				</router-link>
			</div>
		</Container>
		<Menu/>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import Container from "../components/container";
import MessageItem from "../components/messageItem";
import cookie from "../lib/cookie";
import Menu from "../components/menu";

import { getIndexMessageListByType, saveMsgDataByCookie } from "../lib/data.js";

export default {
	components: {
		Swipe,
		SwipeItem,
		MessageItem,
		Menu,
		Container
	},
	data() {
		return {
			messageListData: []
		};
	},
	async created() {
		this.messageListData = await this.getIndexMessageListByType();
	},
	mounted() {
		// 是否有选择判断
		if (!cookie.get("hasChosenType")) {
			this.$router.push("firstChioce");
		}
	},
	methods: {
		getIndexMessageListByType,
		saveMsgDataByCookie
	}
};
</script>
<style lang="less" scoped>
.home {
	.banner {
		width: 100%;
		height: 150px;
		.banner-img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.container-index {
		top: 212px;
	}
	.menu {
		padding: 3px 0;
		.menu-list {
			display: flex;
			justify-content: center;
			padding: 5px 0;

			background: white;

			.menu-list-item {
				margin-right: 40px;
			}
			.menu-list-item-link {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.menu-list-item:last-of-type {
				margin-right: 0;
			}

			.menu-txt {
				color: #d81e06;
			}
		}
	}
	.message-list {
		padding: 0 15px;
		margin: 15px 0;
	}

	.icon {
		display: inline-block;
		width: 28px;
		height: 28px;
		margin-bottom: 5px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.icon-sign {
		background-image: url(../assets/imgs/sign.png);
	}
	.icon-recommend {
		background-image: url(../assets/imgs/order.png);
	}
	.icon-type {
		background-image: url(../assets/imgs/other.png);
	}
}
</style>


