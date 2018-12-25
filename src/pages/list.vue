<template>
	<div class="list">
		<HeaderBar to="/" title="清单"/>
		<Container>
			<div class="goods-list">
				<GoodsItem
					v-for="(item, index) in goodsData"
					:key="index"
					:name="item.goodsName"
					:imgSrc="item.goodsImgSrc"
					:desc="item.goodsDesc"
				>
					<div class="goods-opts" slot="opts">
						<button class="btn">去购买&gt;&gt;&gt;</button>
					</div>
				</GoodsItem>
			</div>
		</Container>
		<Menu/>
	</div>
</template>

<script>
import Container from "../components/container";
import GoodsItem from "../components/goodsItem";
import HeaderBar from "../components/headerBar";
import Menu from "../components/menu";
import { getGoodsDataById } from "../lib/data.js";

export default {
	components: {
		Container,
		GoodsItem,
		HeaderBar,
		Menu
	},
	data() {
		return {
			goodsData: []
		};
	},
	async created() {
		this.goodsData = await this.getGoodsDataById(1, 7);
	},
	methods: {
		getGoodsDataById
	}
};
</script>
<style lang="less" scoped>
.list {
	.goods-list {
	}
	.goods-opts {
		display: flex;
		justify-content: flex-end;
		margin-top: 10px;
	}
	.btn {
		font-size: 12px;
		padding: 3px 8px;
		color: white;
		border: none;
		border-radius: 3px;
		background: #d81e06;
	}
}
</style>


