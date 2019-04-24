<template>
	<div>
		<h1 style="text-align: center">流程信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
		<!-- 	<el-input style='width:160px' placeholder='流程ID' v-model='search_compname'></el-input>
			<el-input style='width:160px' placeholder='流程公司名称' v-model='search_industry'></el-input> -->
			
			<el-select v-model="flowid" style='width:25%' placeholder='流程公司名称'>
				<el-option></el-option>
				<el-option v-for="(obj,index) in baseFlow"  :value="obj.flowid" :key="obj.flowname">{{obj.flowname}}</el-option>
			</el-select>
			
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="flowid" label="流程ID" width="80"></el-table-column>
				<el-table-column prop="flowname" label="流程公司名称" width="120"></el-table-column>
				<el-table-column prop="dljid" label="" width="120"></el-table-column>
				<el-table-column prop="zcjid" label="" width="120"></el-table-column>
				<el-table-column prop="pdjid" label="" width="180"></el-table-column>
				<el-table-column prop="compid" label="企业ID" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.flowid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		// 数据
		data() {
			return {
				flowid:'',
				flowname:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				compid:'',
				
// 				search_compname:'',
// 				search_industry:'',
				list:[]
			};
		},
		// 方法
		methods: {
			update(row){
				// 跳转
				this.$router.push({name:'baseFlowEdit',params:{row:row}})
			},
			del(flowid){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/delete"
				// 传递给后端的数据
				var data = {flowid:flowid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
					this.search();
				})
			},
			add(){
				// 路由跳转
				this.$router.push({path:'/baseFlowadd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/search"
				// 传递给后端的数据
				var data = {flowid:this.flowid,flowname:this.flowname
				};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			}
		},
		
		 // 安装
	  mounted:function(){
		
			this.search();
	     }
		
	}
</script>

<style>

</style>
