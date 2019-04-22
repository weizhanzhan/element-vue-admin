<template>
  <el-main style="width:99%">
    <el-card class="data-list">
      <el-row>
        <el-col :span="8">总销售额</el-col>
        <el-col :span="2" :offset="14">
          
        </el-col>
      </el-row>
      <p style="font-size:20px;font-weight:bold">￥123133</p>
      <p>周同比12%
        日同比2%
        
      </p>
    </el-card>
    <el-card class="data-list">
      <el-row>
        <el-col :span="8">访问量</el-col>
        <el-col :span="2" :offset="14">
          
        </el-col>
      </el-row>
      <div class="chart-wrapper">
        <canvas id="mountNode" style="width:100%;"></canvas>
      </div>
    </el-card>
    <el-card class="data-list">
      <el-row>
        <el-col :span="8">访问量</el-col>
        <el-col :span="2" :offset="14">
          
        </el-col>
      </el-row>
      <div class="chart-wrapper">
        <canvas id="mountNode1" style="width:100%"></canvas>
      </div>
    </el-card>
    <el-card class="data-list">
      <el-row>
        <el-col :span="8">访问量</el-col>
        <el-col :span="2" :offset="14">
         
        </el-col>
      </el-row>
      <div class="chart-wrapper">
        <canvas id="mountNode3" style="width:100%"></canvas>
      </div>
    </el-card>
  </el-main>
</template>

