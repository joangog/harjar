import Card from '../../card.js'

const template = `
  <card style="width:500px; height:500px">
    <h5 class='pt-4 px-1' style='text-align: center;'>TTL Ιστοαντικειμένων</h5>
    <div style="height:400px"><canvas id="histogram" class='pt-4 px-3'></canvas></div>
  </card>
`
export default {
  components: {
    'card': Card,
  },
  template,
  data () {
    return {
      histogram_config: {
        type: 'bar',
        data: {
          labels: ['0-9','10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90-99'],
          datasets: [{
            label: '%',
            data: [19, 28, 20, 16, 43, 56, 12, 39, 44, 34],
            backgroundColor: '#007BFF',
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
             display: false
          },
          tooltips: {
            callbacks: {
              title: function(tooltipItem, data){
                return "TTL: "+tooltipItem[0].xLabel
              },
              label: function(tooltipItem, data) {
                return "Ιστοαντικείμενα: "+data.datasets[0].data[tooltipItem.index]+"%"
              }
            }
          },
        }
      },
    }
  },
  methods: {
    createChart(id, config) {
      const ctx = document.getElementById(id);
      const myChart = new Chart(ctx, {
        type: config.type,
        data: config.data,
        options: config.options,
      });
    }
  },
  mounted() {
  this.createChart('histogram', this.histogram_config);
  }
}
