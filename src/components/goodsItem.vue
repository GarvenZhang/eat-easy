<template>
	<div class="goods-item">
		<div class="goods-img-wrapper">
			<img :src="imgSrc" class="goods-img">
		</div>
		<div class="goods-info-wrapper">
			<div class="goods-name">{{ name }}</div>
			<div class="goods-desc">{{ desc }}</div>
			<slot name="opts"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imgSrc: String,
		name: String,
		desc: String
	}
};
</script>

<style lang="less" scoped>
.goods-item {
	display: flex;
	padding: 20px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	background: white;

	.goods-img-wrapper {
		margin-right: 15px;
		width: 70px;
		height: 70px;
		.goods-img {
			display: block;
			width: 70px;
			height: 70px;
			box-shadow: 5px 3px 3px 1px rgba(0, 0, 0, 0.1);
		}
	}

	.goods-info-wrapper {
		flex: 1;
		text-align: left;
		font-size: 13px;
		line-height: 2;
		overflow: hidden;

		.goods-desc {
			max-width: 158px;
			font-size: 12px;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: #333;
			overflow: hidden;
		}
	}
}
</style>
