<template>
  <div
    v-if="value"
    class="form-filter"
  >
    <el-form
      ref="ruleForm"
      :model="formInline"
      class="demo-form-inline"
      style="width:100%"
      label-width="100px"
      size="small"
      :rules="value.rules"
    >
      <el-row class="el-margin">
        <template v-for="(item, index) in value.form">
          <el-col
            v-if="handleIf(item)"
            :key="index"
            :xs="24"
            :sm="isLine?12:24"
            :md="isLine?12:24"
            :lg="isLine?8:24"
            :xl="isLine?8:24"
            class="el-padding"
          >
            <el-form-item

              :label="item.label"
              :prop="item.name"
            >
              <components
                :is="item.componentName"
                v-model="formInline[item.name]"
                clearable
                class="wrapper-item"
                :type="item.type"
                :multiple="item.multiple"
                size="small"
                :value-format="item.format"
                :options="item.options"
                :change-on-select="item.changeOnSelect"
                :show-all-levels="item.showAllLevels"
                @input="inputChange($event,item,index)"
              >
                <template v-if="item.componentName=='el-select'">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </template>
                <template v-else-if="item.componentName=='el-radio-group'">
                  <el-radio
                    v-for="option in item.options"
                    :key="option.label"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </el-radio>
                </template>
                <template v-else-if="item.componentName=='el-checkbox-group'">
                  <el-checkbox
                    v-for="option in item.options"
                    :key="option.label"
                    :label="option.label"
                    :name="option.name"
                  />
                </template>
              </components>
            </el-form-item>
          </el-col>
        </template>

        <el-col
          :xs="24"
          :sm="12"
          :md="12"
          :lg="buttonGroupSpan"
          :xl="buttonGroupSpan"
          class="el-padding"
          :style="[isRight]"
        >
          <el-form-item label-width="100px">
            <el-button
              v-if="hasSubmit"
              type="primary"
              @click="onSubmit"
            >
              {{ submitButtonTitle }}
            </el-button>
            <template v-for="slot in value.slots">
              <slot
                :text="slot.name"
                :name="slot.slot"
              />
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: {
      hasSubmit: { type: Boolean, default: () => true },
      hasClear: { type: Boolean, default: () => false },
      submitButtonTitle: { type: String, default: '提交' },
      isLine: { type: Boolean, default: true },
      rules: { type: Object, default: () => {} },
      value: { type: Object }
    },
    data() {
      const formInline = {}
      return { formInline }
    },
    computed: {
      buttonGroupSpan() {
        const optionLength = this.value.form.length
        if (optionLength >= 3) { return 24 }
        return 8
      },
      isRight() {
        const optionLength = this.value.form.length
        if (optionLength >= 3) { return { 'text-align': 'right' } }
        return { }
      }
    },
    methods: {
      setInitial(data) { // 绑定表单初始化数据
        this.$refs['ruleForm'].resetFields()
        this.formInline = { ...data }
        const newValue = JSON.parse(JSON.stringify(this.value))
        newValue.form.forEach((option, i) => {
          // 处理初始值
          newValue.form[i].value = this.formInline[option.name]
          // 处理vif初始值
          if (newValue.vIf && newValue.vIf.hasOwnProperty(option.name)) {
            newValue.vIf[option.name].value = this.formInline[option.name]
          }
        })
        this.$emit('input', newValue)
      },
      inputChange(val, param, index) { // 数据变化
        const newValue = JSON.parse(JSON.stringify(this.value))
        newValue.form[index].value = val
        if (newValue.vIf && newValue.vIf.hasOwnProperty(param.name)) {
          newValue.vIf[param.name].value = val
        }
        this.$emit('input', newValue)
        if (!param.hasOwnProperty('_selfChange')) { return }
        param._selfChange(val, param, index)
      },
      onSubmit() { // 提交
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            const res = {}
            this.value.form.forEach(option => {
              res[option.name] = option.value
            })
            this.$emit('handleSubmit', res)
          }
        })
      },
      resetForm() { // 重置表单
        if (this.$refs['ruleForm']) { this.$refs['ruleForm'].resetFields() }
        const newValue = JSON.parse(JSON.stringify(this.value))
        this.value.form.forEach((option, i) => {
          this.formInline[option.name] = option.hasOwnProperty('default') ? option.default : ''
          const defaultvalue = option.hasOwnProperty('default') ? option.default : ''
          newValue.form[i].value = defaultvalue
        })
        this.$emit('input', newValue)
      },
      handleIf(item) {
        return this.getIf(item)
      },
      getIf(item) {
        if (!item.vIf) return true
        else {
          for (var key in item.vIf) {
            if (this.value.vIf[key].type === 'show') { // 当type为show的时候就是，v-if满足时展示，值不是设定的值的时候就一直隐藏
              if (JSON.stringify(item.vIf[key]) !== JSON.stringify(this.value.vIf[key].value)) { return false }
              return true
            } else if (this.value.vIf[key].type === 'hide') { // 当type为hide的时候就是，v-if满足时展示，值不是设定的值的时候就一直展示
              if (JSON.stringify(item.vIf[key]) !== JSON.stringify(this.value.vIf[key].value)) { return true }
              return false
            }
          }
          return true
        }
      }
    }
  }
</script>

<style scoped>
.el-padding {
  padding:0 12px;
  height: 51px;
  line-height: 58px
}

.form-filter-wrapper{
    margin:10px 0;
     line-height: 40px
}
.wrapper-label{
    text-align:center;
    line-height:40px
}
.wrapper-label.required::before{
    content: '*';
    color:red
}
.wrapper-item{
    width:100%;
}
.el-checkbox+.el-checkbox{
    margin-left: 0;
    /* margin-right: 30px */
}
.el-checkbox{
    margin-right: 30px
}
.el-radio+.el-radio{
    margin-left: 0;
}
.el-radio{
    margin-right: 30px;
    margin-top: 10px
}
</style>
