import CardInfo from '../card-info.js'
import CardHistogram from './analysis-header/card-histogram.js'
import CardPie from './analysis-header/card-pie.js'

const template = `
  <b-container class="rounded-corners-25" style="height: 100%; width: 80%; background: rgba(255, 255, 255, 0.2)">
    <div class='pt-3'></div>
    <div class='overflow-auto' style='height: calc(100% - 35px);'>
      <b-col>
        <b-row>
          <b-col class='p-3'>
            <card-info title='max-stale' value=15 subtitle='των αιτήσεων' icon='graph-up'></card-info>
          </b-col>
          <b-col class='p-3'>
            <card-info title='min-fresh' value=64 subtitle='των αιτήσεων' icon='graph-down'></card-info>
          </b-col>
        </b-row>
        <b-row><b-col class='p-3'><card-pie></card-pie></b-col></b-row>
        <b-row><b-col class='p-3'><card-histogram></card-histogram></b-col></b-row>
      </b-col>
    </div>
  </b-container>
`
export default {
  components: {
    'card-info': CardInfo,
    'card-histogram': CardHistogram,
    'card-pie': CardPie,
  },
  template,
  data () {
    return {
    }
  }
}
