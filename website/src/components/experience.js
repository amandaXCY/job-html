
import * as echarts from 'echarts';
import * as Data from '../dist/experience.json';
export default function () {

    var myChart = echarts.init(document.getElementById('experience'));
    var series =  Data['data'].map((item,index)=>{
        return {value:item,name:Data['index'][index]}
    })
    // 指定图表的配置项和数据
    var option  = {
        title: {
            text: '经验',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a}:{d}'
        },
        dataset: {
            source: [
                Data['index'],
               Data['data'],
            ]
        },
        series: [
            {
                type: 'pie',
                radius:'20%',
                seriesLayoutBy: 'row',
                label:{
                   formatter: '{b}:{d}%'
                }

            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    console.log(myChart)
}
