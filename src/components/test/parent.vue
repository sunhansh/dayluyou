<template>
	<div id="app">
		<h1>父组件</h1>
		<child1></child1>
		<child2></child2>
	</div>
</template>

<script>
	import child1 from './child1'
	import child2 from './child2'
	
	export default {
		name:'',
		components:{child1,child2},
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
