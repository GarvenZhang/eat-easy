<template>
	<div class="message-item">
		<div class="message-item-inner">
			<img class="message-img" :src="data.img_src[0]">
			<p class="message-desc">{{ data.desc }}</p>
			<div class="message-item-info">
				<div class="message-user-wrapper"></div>
				<div class="message-assignment-wrapper"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: {}
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="less" scoped>
.message-item {
	border: 1px solid #f5f5f5;

	.message-item-inner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 5px;

		.message-img {
			width: 100%;
			height: 124px;
		}

		.message-desc {
			width: 90%;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
	}
}
</style>
