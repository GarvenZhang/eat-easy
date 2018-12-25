<template>
	<div class="circle-wrap" @click="clickHandle">{{name}}</div>
</template>

<script>
export default {
	props: {
		name: String
	},
	methods: {
		clickHandle() {
			this.$emit("onClick");
		}
	}
};
</script>

<style scoped>
.circle-wrap {
	width: 80px;
	height: 80px;
	font: 400 14px/80px "serif";
	text-align: center;
	border: 2px solid #ccc;
	border-radius: 50%;
	box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.1);
}
.active {
	color: white;
	border-color: #ff5722;
	background-color: #f15858;
	box-shadow: 6px 1px 5px 3px #fb6969b0;
}
</style>


