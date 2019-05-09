<template>
    <div >
        <calendar 
            ref="calendar"
            height="800px" 
            width="800px" 
            style="margin:0 auto"  
            :render-content="renderContent"
            :week-title="weekTitle"
            :border="true"
            :before-render="beforeRender"
            @year-change="changeHandle"
            @month-change="changeHandle"
            :render-title="renderTitle"/>
    </div>
</template>

<script>
 import Calendar from 'himmas-vue-calendar'
export default {
      components:{Calendar},
    data() {
      return {
        weekTitle: ['日', '一', '二', '三', '四', '五', '六'],
        holiday: [
          '2018-01-01',
          '2018-02-15',
          '2018-02-16',
          '2018-02-17',
          '2018-02-18',
          '2018-02-19',
          '2018-02-20',
          '2018-02-21',
        ]
      }
    },
    methods: {
      twoDigit:function(num){ return ('000'+num).slice(-2) },
      renderTitle(h,year,month){
        return h('div', {
          class: {
            'title-box': true
          }
        },[
            h('div',
                {
                    class:{
                        'title-box-top':true
                    }
                },
                [
                    h('div',{
                    class:{
                        'date-aciton':true
                    }
                },[
                    h('i',{
                        class:{
                            'el-icon-d-arrow-left':true
                        },
                        on: {
                            click: this.prevMonth
                        },
                    })
                ]),
                h('div',{
                    class:{
                        'show-date':true
                    }
                },[
                    h('span',{},year+'年'),
                    h('span',{},month+'月')
                ]),
                h('div',{
                    class:{
                        'date-aciton':true
                    }
                },
                [
                    h('i',{
                        class:{
                            'el-icon-d-arrow-right':true
                        },
                        on: {
                            click: this.nextMonth
                        },
                    })
                ])
            ]),
            h('div',{
                class:{
                    'status-intro':true
                }
            },[
                h('div',{
                    class:{
                    
                        'status-item':true,
                    }
                },[
                    h('span',{ 
                        class : {
                            'status-block':true,
                            'success':true 
                        }
                    }),
                    h('span','完成')
                ]),
                h('div',{
                    class:{
                        'status-item':true,
                    }
                },[
                    h('span',{ 
                        class : {
                            'status-block':true,
                            'unsuccess':true 
                        }
                    }),
                    h('span','未完成')
                ]),
                h('div',{
                    class:{
                        'status-item':true,
                    }
                },[
                    h('span',{ 
                        class : {
                            'status-block':true,
                            'unstart':true 
                        }
                    }),
                    h('span','不在生产')
                ]),
                
            ])
        ])
      },
      renderContent(h, data) {
        var {isToday,isWeekend,isOtherMonthDay, year, day, month, renderYear, renderMonth, lunar, weekDay, festival, term} = data

        // lunar对象中存有农历数据
        var {lunarDayChiness} = lunar

        //第二行展示的数据的优先级为 节日>节气>农历日
        var secondInfo = festival ?
          festival : (term ? term : (lunarDayChiness || ''))

        var dateStr = `${year}-${this.twoDigit(month)}-${this.twoDigit(day)}`

        var isHoliday = (!!~this.holiday.indexOf(dateStr)) || isWeekend

        return h('div', {
          class: {
            'date-box': true,
            'today':isToday,
            'weekend':isWeekend,
            'holiday':isHoliday,
            'other-month':isOtherMonthDay
          }
        }, 
        [
        h('div',{
          class: {
            'first-info': true
          }
        },[
            h('span',{},day)
        ]),
        h('div',{
            class:{
                'shift-info':true
            }
        },[
            h('div',{
                class:{
                    'shift-item':true
                },
                on:{
                    click:this.shiftClick
                }
            },[
                h('span',{
                    class:{
                        'status-block':true,
                        'success':true
                    }
                }),
                h('span',{},'07:00~15:00')
            ]),
            h('div',{
               class:{
                    'shift-item':true
                }
            },[
                h('span',{
                    class:{
                        'status-block':true,
                        'success':true
                    }
                }),
                h('span',{},'15:00~23:00')
            ]),
            h('div',{
               class:{
                    'shift-item':true
                }
            },[
                h('span',{
                    class:{
                        'status-block':true,
                        'success':true
                    }
                }),
                h('span',{},'23:00~07:00')
            ]),
        ])
        // ,h('div',{
        //   class: {
        //     'second-info': true,
        //     'festival':festival
        //   }
        // },secondInfo),h('div',{
        //   class: {
        //     'sign': true
        //   }
        // },'休')
        ]
        )
      },
      prevMonth(){
          console.log('上个月',this.$refs.calendar)
          this.$refs.calendar.renderThisMonth(2019,4)
      },
      nextMonth(){
          console.log('下个月',this.$refs.calendar)
          this.$refs.calendar.renderThisMonth(2019,6)
        //   this.$refs.calendar.$parent.nextMonth()
      },
      shiftClick(){
          console.log('shiftClick')
      },
      beforeRender(year,month,next){
        console.log('before-render',year,month)
        next()
      },
      changeHandle(year,month){
        console.log('change',year,month)
      }
    }
  
}
</script>

<style>
 .kl-calendar_body-week-title-item{
     text-align: center !important
 }
 .date-box {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2px
  }
  .first-info{
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
  }
  .second-info{
    flex: 1;
    display: flex;
    justify-content: center;
    color: #999;
    font-size: 12px;
  }
  .second-info.festival{
    color: #f43;
  }
  .sign{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background: #f43;
    width: 20px;
    height: 20px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .date-box.today{
    /* background: #fb0;
    color: #fff; */
  }
  .date-box.today .first-info span{
      display: inline-block;
      color: #ffffff;
      text-align: center;
      height: 20px;
      line-height: 20px;
      width: 20px;
      background: #19a0ff;
      border-radius: 50%;
  }
  .date-box.today .second-info{
    color: #fff;
  }
  .weekend{
    background: #f6f8fa;
  }
  .holiday .sign{
    display: block;
  }
  .date-box.other-month .second-info,.date-box.other-month .first-info{
    color: #999;
  }
  .date-box:hover{
    /* border: 1px solid #fb0; */
  }
  .title-box{
    font-size: 20px;
  
  }
  .title-box-top{
        display: flex
  }
  .status-intro{
      display: flex
  }
  .status-item{
      /* color: #fff */
      font-size: 15px;
      font-weight: bold;
     
      margin:10px 15px 5px 5px;
  }

  .status-block{
      display: inline-block;
      height: 11px;
      width: 16px;
      background: red;
      margin-right: 4px
  }
  .unstart{
      background: gray
  }
  .success{
      background: green
  }
  .unsuccess{
      background: red
  }
  .shift-item{
    /* background: rgba(0, 0, 0, 0.1); */
    /* background: #027be3;
    background: red; */
    color: #999999;
    /* border: 1px solid #19a0ff; */
    padding: 2px;
    text-overflow: clip;
    border-radius: 5px;
    margin: 1px 0;
    font-size: .8em;
    cursor: pointer;
    text-align: center
  }
  .shift-item:hover{
     font-weight: bold
  }
  .show-date{
      flex: 0 0 auto
  }
  .date-aciton{
      flex: 1 1 auto;
      text-align: center
  }
</style>
