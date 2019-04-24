<template>
	<div id="app">
		<h2>子组件2</h2>
		<el-button @click='fn'>打印</el-button>
	</div>
</template>

<script>
	export default {
		name:'',
		// 数据
		data() {
			return {
				
			};
		},
		// 方法
		methods: {
			fn(){
				console.log(this.$store.state.v1)
				console.log(this.$store.state.v2)
			}
		},

	}
</script>

<style>

</style>
