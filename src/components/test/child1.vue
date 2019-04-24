<template>
	<div id="app">
		<h2>子组件1</h2>
		<el-input v-model='$store.state.v1' style='width: 150px;'></el-input>
		<el-input v-model='$store.state.v2' style='width: 150px;'></el-input>
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
			
		},
		
	}
</script>

<style>

</style>
