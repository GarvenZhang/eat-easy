<template>
	<div class="home">
		<div class="banner">
			<mt-swipe :auto="4000">
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
		<div class="message-list">
			<router-link
				v-for="(item, index) in messageListData"
				:key="index"
				:to="`/message/${item.messageId}`"
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
		<Menu/>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import MessageItem from "../components/messageItem";
import cookie from "../lib/cookie";
import Menu from "../components/menu";

export default {
	components: {
		Swipe,
		SwipeItem,
		MessageItem,
		Menu
	},
	data() {
		return {
			messageListData: [
				{
					messageId: 1,
					goods: {
						goodsName: "Calbee北海道黄油蜂蜜厚切薯片",
						goodsDesc:
							"这款连张根硕和少女时代都在网上大呼喜爱的蜂蜜黄油口味一直从去年红到现在！它的口味走红，也让不少其它品牌开始模效仿，不过，他们家的口味依然无可取代！\n\n感觉一切东西和蜂蜜、黄油混在一起，都会超好吃！北海道是日本最好的奶源地，这款Calbee（卡乐比）蜂蜜北海道黄油厚切薯片选用北海道产的黄油制成，薯片、黄油、蜂蜜混合，迷之甜咸味道真素超奇妙！\n\n\n\n",
						goodsImgSrc: "/images/food/1544975407715.jpg"
					},
					user: {
						username: "小明",
						userLogoSrc: "/src/assets/imgs/userLogo.jpg"
					},
					praiseNum: 80,
					commentNum: 50
				},
				{
					messageId: 2,
					goods: {
						goodsName: "Calbee北海道黄油蜂蜜厚切薯片",
						goodsDesc:
							"这款连张根硕和少女时代都在网上大呼喜爱的蜂蜜黄油口味一直从去年红到现在！它的口味走红，也让不少其它品牌开始模效仿，不过，他们家的口味依然无可取代！\n\n感觉一切东西和蜂蜜、黄油混在一起，都会超好吃！北海道是日本最好的奶源地，这款Calbee（卡乐比）蜂蜜北海道黄油厚切薯片选用北海道产的黄油制成，薯片、黄油、蜂蜜混合，迷之甜咸味道真素超奇妙！\n\n\n\n",
						goodsImgSrc: "/images/food/1544975407715.jpg"
					},
					user: {
						username: "小明",
						userLogoSrc: "/src/assets/imgs/userLogo.jpg"
					},
					praiseNum: 80,
					commentNum: 50
				},
				{
					messageId: 3,
					goods: {
						goodsName: "Calbee北海道黄油蜂蜜厚切薯片",
						goodsDesc:
							"这款连张根硕和少女时代都在网上大呼喜爱的蜂蜜黄油口味一直从去年红到现在！它的口味走红，也让不少其它品牌开始模效仿，不过，他们家的口味依然无可取代！\n\n感觉一切东西和蜂蜜、黄油混在一起，都会超好吃！北海道是日本最好的奶源地，这款Calbee（卡乐比）蜂蜜北海道黄油厚切薯片选用北海道产的黄油制成，薯片、黄油、蜂蜜混合，迷之甜咸味道真素超奇妙！\n\n\n\n",
						goodsImgSrc: "/images/food/1544975407715.jpg"
					},
					user: {
						username: "小明",
						userLogoSrc: "/src/assets/imgs/userLogo.jpg"
					},
					praiseNum: 80,
					commentNum: 50
				}
			]
		};
	},
  mounted () {

    // 是否有选择判断
    if (!cookie.get('hasChosenType')) {
      this.$router.push('firstChioce')
    }

  },
	created() {}
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
	.menu {
		padding: 3px 0;
		.menu-list {
			display: flex;
			justify-content: center;
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
		}
	}
	.message-list {
		padding: 0 10px;
		max-height: 360px;
		overflow: scroll;
		margin: 15px 0;
	}

	.icon {
		display: inline-block;
		width: 32px;
		height: 32px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.icon-recommend {
		background-image: url(../assets/imgs/order.png);
	}
	.icon-type {
		background-image: url(../assets/imgs/other.png);
	}
}
</style>


