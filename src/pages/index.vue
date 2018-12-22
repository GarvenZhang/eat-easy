<template>
	<div class="home">
		<div class="banner"></div>
		<div class="menu"></div>
		<div class="message-list">
			<MessageItem v-for="(item, index) in messageListData" :key="index" :data="item"/>
		</div>
	</div>
</template>

<script>
import MessageItem from "../components/messageItem";
import cookie from '../lib/cookie'

export default {
	data() {
		return {
			messageListData: [
				{
					name: "Calbee北海道黄油蜂蜜厚切薯片",
					desc:
						"这款连张根硕和少女时代都在网上大呼喜爱的蜂蜜黄油口味一直从去年红到现在！它的口味走红，也让不少其它品牌开始模效仿，不过，他们家的口味依然无可取代！\n\n感觉一切东西和蜂蜜、黄油混在一起，都会超好吃！北海道是日本最好的奶源地，这款Calbee（卡乐比）蜂蜜北海道黄油厚切薯片选用北海道产的黄油制成，薯片、黄油、蜂蜜混合，迷之甜咸味道真素超奇妙！\n\n\n\n",
					img_src: ["/images/food/1544975407715.jpg"]
				},
				{
					name: "Calbee北海道黄油蜂蜜厚切薯片",
					desc:
						"这款连张根硕和少女时代都在网上大呼喜爱的蜂蜜黄油口味一直从去年红到现在！它的口味走红，也让不少其它品牌开始模效仿，不过，他们家的口味依然无可取代！\n\n感觉一切东西和蜂蜜、黄油混在一起，都会超好吃！北海道是日本最好的奶源地，这款Calbee（卡乐比）蜂蜜北海道黄油厚切薯片选用北海道产的黄油制成，薯片、黄油、蜂蜜混合，迷之甜咸味道真素超奇妙！\n\n\n\n",
					img_src: ["/images/food/1544975407715.jpg"]
				}
			]
		};
	},
	components: {
		MessageItem
  },
  mounted () {

    // 是否有选择判断
    if (cookie.get('hasChosenType') !== 1) {
      this.$router.push('firstChioce')
    }

  },
	created() {}
};
</script>

