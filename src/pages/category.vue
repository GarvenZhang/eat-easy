<template>
	<div class="category">
		<HeaderBar to="/" title="分类"/>

		<div class="category-inner">
			<div class="category-list">
				<router-link :to="`/category/${item.id}`" v-for="(item, index) in categoryData" :key="index">
					<div :class="['category-list-item', categoryId == item.id ? 'active': '']">{{ item.name }}</div>
				</router-link>
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

import TypeList from "../../mock/type.json";

import { getMessageListByType } from "../lib/data.js";

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
			goodsData: [],
			categoryData: TypeList.data
		};
	},
	watch: {
		$route: "getMessageData"
	},
	async created() {
		this.getMessageData();
	},
	methods: {
		getMessageListByType,
		async getMessageData() {
			this.goodsData = await this.getMessageListByType(
				parseInt(this.categoryId)
			);
		}
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
			width: 85px;
			border-right: 1px solid #eee;
			background: white;
			.category-list-item {
				color: #333;
				font-size: 14px;
				line-height: 3;
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
			width: 100%;
			margin-left: 85px;
		}
	}
}
</style>


