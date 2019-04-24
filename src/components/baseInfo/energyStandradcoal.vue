<template>
	<div id="app">
		<h1 style="text-align: left; font-size: 30px;">折标煤系数</h1>
		<hr/>
		<div class="asa">						
			<el-input v-model="search_compname" placeholder="能源类别" style="width: 160px;"></el-input>
			<!-- <el-input v-model="search_industry" placeholder="请输入行业"style="width: 160px;"></el-input> -->
			<el-button  @click="search()">查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>
		
		 <center>
			<el-table :data="list">
				<el-table-column prop="sid" label="ID" width="80"></el-table-column>
				<el-table-column prop="energetype" label="能源类别" width="80"></el-table-column>
				<el-table-column prop="ratio" label="系数" width="120"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.sid)">删除</el-button>
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
				search_compname:'',
				list:[]
			};
		},
		// 方法
		methods: {
		update(row){
				// 跳转
				this.$router.push({name:'energyStandradcoalEdit',params:{row:row}})
			},
			del(sid){
				// 后端网址
				var url = this.baseUrl+"/energyStandradcoal/delete"
				// 传递给后端的数据
				var data = {sid:sid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应 回复信息
					this.$message("删除成功");
					this.search();
				})
			},
			add(){
				// 路由跳转
				this.$router.push({path:'/energyStandradcoalAdd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/energyStandradcoal/search"
				// 传递给后端的数据
				var data = {energetype:this.search_compname};
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
