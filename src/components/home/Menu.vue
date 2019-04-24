<!-- html部分 -->
<template>
	<div style="height: 100%;">
		<!-- 菜单 -->
		<el-menu :default-active='$store.state.defaultIndex'>
			<span v-for="obj in arr">
				<!-- 没有子菜单 -->
			<el-menu-item v-show='!obj.children' :index='obj.index' @click='fn(obj)'>
				<span slot="title">{{obj.text}}</span>
			</el-menu-item>
				<!-- 有子菜单 -->
			 <el-submenu v-show='obj.children' :index='obj.index'>
					<template slot="title">
					  <span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
					  <el-menu-item v-for='item in obj.children' :index='item.index' :key='item.text' @click='fn(item)'>{{item.text}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</span>
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[{text:'首页',index:'101',url:'/'},
					 {text:'基本信息',index:'102',children:[
						 {text:'企业信息',index:'1021',url:'/CompList'},
						  {text:'人员信息',index:'1022',url:'/baseUser'},
						 {text:'设备类别',index:'1023',url:'/DevtypeList'},
						 {text:'设备信息',index:'1024',url:'/devicelist'},						
						 {text:'流程信息',index:'1025',url:'/baseFlow'}
					 ]},
					 {text:'生产作业',index:'103',children:[
					 	 {text:'报岗',index:'1031',url:'produceReport'},
					 	 {text:'流产控制',index:'1032',url:''},
					 	 {text:'中控',index:'1033',url:'Control'},
						 
					 ]},
					 {text:'能耗信息',index:'104',children:[					 	
					 	 {text:'能耗信息',index:'1041',url:'/energyConsume'},					 	
					 	 {text:'折标煤系数',index:'1042',url:'/energyStandradcoal'}
					 ]},
					 {text:'作业信息',index:'105',children:[
					 	 {text:'作业量信息',index:'1051',url:''},
					 	 {text:'作业时间信息',index:'1052',url:''},
					 	 {text:'故障信息',index:'1053',url:'/produceFault'},
					 	 {text:'维修记录',index:'1054',url:'/produceRepair'},						 
					 ]},
					 {text:'能源监控',index:'106',children:[
					 	 {text:'正常值范围',index:'1061',url:''},
					 	 {text:'实时监控',index:'1062',url:''},
					 	 {text:'异常处理',index:'1063',url:''}
					 ]},
					 {text:'设备维修成本',index:'107',children:[
					 	 {text:'维修登记',index:'1071',url:''}
					 ]},
					 {text:'统计信息',index:'108',children:[
					 	 {text:'能源能耗信息',index:'1081',url:'/energyConsume'},					 	 
					 	 {text:'作业量统计',index:'1082',url:'/jobAmount'},
					 	 {text:'流程能耗对比',index:'1083',url:''},
						 
						 {text:'港口间设备利用率对比',index:'1084',url:'/usage'},
						 {text:'能源模型树状图',index:'1085',url:'/EnergyModel'},
						 {text:'港口间设备完好率对比',index:'1086',url:'/intactRatio'},
						 {text:'成本核算信息',index:'1087',url:'/cost'},
						 {text:'港口间作业量对比',index:'1088',url:'/amount'},
						 {text:'港口间能耗对比',index:'1089',url:'/consume'},
						 						
					 ]},
					 {text:'用能单元模型',index:'109',children:[
					 	 {text:'全年能效对比',index:'1091',url:''},
					 	 {text:'能效模型(平均值+~20%)',index:'1092',url:''},
					 	 {text:'同类设备能耗对比',index:'1093',url:''}
					 ]},
					 {text:'能源产销模型',index:'1010',children:[
					 	 {text:'产销模型设置',index:'10101',url:''},
					 	 {text:'产销模型展示',index:'10102',url:''}
					 ]},
				]
			};
		},
		methods:{
			fn(obj){
				// 路由跳转
				this.$router.push({path:obj.url});
				// 添加到tags
				this.$store.commit('addTag',{name:obj.text,type:'warning',url:obj.url,index:obj.index});
			}
		}
	}
</script>
<!-- css部分 -->
<style>
.el-menu{
	background: #F4F4F4;
}
</style>
