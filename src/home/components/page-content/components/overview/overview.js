import CardBar from './components/card-bar.js'
import CardInfoList from './components/card-info-list.js'
import CardInfo from '../card-info.js'

const template = `
<b-container class="p-4">
  <b-row class='my-4'>
    <b-col>
    	<card-info title='Χρήστες' icon='person-fill' :value=numberOfUsers></card-info>
    </b-col>
    <b-col>
    	<card-info title='Domain' icon='globe2' :value=numberOfDomains></card-info>
    </b-col>
    <b-col>
    	<card-info title='Πάροχοι' icon='hdd-network-fill' :value=numberOfProviders></card-info>
    </b-col>
  </b-row>
  <b-row align-v="center">
    <b-col cols="8">
    	<card-bar></card-bar>
    </b-col>
    <b-col><card-info-list icon='paperclip'></card-info-list></b-col>
  </b-row>
</b-container>
 `
 export default {
 	template,
 	components: {
 		'card-bar': CardBar,
 		'card-info-list': CardInfoList,
 		'card-info': CardInfo,
 	},
   data () {
     return {
     	numberOfUsers: 100,
     	numberOfDomains: 20,
     	numberOfProviders: 5
     }
   }
 }