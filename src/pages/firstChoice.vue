<template>
	<div class="first-choice-page">
		<Header class="header"></Header>
		<div class="main">
			<div class="hd">
				<span @click="skepHandle()">跳过 &gt;&gt;</span>
			</div>
			<div class="bd">
				<CCircle
					v-for="(item, index) in typeList.data"
					:key="index"
					:name="item.name"
					:class="item.isActive ? 'active' : ''"
					@onClick="activeHandle(item)"
				/>
			</div>
			<div class="ft">
				<button type="button" class="btn-enter" @click="clickHandle()">确定进入</button>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "../components/header";
import CCircle from "../components/circle";
import typeList from "../../mock/type";
import cookie from "../lib/cookie";

const MAXAGE = 1000 * 60 * 24 * 7;

export default {
	data() {
		return {
			typeList
		};
	},
	components: {
		Header,
		CCircle
	},
	methods: {
		activeHandle(item) {
			item.isActive = !item.isActive;
		},
		getActiveTypes() {
			const typeList = this.typeList.data;

			return typeList.reduce((acc, item, i, arr) => {
				if (item.isActive) {
					if (acc === "") {
						return item.id;
					} else {
						return acc + `,${item.id}`;
					}
				} else {
					return acc;
				}
			}, "");
		},
		skepHandle() {
			cookie.set("hasChosenType", 2, { maxAge: MAXAGE });
			this.$router.push("/");
		},
		clickHandle(name) {
			const data = this.getActiveTypes();

			if (data) {
				// 种cookie
				cookie.set("firstChoiceType", this.getActiveTypes(), {
					maxAge: MAXAGE
				});
				cookie.set("hasChosenType", 1, { maxAge: MAXAGE });
				// 跳转
				this.$router.push("/");
			} else {
				alert("请选择你喜欢的食物种类");
			}
		}
	}
};
</script>

<style scoped>
.first-choice-page {
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #fff;
}

.main {
	flex: 1;
	display: flex;
	flex-direction: column;
}
.main .hd,
.main .ft {
	height: 70px;
}
.main .hd {
	font-size: 14px;
	text-align: right;
	margin-right: 10px;
	margin-top: 5px;
	font-weight: bold;
}
.main .bd {
	flex: 1;
	position: relative;
}
.main .circle-wrap {
	position: absolute;
}
.main .circle-wrap:nth-of-type(1) {
	top: 10%;
	left: 13%;
}
.main .circle-wrap:nth-of-type(2) {
	top: 10%;
	right: 13%;
}
.main .circle-wrap:nth-of-type(3) {
	top: 30%;
	right: 41%;
}
.main .circle-wrap:nth-of-type(4) {
	bottom: 30%;
	left: 13%;
}
.main .circle-wrap:nth-of-type(5) {
	bottom: 30%;
	right: 13%;
}
.main .btn-enter {
	padding: 8px 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: transparent;
}
.main .btn-enter:active {
	color: white;
	background-color: #ef5353;
	border-color: #ef5353;
}
</style>


