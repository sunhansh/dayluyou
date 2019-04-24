<template>
	<div>
		<div id="tt" :style="{background:$store.state.color}"></div>
	</div>
</template>

<script>
	export default {
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
#tt{
	width: 300px;
	height: 300px;
	border: solid 1px;
	margin: 0 auto;
}
</style>
