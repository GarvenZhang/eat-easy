<template>
	<div class="category">
		<HeaderBar to="/" title="分类"/>

		<div class="category-inner">
			<div class="category-list">
				<div
					v-for="(item, index) in categoryData"
					:key="index"
					:class="['category-list-item', categoryId == item.id ? 'active': '']"
				>{{ item.name }}</div>
			</div>
			<div class="goods-list">
				<router-link :to="`/message/${item.goodsId}`" v-for="(item, index) in goodsData" :key="index">
					<GoodsItem :name="item.goodsName" :imgSrc="item.goodsImgSrc" :desc="item.goodsDesc"/>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import GoodsItem from "../components/goodsItem";
import HeaderBar from "../components/headerBar";
import Menu from "../components/menu";

export default {
	components: {
		GoodsItem,
		HeaderBar,
		Menu
	},
	computed: {
		categoryId() {
			return this.$route.params.id;
		}
	},
	data() {
		return {
			goodsData: [
				{
					goodsId: 1,
					goodsName: "Calbee北海道黄油蜂蜜厚切薯片",
					goodsDesc:
						"这款连张根硕和少女时代都在网上大呼喜爱的蜂蜜黄油口味一直从去年红到现在！它的口味走红，也让不少其它品牌开始模效仿，不过，他们家的口味依然无可取代！\n\n感觉一切东西和蜂蜜、黄油混在一起，都会超好吃！北海道是日本最好的奶源地，这款Calbee（卡乐比）蜂蜜北海道黄油厚切薯片选用北海道产的黄油制成，薯片、黄油、蜂蜜混合，迷之甜咸味道真素超奇妙！\n\n\n\n",
					goodsImgSrc: "/images/food/1544975407715.jpg"
				},
				{
					goodsId: 2,
					goodsName: "Calbee北海道黄油蜂蜜厚切薯片",
					goodsDesc:
						"这款连张根硕和少女时代都在网上大呼喜爱的蜂蜜黄油口味一直从去年红到现在！它的口味走红，也让不少其它品牌开始模效仿，不过，他们家的口味依然无可取代！\n\n感觉一切东西和蜂蜜、黄油混在一起，都会超好吃！北海道是日本最好的奶源地，这款Calbee（卡乐比）蜂蜜北海道黄油厚切薯片选用北海道产的黄油制成，薯片、黄油、蜂蜜混合，迷之甜咸味道真素超奇妙！\n\n\n\n",
					goodsImgSrc: "/images/food/1544975407715.jpg"
				}
			],
			categoryData: [
				{
					id: 1,
					name: "aa"
				},
				{
					id: 2,
					name: "aa"
				},
				{
					id: 3,
					name: "aa"
				}
			]
		};
	}
};
</script>
<style lang="less" scoped>
.category {
	.category-inner {
		display: flex;
		width: 100%;
		margin-top: 40px;

		.category-list {
			position: fixed;
			top: 40px;
			left: 0;
			bottom: 0;
			width: 100px;
			border-right: 1px solid #eee;
			background: white;
			.category-list-item {
				color: #333;
				font-size: 14px;
				line-height: 2;
				border-bottom: 1px solid #eee;
				&.active {
					color: red;
				}
			}
			.category-list-item:last-of-type {
				border: none;
			}
		}

		.goods-list {
			margin-left: 100px;
		}
	}
}
</style>


