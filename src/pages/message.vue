<template>
	<div>
		detail - {{name}} - {{id}}
		<router-link to="/">go index</router-link>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		id: String
	}
};
</script>
<style lang="less" scoped>
</style>

