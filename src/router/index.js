import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import Welcome from '@/components/home/Welcome'

import usage from '@/components/home/usage'
import intactRatio from '@/components/home/intactRatio'
import cost from '@/components/home/cost'
import amount from '@/components/home/amount'
import consume from '@/components/home/consume'

import jobAmount from '@/components/home/jobAmount'
import energyConsume from '@/components/home/energyConsume'
import EnergyModel from '@/components/home/EnergyModel'

import MainTable from '@/components/home/MainTable'

// import energyConsumeList from '@/components/baseInfo/energyConsumeList'
// import energyConsumeAdd from '@/components/baseInfo/energyConsumeAdd'
// import energyConsumeEdit from '@/components/baseInfo/energyConsumeEdit'

import CompList from '@/components/baseInfo/CompList'
import CompAdd from '@/components/baseInfo/CompAdd'
import CompEdit from '@/components/baseInfo/CompEdit'
import DevtypeList from '@/components/baseInfo/DevtypeList'
import DevtypeAdd from '@/components/baseInfo/DevtypeAdd'
import DevtypeEdit from '@/components/baseInfo/DevtypeEdit'
import baseUser from '@/components/baseInfo/baseUser'
import baseUseradd from '@/components/baseInfo/baseUseradd'
import baseUserupdate from '@/components/baseInfo/baseUserupdate'
import baseFlow from '@/components/baseInfo/baseFlow'
import baseFlowadd from '@/components/baseInfo/baseFlowadd'
import baseFlowEdit from '@/components/baseInfo/baseFlowEdit'

import devicelist from '@/components/baseInfo/devicelist'
import deviceadd from '@/components/baseInfo/deviceadd'
import deviceedit from '@/components/baseInfo/deviceedit'

import produceFault from '@/components/baseInfo/produceFault'
import produceFaultAdd from '@/components/baseInfo/produceFaultAdd'
import produceFaultEdit from '@/components/baseInfo/produceFaultEdit'

import produceRepair from '@/components/baseInfo/produceRepair'
import produceRepairAdd from '@/components/baseInfo/produceRepairAdd'
import produceRepairEdit from '@/components/baseInfo/produceRepairEdit'

import produceReport from '@/components/baseInfo/produceReport'
import produceReportAdd from '@/components/baseInfo/produceReportAdd'
import produceReportEdit from '@/components/baseInfo/produceReportEdit'

import energyStandradcoal from '@/components/baseInfo/energyStandradcoal'
import energyStandradcoalAdd from '@/components/baseInfo/energyStandradcoalAdd'
import energyStandradcoalEdit from '@/components/baseInfo/energyStandradcoalEdit'

import Control from '@/components/baseInfo/Control'


import Login from '@/components/home/Login'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
		 {path: '/Login',name: 'Login',component: Login},
    {
      path: '/',name: 'Index',component: Index,
			children:[
					{path:'/',component:Welcome},
					{path:'/jobAmount',component:jobAmount},
					{path:'/energyConsume',component:energyConsume},
					{path:'/EnergyModel',component:EnergyModel},
					
					{path:'/usage',component:usage},
					{path:'/intactRatio',component:intactRatio},
					{path:'/cost',component:cost},
					{path:'/amount',component:amount},
					{path:'/consume',component:consume},
					
					{path:'CompList',component:CompList,name:'CompList'},
					{path:'CompAdd',component:CompAdd},
					{path:'CompEdit',component:CompEdit,name:'CompEdit'},
					{path:'MainTable',component:MainTable},
					{path:'DevtypeList',component:DevtypeList,name:'DevtypeList'},
					{path:'DevtypeEdit',component:DevtypeEdit,name:'DevtypeEdit'},
					{path:'DevtypeAdd',component:DevtypeAdd},
					{path:'baseUser',component:baseUser,name:'baseUser'},
					{path:'baseUseradd',component:baseUseradd,name:'baseUseradd'},
					{path:'baseUserupdate',component:baseUserupdate,name:'baseUserupdate'},
					{path:'baseFlow',component:baseFlow,name:'baseFlow'},
					{path:'baseFlowadd',component:baseFlowadd,name:'baseFlowadd'},
					{path:'baseFlowEdit',component:baseFlowEdit,name:'baseFlowEdit'},
					
					{path:'devicelist',component:devicelist,name:'devicelist'},
					{path:'deviceadd',component:deviceadd,name:'deviceadd'},
					{path:'deviceedit',component:deviceedit,name:'deviceedit'},
					
					{path:'produceFault',component:produceFault,name:'produceFault'},
					{path:'produceFaultAdd',component:produceFaultAdd,name:'produceFaultAdd'},
					{path:'produceFaultEdit',component:produceFaultEdit,name:'produceFaultEdit'},
					
					{path:'produceRepair',component:produceRepair,name:'produceRepair'},
					{path:'produceRepairAdd',component:produceRepairAdd,name:'produceRepairAdd'},
					{path:'produceRepairEdit',component:produceRepairEdit,name:'produceRepairEdit'},
					
			  	{path:'produceReport',component:produceReport,name:'produceReport'},
			    {path:'produceReportAdd',component:produceReportAdd,name:'produceReportAdd'},
			    {path:'produceReportEdit',component:produceReportEdit,name:'produceReportEdit'},
				
				{path:'energyStandradcoal',component:energyStandradcoal,name:'energyStandradcoal'},
				{path:'energyStandradcoalAdd',component:energyStandradcoalAdd,name:'energyStandradcoalAdd'},
				{path:'energyStandradcoalEdit',component:energyStandradcoalEdit,name:'energyStandradcoalEdit'},
				
// 				{path:'energyConsumeList',component:energyConsumeList,name:'energyConsumeList'},
// 				{path:'energyConsumeAdd',component:energyConsumeAdd,name:'energyConsumeAdd'},
// 				{path:'energyConsumeEdit',component:energyConsumeEdit,name:'energyConsumeEdit'},
				
				{path:'Control',component:Control,name:'Control'},
			]
    }
		
		
  ]
})
