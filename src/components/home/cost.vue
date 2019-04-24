<!-- html部分 -->
<template>
	<div id="app">
	  <h1>成本核算信息图</h1>
	  <div style="text-align: left;margin-bottom: 20px;">
		  <span class="demonstration">年</span>
		  		  <el-date-picker
		  			v-model="years"
		  			align="right"
		  			type="year"
		  			placeholder="选择年">
		  		  </el-date-picker>
		  <el-button  @click="search()">查询</el-button>
		 
	  </div>		  
	
	 <el-table :data="list">
	 	<el-table-column prop="devname" label="设备名称" width="80"></el-table-column>
	 	<el-table-column prop="amount" label="作业量" width="120"></el-table-column>
	 	<el-table-column prop="consume" label="能耗" width="120"></el-table-column>
	 	<el-table-column prop="cost" label="成本" width="120"></el-table-column>
	 	<el-table-column label="操作" width="230">
	 	  <template slot-scope="scope">
	 		<el-button size="mini" @click="update(scope.row)">编辑</el-button>
	 		<el-button size="mini" type='danger' @click="del(scope.row.repairid)">删除</el-button>
	 	  </template>
	 	</el-table-column>
	 </el-table>
	
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data:function() {
			return {
			  years:'2018',
			  list:[]
								
			};
		},
		methods:{
			update(row){
				// 跳转
				this.$router.push({name:'costEdit',params:{row:row}})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/devInfo/cost" 
					// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
						this.list=res.data;		
				});
											
			},
		},
		mounted:function() {
			this.search()
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
