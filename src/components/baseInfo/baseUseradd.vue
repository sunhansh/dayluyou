<template>
	<div style='text-align: center;'>
		<h1>添加人员信息</h1>
		<el-input style='width: 180px;' v-model='cname' placeholder="请输入姓名"></el-input>
		<el-input style='width: 180px;' v-model='username' placeholder="请输入用户名"></el-input><br />
		<el-input style='width: 180px;' v-model='password' placeholder="请输入密码"></el-input>
		<el-input style='width: 180px;' v-model='telno' placeholder="请输入手机号"></el-input><br />
		<el-input style='width: 180px;' v-model='email' placeholder="请输入邮箱"></el-input>
		<el-input style='width: 180px;' v-model='sex' placeholder="请输入性别"></el-input><br />
		<el-select v-model="compid" placeholder="请选择">
			<el-option v-for="item in options" :key='item.compid' :label="item.compname" :value="item.compid">
			</el-option>
		</el-select>

		<el-button @click='saveAdd'>添加</el-button>
		<el-button @click='cancel'>返回</el-button>

	</div>
</template>

<script>
	export default {
		name: '',
		// 数据
		data() {
			return {
				options: [],
				compid: '',

				userid: '',
				cname: '',
				username: '',
				password: '',
				telno: '',
				email: '',
				sex: ''
			};
		},
		// 方法
		methods: {
			saveAdd() {
				// 后端网址
				var url = this.baseUrl + "/baseUser/insert"
				// 传递给后端的数据
				var data = {
					compid: this.compid,
					userid: this.userid,
					cname: this.cname,
					username: this.username,
					password: this.password,
					telno: this.telno,
					email: this.email,
					sex: this.sex
				};
				this.$axios.post(url, this.$qs.stringify(data), {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res => {
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({
						path: '/baseUser'
					});
				})
			},
			cancel() {
				this.$router.go(-1);
			}
		},
		mounted: function() {
			// 后端网址
			var url = this.baseUrl + "/baseCompany/list"
			this.$axios.post(url, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res => {
				this.options = res.data;
			})
		}

	}
</script>

<style>

</style>
