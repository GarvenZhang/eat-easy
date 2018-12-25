<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
	position: fixed;
	top: 40px;
	left: 0;
	right: 0;
	bottom: 58px;
	overflow: scroll;
}
</style>
