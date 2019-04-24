<template>
	<div id="app">
		<el-input v-model='color' style='width: 130px;'></el-input>
		<el-button @click='fn'>提交</el-button>
	</div>
</template>

<script>
	export default {
		// 数据
		data() {
			return {
				color:''
			};
		},
		// 方法
		methods: {
			fn(){          
				          //commit提交  changecolor方法名 
				this.$store.commit('changecolor',this.color);
			}
		},

	}
</script>

<style>

</style>