<script>
  const F2 = require('@antv/f2');
  export default {
    mounted() {
      var data = [{
        date: "2017-06-05",
        value: 116
      }, {
        date: "2017-06-06",
        value: 129
      }, {
        date: "2017-06-07",
        value: 135
      }, {
        date: "2017-06-08",
        value: 86
      }, {
        date: "2017-06-09",
        value: 73
      }, {
        date: "2017-06-10",
        value: 85
      }, {
        date: "2017-06-11",
        value: 73
      }, {
        date: "2017-06-12",
        value: 68
      }, {
        date: "2017-06-13",
        value: 92
      }, {
        date: "2017-06-14",
        value: 130
      }, {
        date: "2017-06-15",
        value: 245
      }, {
        date: "2017-06-16",
        value: 139
      }, {
        date: "2017-06-17",
        value: 115
      }, {
        date: "2017-06-18",
        value: 111
      }, {
        date: "2017-06-19",
        value: 309
      }, {
        date: "2017-06-20",
        value: 206
      }, {
        date: "2017-06-21",
        value: 137
      }, {
        date: "2017-06-22",
        value: 128
      }, {
        date: "2017-06-23",
        value: 85
      }, {
        date: "2017-06-24",
        value: 94
      }, {
        date: "2017-06-25",
        value: 71
      }, {
        date: "2017-06-26",
        value: 106
      }, {
        date: "2017-06-27",
        value: 84
      }, {
        date: "2017-06-28",
        value: 93
      }, {
        date: "2017-06-29",
        value: 85
      }, {
        date: "2017-06-30",
        value: 73
      }, {
        date: "2017-07-01",
        value: 83
      }, {
        date: "2017-07-02",
        value: 125
      }, {
        date: "2017-07-03",
        value: 107
      }, {
        date: "2017-07-04",
        value: 82
      }, {
        date: "2017-07-05",
        value: 44
      }, {
        date: "2017-07-06",
        value: 72
      }, {
        date: "2017-07-07",
        value: 106
      }, {
        date: "2017-07-08",
        value: 107
      }, {
        date: "2017-07-09",
        value: 66
      }, {
        date: "2017-07-10",
        value: 91
      }, {
        date: "2017-07-11",
        value: 92
      }, {
        date: "2017-07-12",
        value: 113
      }, {
        date: "2017-07-13",
        value: 107
      }, {
        date: "2017-07-14",
        value: 131
      }, {
        date: "2017-07-15",
        value: 111
      }, {
        date: "2017-07-16",
        value: 64
      }, {
        date: "2017-07-17",
        value: 69
      }, {
        date: "2017-07-18",
        value: 88
      }, {
        date: "2017-07-19",
        value: 77
      }, {
        date: "2017-07-20",
        value: 83
      }, {
        date: "2017-07-21",
        value: 111
      }, {
        date: "2017-07-22",
        value: 57
      }, {
        date: "2017-07-23",
        value: 55
      }, {
        date: "2017-07-24",
        value: 60
      }];
      var chart = new F2.Chart({
        id: 'mountNode',
        pixelRatio: window.devicePixelRatio
      });

      chart.source(data, {
        value: {
          tickCount: 5,
          min: 0
        },
        date: {
          type: 'timeCat',
          range: [0, 1],
          tickCount: 3
        }
      });
      chart.tooltip({
        custom: true,
        showXTip: true,
        showYTip: true,
        snap: true,
        crosshairsType: 'xy',
        crosshairsStyle: {
          lineDash: [2]
        }
      });
      chart.axis('date', {
        label: function label(text, index, total) {
          var textCfg = {};
          if (index === 0) {
            textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            textCfg.textAlign = 'right';
          }
          return textCfg;
        }
      });
      chart.line().position('date*value');
      chart.render();
      var data = [{
        year: '1951',
        sales: 38
      }, {
        year: '1952',
        sales: 52
      }, {
        year: '1956',
        sales: 61
      }, {
        year: '1957',
        sales: 145
      }, {
        year: '1958',
        sales: 48
      }, {
        year: '1959',
        sales: 38
      }, {
        year: '1960',
        sales: 38
      }, {
        year: '1962',
        sales: 38
      }];
      var chart1 = new F2.Chart({
        id: 'mountNode1',
        pixelRatio: window.devicePixelRatio
      });

      chart1.source(data, {
        sales: {
          tickCount: 5
        }
      });
      chart1.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          var items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = '¥ ' + items[0].value;
        }
      });
      chart1.interval().position('year*sales');
      chart1.render();
      var data = [{
        name: '股票类',
        percent: 83.59,
        a: '1'
      }, {
        name: '债券类',
        percent: 2.17,
        a: '1'
      }, {
        name: '现金类',
        percent: 14.24,
        a: '1'
      }];

      var map = {};
      data.map(function (obj) {
        map[obj.name] = obj.percent + '%';
      });

      var chart3 = new F2.Chart({
        id: 'mountNode3',
        pixelRatio: window.devicePixelRatio,
        padding: [20, 'auto']
      });
      chart3.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val + '%';
          }
        }
      });
      chart3.tooltip(false);
      chart3.legend({
        position: 'right',
        itemFormatter: function itemFormatter(val) {
          return val + '    ' + map[val];
        }
      });
      chart3.coord('polar', {
        transposed: true,
        innerRadius: 0.7,
        radius: 0.85
      });
      chart3.axis(false);
      chart3.interval().position('a*percent').color('name', ['#FE5D4D', '#3BA4FF', '#737DDE']).adjust('stack');

      chart3.guide().html({
        position: ['50%', '45%'],
        html: '<div style="width: 250px;height: 40px;text-align: center;">' +
          '<div style="font-size: 12px">总资产</div>' + '<div style="font-size: 14px">133.08 亿</div>' + '</div>'
      });
      chart3.render();
    }
  }

</script>

<style>
  .data-list {
    width: 24.6%;
    background: #fff;
    float: left;
    height: 200px;
    overflow: hidden;
  }
  .data-list canvas{
      margin-top: -20px;
  }

  .data-list:not(:last-child) {
    margin-right: 0.3%
  }
  @media screen and (max-width:900px){
    .data-list {
        width: 48%;
        background: #fff;
        float: left;
        height: 200px;
        overflow: hidden;
    }
  }
  @media screen and (max-width:500px){
    .data-list {
        width: 96%;
        background: #fff;
        float: left;
        height: 200px;
        overflow: hidden;
    }
  }
</style>
