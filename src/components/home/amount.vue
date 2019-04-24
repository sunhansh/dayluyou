<!-- html部分 -->
<template>
	<div id="app">
		<h1>港口间作业量对比图</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			<span class="demonstration">年</span>
			<el-date-picker v-model="years" align="right" type="year" placeholder="选择年">
			</el-date-picker>
			<el-button @click="search()">查询</el-button>
			<ve-line :data="chartData"></ve-line>
		</div>

	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name: '',
		data: function() {
			return {
				years: '2018',
				chartData: {
					columns: [],
					rows: []
				},

			};
		},
		methods: {
			search() {
				// 后端网址
				var url = this.baseUrl + "/devInfo/amount"
				// 传递给后端的数据
				var data = {
					year: this.years
				};
				this.$axios.post(url, this.$qs.stringify(data), {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res => {
					this.chartData = res.data;
				});

			},
		},
		mounted: function() {
			this.search()
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
