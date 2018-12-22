<template>
	<div class="message">
		<router-link to="/">
			<div class="back">返回</div>
		</router-link>

		<div class="message-inner">
			<div class="message-detail">
				<div class="message-image-wrapper">
					<img class="message-image" :src="msgData.goods.goodsImgSrc">
				</div>
				<div class="message-content">
					<h1 class="message-name">{{ msgData.goods.goodsName }}</h1>
					<p class="message-desc">{{ msgData.goods.goodsDesc }}</p>
				</div>
			</div>

			<div class="comment">
				<h2 class="comment-ti">相关评论</h2>
				<div class="comment-item" v-for="(item, index) in commentData" :key="index">
					<div class="comment-user-logo-wrapper">
						<img :src="item.userLogoSrc" class="comment-user-logo">
					</div>
					<div class="comment-content-wrapper">
						<div class="comment-username">{{ item.username }}</div>
						<div class="comment-content">{{ item.commentContent }}</div>
						<div class="comment-opts">
							<span class="comment-time">{{ dateFormat('yyyy/MM/dd hh:mm', new Date(item.commentTime)) }}</span>
							<span class="comment-praise"></span>
						</div>

						<div class="apply">
							<div class="apply-item" v-for="(r, index) in item.reply" :key="index">
								<span class="apply-name">{{ r.username }}：</span>
								<span class="apply-content">{{ r.replyContent }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="recommend">
				<h2 class="recommend-ti">推荐商品</h2>
				<div class="recommend-item" v-for="(item, index) in recommendData" :key="index">
					<div class="recommend-img-wrapper">
						<img :src="item.goodsImgSrc" class="goods-img">
					</div>
					<div class="recommend-content">
						<div class="recommend-name">{{ item.goodsName }}</div>
						<div class="recommend-price">{{ item.goodsPrice }}包邮</div>
						<div class="recommend-opts">
							<button class="btn" type="button">加入清单</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import dateFormat from "date-format";

export default {
	data() {
		return {
			msgData: {
				goods: {
					goodsName: "Calbee北海道黄油蜂蜜厚切薯片",
					goodsDesc:
						"这款连张根硕和少女时代都在网上大呼喜爱的蜂蜜黄油口味一直从去年红到现在！它的口味走红，也让不少其它品牌开始模效仿，不过，他们家的口味依然无可取代！\n\n感觉一切东西和蜂蜜、黄油混在一起，都会超好吃！北海道是日本最好的奶源地，这款Calbee（卡乐比）蜂蜜北海道黄油厚切薯片选用北海道产的黄油制成，薯片、黄油、蜂蜜混合，迷之甜咸味道真素超奇妙！\n\n\n\n",
					goodsImgSrc: "/images/food/1544975407715.jpg"
				},
				user: {
					username: "小明",
					userLogoSrc: "/src/assets/imgs/userLogo.jpg"
				}
			},
			commentData: [
				{
					commentId: 1,
					username: "小米姑娘",
					userLogoSrc: "/src/assets/imgs/userLogo.jpg",
					commentTime: 1545486230449,
					commentContent: "哥哥哥哥哥哥",
					reply: [
						{
							replyId: 1,
							username: "小米姑娘",
							replyContent: "哥哥哥哥哥哥"
						}
					]
				}
			],
			recommendData: [
				{
					goodsId: 1,
					goodsName: "Calbee北海道黄油蜂蜜厚切薯片",
					goodsPrice: 188,
					goodsImgSrc: "/images/food/1544975407715.jpg"
				}
			]
		};
	},
	methods: {
		dateFormat
	}
};
</script>
<style lang="less" scoped>
.message {
	background: white;
	.message-inner {
		padding: 0 15px;
	}
	.message-image-wrapper,
	.message-image {
		display: block;
		width: 100%;
		height: 150px;
	}
	.message-image {
		padding: 10px;
	}

	.message-content {
		font-size: 14px;
		border-top: 1px solid #f5f5f5;
		background: white;
		.message-name {
			font-size: 18px;
			font-weight: 400;
			text-align: left;
			margin: 6px 0;
		}
		.message-desc {
			text-align: left;
			line-height: 2;
			color: #333;
		}
	}
}

.comment-ti,
.recommend-ti {
	text-align: left;
	font-size: 15px;
	font-weight: 400;
	line-height: 2;
}

.comment {
	border-top: 1px solid #f5f5f5;
	margin-bottom: 10px;
	.comment-item {
		display: flex;
		justify-content: space-between;
		padding: 10px 0;
		border-bottom: 1px solid #f5f5f5;

		.comment-user-logo-wrapper {
			margin-left: 20px;
			margin-right: 10px;
			.comment-user-logo {
				width: 36px;
				height: 36px;
				border: 1px solid #ccc;
				border-radius: 50%;
			}
		}

		.comment-content-wrapper {
			flex: 1;
			text-align: left;
			.comment-content {
				color: rgb(115, 110, 110);
			}
			.comment-opts {
				display: flex;
				justify-content: space-between;
				color: rgba(170, 170, 170, 0.83);

				.comment-praise {
					display: inline-block;
					width: 20px;
					height: 20px;
					background: url(../assets/imgs/praise_fill.png) no-repeat center;
					background-size: contain;
				}
			}
		}
	}
}

.apply {
	margin-top: 5px;
	padding: 0 10px;
	background: rgba(170, 170, 170, 0.63);
	.apply-item {
		padding: 5px 0;
		border-bottom: 1px solid #f5f5f5;
		.apply-name {
			color: rgb(63, 81, 181);
		}
		.apply-content {
			color: rgb(16, 16, 16);
		}
	}
	.apply-item:last-of-type {
		border-bottom: none;
	}
}

.recommend {
	.recommend-item {
		display: flex;
		padding-bottom: 15px;

		.recommend-img-wrapper {
			width: 60px;
			max-height: 100px;
			margin-right: 10px;
			border: 1px solid #f5f5f5;
			.goods-img {
				display: block;
				padding: 5px;
				width: 100%;
			}
		}

		.recommend-content {
			flex: 1;
			text-align: left;
			.recommend-name,
			.recommend-price {
				font-size: 14px;
				line-height: 1.5;
			}
			.recommend-price {
				color: red;
			}

			.recommend-opts {
				display: flex;
				justify-content: flex-end;
				margin-top: 4px;

				.btn {
					padding: 3px 10px;
					text-align: center;
					color: white;
					border: none;
					border-radius: 5px;
					background: dodgerblue;
				}
			}
		}
	}
}

.back {
	text-align: left;
	font-size: 14px;
	padding: 10px;
	color: white;
	background: red;
}
</style>

