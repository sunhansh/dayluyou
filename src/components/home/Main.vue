<!-- html部分 -->
<template>
	<div id="app">
	<div style="text-align: left;">
		<!-- Tags -->
		<!--close 关闭；结束 -->
   	<el-tag v-for="(tag,index) in $store.state.tags" :key="tag.name" closable :type="tag.type" style='margin-left: 10px;'
   	@click='fn(tag,index)' @close='fn2(tag,index)'>
   	{{tag.name}}
   </el-tag>
		<!-- 动态显示各个子组件 -->
		<router-view/>
	 </div>
  </div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
	
			};
		},
		methods:{
			fn(tag,index){
			  // 路由跳转
			  this.$router.push({path:tag.url});
			  // 改变type
			  this.$store.commit('updateTag',index);
				// 更改defaultIndex
				this.$store.state.defaultIndex = tag.index;
			},
			fn2(tag,index){
			 if(this.$store.state.tags.length==1){
				 this.$message("最后一个了");
				}else{
				// <!-- 删除 -->
							// 关闭的是否是当前type
					var flag = this.$store.state.tags[index].type=='warning';
					// 删除tag
					this.$store.commit('deleteTag',index);
				if(flag){  //判断type='warning'
					if(index==0){			
					// 改变type
					this.$store.commit('updateTag',0);
					 // 路由跳转
					 this.$router.push({path:this.$store.state.tags[0].url});
				 }else{
					 this.$store.commit("updateTag",index-1);
				     this.$router.push({path:this.$store.state.tags[index-1].url});
					}	
			    }
			  }
		   }		
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
