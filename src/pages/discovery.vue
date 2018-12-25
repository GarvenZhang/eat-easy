<template>
	<div class="discovery">
		<HeaderBar to="/" title="发现"/>

		<Container>
			<div class="message-list" v-if="isLogin">
				<router-link
					v-for="(item, index) in messageListData"
					:key="index"
					:to="`/message/${item.messageId}`"
					@click.native="saveMsgDataByCookie(item)"
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
			<div class="tips" v-else>
				<p class="tips-content">本页面为付费内容</p>
				<p class="tips-content">开通会员后可查看全部</p>
				<router-link to="/login?from=discovery" class="vip">开通会员</router-link>
			</div>
		</Container>

		<Menu/>
	</div>
</template>

<script>
import Container from "../components/container";
import MessageItem from "../components/messageItem";
import HeaderBar from "../components/headerBar";
import Menu from "../components/menu";
import cookie from "../lib/cookie.js";

import { getIndexMessageListByType, saveMsgDataByCookie } from "../lib/data.js";

export default {
	components: {
		Container,
		MessageItem,
		HeaderBar,
		Menu
	},
	data() {
		return {
			messageListData: [],
			isLogin: false
		};
	},
	async created() {
		const user = cookie.get("user");

		if (user) {
			this.isLogin = true;
		}

		this.messageListData = await this.getIndexMessageListByType();
	},
	methods: {
		getIndexMessageListByType,
		saveMsgDataByCookie
	}
};
</script>
<style lang="less" scoped>
.discovery {
	.message-list {
		padding: 0 15px;
		margin: 15px 0;
	}
	.tips {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: white;

		.tips-content {
			font-size: 16px;
			margin-bottom: 15px;
		}
		.vip {
			width: 100px;
			padding: 5px 10px;
			color: white;
			background: red;
		}
	}
}
</style>


