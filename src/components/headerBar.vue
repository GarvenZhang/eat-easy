<template>
	<mt-header :title="title" :fixed="true" class="header">
		<router-link :to="to" slot="left">
			<mt-button icon="back">返回</mt-button>
		</router-link>
	</mt-header>
</template>

<script>
import { Header } from "mint-ui";
export default {
	props: {
		title: String,
		to: String
	}
};
</script>

<style scoped>
.header {
	background: red;
}
</style>
