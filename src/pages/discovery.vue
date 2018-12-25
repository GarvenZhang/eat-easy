<template>
	<div class="discovery">
		<HeaderBar to="/" title="发现"/>

		<Container>
			<div class="message-list">
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
		</Container>

		<Menu/>
	</div>
</template>

<script>
import Container from "../components/container";
import MessageItem from "../components/messageItem";
import HeaderBar from "../components/headerBar";
import Menu from "../components/menu";

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
			messageListData: []
		};
	},
	async created() {
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
}
</style>


