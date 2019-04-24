<!-- html部分 -->
<template>
	<div id="app">
	  <h1>设备利用率对比图</h1>
	  <div style="text-align: left;margin-bottom: 20px;">
		  <span class="demonstration">年</span>
		  		  <el-date-picker
		  			v-model="years"
		  			align="right"
		  			type="year"
		  			placeholder="选择年">
		  		  </el-date-picker>
		  <el-button  @click="search()">查询</el-button>
		  <ve-line :data="chartData"></ve-line>
	  </div>		  
	
	<!--  <el-table :data="list">
	  	<el-table-column prop="flowid" label="流程ID" width="80"></el-table-column>
	  	<el-table-column prop="compname" label="流程公司名称" width="120"></el-table-column>
	  	<el-table-column prop="devType" label="开发类型" width="120"></el-table-column>
	  	<el-table-column prop="ratio" label="比率" width="120"></el-table-column>
	  	<el-table-column label="操作" width="230">
	  	  <template slot-scope="scope">
	  		<el-button size="mini" @click="update(scope.row)">编辑</el-button>
	  		<el-button size="mini" type='danger' @click="del(scope.row.flowid)">删除</el-button>
	  	  </template>
	  	</el-table-column>
	  </el-table> -->
	
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data:function() {
			return {
			  years:'2018',
			  chartData: {					
				    columns:[],
					rows:[]
				},
								
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/devInfo/usage" 
					// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
						this.chartData=res.data;		
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
