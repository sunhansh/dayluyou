<template>
	<div style='text-align: center;'>
	  <h1>修改报岗信息</h1>
			<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入船队名称' v-model='shipname'></el-input> </el-col>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入装载量(吨)' v-model='capacity'></el-input> </el-col>
			  <el-col :span="12"> <span></span> </el-col>
			</el-row>
			<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入预计到港时间' v-model='planjobtime'></el-input> </el-col>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入实际到港时间' v-model='startjobtime'></el-input> </el-col>
			</el-row>
		 <el-row>
		     <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入完成时间' v-model='completetime'></el-input> </el-col>
		     <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入流程' v-model='flowid'></el-input> </el-col>
		</el-row>
		 <el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报岗人' v-model='reportuser'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入所属企业' v-model='compid'></el-input> </el-col>
		</el-row>
		    <el-row style='margin-top: 20px;text-align: center;'>
		    <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		// 数据
		data() {
			return {
			reportid:'',
			shipname:'',
			capacity:'',
			planjobtime:'',
			startjobtime:'',
			completetime:'',
			flowid:'',
			reportuser:'',
			compid:''
			};
		},
		// 方法
		methods: {
			 saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/update"
				// 传递给后端的数据
				var data = {reportid:this.reportid,shipname:this.shipname,
				capacity:this.capacity,planjobtime:this.planjobtime,
				startjobtime:this.startjobtime,completetime:this.completetime,
				flowid:this.flowid,reportuser:this.reportuser,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/produceReport'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		
		 // 安装
	  mounted:function(){
			// 接收路由传递的数据
			var row = this.$route.params.row;
			// 回显
			this.reportid = row.reportid;
			this.shipname = row.shipname;
			this.capacity = row.capacity;
			this.planjobtime = row.planjobtime;
			this.startjobtime = row.startjobtime;
			this.completetime = row.startjobtime;
			this.flowid = row.flowid;
			this.reportuser = row.reportuser;
			this.compid = row.compid;
		
	     }
		
	}
</script>

<style>

</style>
