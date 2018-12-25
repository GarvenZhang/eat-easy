<template>
	<div class="footer">
		<ul class="action-list">
			<li class="action-item star">
				<i class="icon"></i>
				<span class="num">{{num}}</span>
			</li>
			<li class="action-item share">
				<i class="icon"></i>
				<span class="txt-share">分享</span>
			</li>
			<li class="action-item comment">
				<i class="icon"></i>
				<span class="num">{{commentNum}}</span>
			</li>
		</ul>
		<div class="navagate-wrap">
			<a class="link" href="#" target="_blank">直达链接</a>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			num: 3,
			commentNum: 10
		};
	}
};
</script>

<style scoped>
.footer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 8px 0;
	background-color: #fff;
}
.action-list {
	float: left;
	padding-left: 20px;
	clear: both;
}
.action-list::after {
	content: "";
	display: table;
}
.action-item {
	display: inline-block;
	float: left;
	width: 40px;
	line-height: 1;
}
.action-item .icon {
	display: inline-block;
	width: 26px;
	height: 26px;
	margin: 0 7px;
	background-size: contain;
}
.action-item.star .icon {
	background-image: url(../assets/imgs/like_fill.png);
}
.action-item.share .icon {
	background-image: url(../assets/imgs/share_fill.png);
}
.action-item.comment .icon {
	background-image: url(../assets/imgs/message_fill.png);
}
.navagate-wrap {
	float: right;
	margin-top: 5px;
	margin-right: 10px;
}
.navagate-wrap .link {
	width: 100px;
	height: 30px;
	font: 400 16px/30px "serf";
	color: #ffffffe0;
	padding: 3px 10px;
	border: #ccc 1px inset;
	border-radius: 5px;
	background-color: #bd0a0a;
}
</style>


