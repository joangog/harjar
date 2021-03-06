const template = `
  <div class="border-colored rounded-corners-5">
    <b-button block @click="visible = !visible" class='btn-colored' style="text-align: left">
      <b-icon :icon="caret()" style="height:15px"></b-icon>
      {{ title }}
    </b-button>
    <b-collapse class="p-2" v-model="visible">
      <b-form-checkbox-group
      stacked
      style="text-allign: left;"
      v-model="selected"
      :options="options">
      </b-form-checkbox-group>
    </b-collapse>
  </div>
`
export default {
  template,
  props: ["title","options"], //used as parameters to be given inside the component <tag>
  data () {
    return {
      visible: false,
      selected: [],
      caret: function(){  // switches dropdown caret icon
        return this.visible? "caret-up-fill" : "caret-down-fill"
      }
    }
  }
}
