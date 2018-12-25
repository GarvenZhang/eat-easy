<template>
	<div class="message-item">
		<div class="message-item-inner">
			<img class="message-img" :src="imgSrc">
			<p class="message-desc">{{ desc }}</p>
			<div class="message-item-info">
				<div class="message-user-wrapper">
					<img class="user-logo" :src="userLogoSrc">
					<span class="username">{{ username }}</span>
				</div>
				<div class="message-assignment-wrapper">
					<div class="assinment">
						<span class="icon icon-assignment"></span>
						<div>{{ commentNum }}</div>
					</div>
					<div class="praise">
						<span class="icon icon-praise"></span>
						<div>{{ praiseNum }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imgSrc: String,
		userLogoSrc: String,
		desc: String,
		username: String,
		commentNum: Number,
		praiseNum: Number
	}
};
</script>

<style lang="less" scoped>
.message-item {
	border: 1px solid #f5f5f5;
	margin-bottom: 15px;
	background-color: white;
	box-shadow: 4px 3px 3px 1px rgba(0, 0, 0, 0.1);
	border-radius: 3px;

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
			margin: 10px 0;
			font-size: 14px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			color: #333;
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

			.icon {
				display: inline-block;
				width: 20px;
				height: 20px;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
			}
			.icon-assignment {
				background-image: url(../assets/imgs/message_fill.png);
			}
			.icon-praise {
				background-image: url(../assets/imgs/praise_fill.png);
			}
		}
	}
}
</style>
