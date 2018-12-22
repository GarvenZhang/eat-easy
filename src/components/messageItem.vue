<template>
	<div class="message-item">
		<div class="message-item-inner">
			<img class="message-img" :src="data.img_src">
			<p class="message-desc">{{ data.desc }}</p>
			<div class="message-item-info">
				<div class="message-user-wrapper">
					<img class="user-logo">
					<span class="username">{{ data.username }}</span>
				</div>
				<div class="message-assignment-wrapper">
					<div class="assinment">
						<span class="icon icon-assignment"></span>
						<div>{{ data.assignmentNum }}</div>
					</div>
					<div class="praise">
						<span class="icon icon-praise"></span>
						<div>{{ data.praiseNum }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: {
				img_src: "",
				desc: "",
				username: "",
				assignmentNum: 0,
				praiseNum: 0
			}
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
	margin-bottom: 10px;
	background-color: white;

	.message-item-inner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;

		.message-img {
			width: 100%;
			height: 124px;
		}

		.message-desc {
			align-self: flex-start;
			width: 90%;
			margin: 5px 0;
			font-size: 14px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		.message-item-info {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.message-user-wrapper {
				display: flex;
				align-items: center;
				.user-logo {
					display: block;
					width: 30px;
					height: 30px;
					border: 1px solid #eee;
					border-radius: 50%;
					margin-right: 10px;
				}
			}
			.message-assignment-wrapper,
			.assinment,
			.praise {
				display: flex;
				align-items: center;
			}

			.assinment {
				margin-right: 20px;
			}

			.icon-assignment {
				width: 19px;
				height: 19px;
			}
			.icon-praise {
				width: 16px;
				height: 19px;
			}
		}
	}
}
</style>
