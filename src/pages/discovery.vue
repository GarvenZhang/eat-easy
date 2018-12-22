<template>
	<div class="discovery">
		<HeaderBar to="/" title="发现"/>

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
import MessageItem from "../components/messageItem";
import HeaderBar from "../components/headerBar";
import Menu from "../components/menu";

export default {
	components: {
		MessageItem,
		HeaderBar,
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
	}
};
</script>
<style lang="less" scoped>
.discovery {
	.message-list {
		margin-top: 40px;
	}
}
</style>


