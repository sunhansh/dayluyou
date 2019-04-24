<template>
	<div id="app">
		<h1>这是父组件</h1>
		<color1></color1>
		<color2></color2>
	</div>
</template>

<script>
	import color1 from './color1'
	import color2 from './color2'
	export default {
		name:'',
		components:{color1,color2},
		// 数据
		data() {
			return {
				
			};
		},
		// 方法
		methods: {
			
		},
		
		 // 安装
	  mounted:function(){
			
	     }
		
	}
</script>

<style>

</style>
