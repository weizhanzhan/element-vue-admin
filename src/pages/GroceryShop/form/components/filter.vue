<template>
  <div
    v-if="options"
    class="form-filter"
  >
    <el-form
      ref="ruleForm"
      :model="formInline"
      class="demo-form-inline"
      style="width:100%"
      label-width="100px"
      size="small"
      :rules="options.rules"
    >
      <el-row class="el-margin">
        <el-col
          v-for="(item, index) in options.form"
          :key="index"
          :xs="24"
          :sm="isLine?12:24"
          :md="isLine?8:24"
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
        <el-col
          :xs="24"
          :sm="buttonGroupSpan"
          :md="buttonGroupSpan"
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
              查询
            </el-button>
            <template v-for="slot in options.slots">
              <slot
                :text="slot.name"
                :name="slot.slot"
              />
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- <el-row>
      <el-col
        v-for="(item, index) in options.form"
        :key="index"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="item.span?item.span:8"
        :xl="8"
        class="form-filter-wrapper"
      >
        <el-row>
          <el-col
            :span="6"
            :class="['wrapper-label' ,item.rules&&item.rules[0].required?'required':'']"
          >
            {{ item.label }} :
          </el-col>
          <el-col :span="18">
            <components
              :is="item.componentName"
              clearable
              :value="item.value"
              class="wrapper-item"
              :type="item.type"
              :rules="item.rules"
              size="small"
              :value-format="item.format"
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
                  :label="option.label"
                />
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
          </el-col>
        </el-row>
      </el-col>
      <el-col
        :xs="24"
        :sm="buttonGroupSpan"
        :md="buttonGroupSpan"
        :lg="buttonGroupSpan"
        :xl="buttonGroupSpan"
        class="el-padding"
      >
        <el-button
          type="primary"
          size="small"
          @click="onSubmit"
        >
          {{ submitButtonTitle }}
        </el-button>
        <el-button
          v-if="hasClear"
          size="small"
          @click="onEmpty"
        >
          清空
        </el-button>
        <template v-for="slot in options.slots">
          <slot
            :text="slot.name"
            :name="slot.slot"
          />
        </template>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Object,
        default: () => {
          return {
            form: [],
            slots: []
          }
        }
      },
      hasSubmit: {
        type: Boolean,
        default: () => true
      },
      hasClear: {
        type: Boolean,
        default: () => false
      },
      submitButtonTitle: {
        type: String,
        default: '提交'
      },
      isLine: {
        type: Boolean,
        default: true
      },
      rules: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      const formInline = {}
      this.options.form.forEach(option => {
        formInline[option.name] = option.value
      })
      console.log('formInline', formInline)
      return {
        formInline
      }
    },
    computed: {
      buttonGroupSpan() {
        const optionLength = this.options.form.length
        if (optionLength >= 3) { return 24 }
        return 8
      },
      isRight() {
        const optionLength = this.options.form.length
        if (optionLength >= 3) { return { 'text-align': 'right' } }
        return { }
      }
    },
    methods: {
      set(data) {
        this.resetForm()
        this.formInline = data
      },
      inputChange(val, param, index) {
        this.$emit('handleValueChange', val, param, index)
        if (!param.hasOwnProperty('_selfChange')) { return }
        param._selfChange(val, param, index)
      },
      onSubmit() {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            const res = {}
            this.options.form.forEach(option => {
              res[option.name] = option.value
            })
            this.$emit('handleSubmit', res)
          }
        })
      },
      resetForm() {
        this.$refs['ruleForm'].resetFields()
        this.options.form.forEach(option => {
          if (option.default) { this.formInline[option.name] = option.default } else { this.formInline[option.name] = '' }
        })
      },
      onEmpty() {
        this.options.form.forEach((option, i) => {
          this.$emit('handleValueChange', option.hasOwnProperty('default') ? option.default : '', option, i)
        })
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
