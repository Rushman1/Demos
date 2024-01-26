(function(baseCode) {
	baseCode(window.jQuery, window, document);
}(function($, window, document) {
    var chrt, bChart;
	$(function() {


        var canvas = document.getElementById("myChart");
        var ctx = canvas.getContext('2d');

        var bCanvas = document.getElementById('barChart');
        var bCtx = bCanvas.getContext('2d');

		
        // Start of Bar chart data
        const data = [{x: 'Jan', net: 100, cogs: 50, gm: 50}, {x: 'Feb', net: 120, cogs: 55, gm: 75}];
        const cfg = {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb'],
                datasets: [{
                    label: 'Net sales',
                    data: data,
                    parsing: {
                        yAxisKey: 'net'
                    }
                }, {
                    label: 'Cost of goods sold',
                    data: data,
                    parsing: {
                        yAxisKey: 'cogs'
                    }
                }, {
                    label: 'Gross margin',
                    data: data,
                    parsing: {
                        yAxisKey: 'gm'
                    }
                }]
            },
        };

        bChart = new Chart(bCtx, {
            type: 'line',
            data: {
              datasets: [{
                label:"Here is the label",
                data: [
                    {x:'2016-12-25', y:20},
                    {x:'2016-12-26', y:10},
                    {x:'2016-12-27', y:25},
                    {x:'2016-12-28', y:32},
                    {x:'2016-12-29', y:22},
                ]
              }]
            }
        });
        // End of Bar chart data


        const config = {
            type: 'line',
            data: myChartData,
            options: options,
            plugins: [horzLine, verticalLine, cThreshold]        
        };

        // var activeHours = setActiveHours(8,20);
        // console.log(activeHours);
        chrt = new Chart(ctx, config);


         
        // canvas.onclick = function(evt){
        //     var activePoints = chart.getElementsAtEventForMode(evt, 'nearest',{intersect: true}, true);
        //     if(activePoints[0]){
        //         const label = chart.data.labels[activePoints[0].index];
        //         var bv = chart.data.datasets[activePoints[0].datasetIndex].data[activePoints[0].index];

        //         console.log(label, bv);
        //     }
        //         // const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        
        //         // if (points.length) {
        //         //     const firstPoint = points[0];
        //         //     const label = myChart.data.labels[firstPoint.index];
        //         //     const value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
        //         // }
        // };
	});
	// Wrappers

	// AJAX Functions

	// Functions
    function clickHandler(evt){
        var activePoints = evt.chart.getElementsAtEventForMode(evt, 'nearest',{intersect: true}, true);
        if(activePoints[0]){
            const label = evt.chart.data.labels[activePoints[0].index];
            var bv = evt.chart.data.datasets[activePoints[0].datasetIndex].data[activePoints[0].index];
    
            console.log(label, bv);
        }
    }

    const horzLine = {
        id: "horzLine",
        beforeDraw(chart, args, options){
            const {
                ctx,
                chartArea: {top, right, bottom, left, width, height},
                scales: {x, y},
            } = chart;
            ctx.save();

            // draw the line
            ctx.strokeStyle = options.lineColor;
            ctx.strokeRect(x.getPixelForValue(options.xPosition),top, 0, height);
            ctx.restore();
        },
    };
    const verticalLine = {
        id: 'alertThreshold',
        beforeDraw(chart, args, options) {
          const {
            ctx,
            chartArea: { top, right, bottom, left, width, height },
            scales: { x, y },
          } = chart;
          ctx.save();
  
          // draw line
          ctx.strokeStyle = options.lineColor;
          // x0 : starting point on the horizontal line. Left to Right
          // y0 : starting point on the vertical line. Top to Bottom
          // x1 : length point on the horizontal line. Left to Right
          // y1 : length point on the vertical line. Top to Bottom
          ctx.strokeRect(left, y.getPixelForValue(options.yPosition), width, 0);
  
          ctx.restore();
        },
    };
    const cThreshold = {
        id: 'clinicThreshold',
        beforeDraw(chart, args, options){
            const {
                ctx,
                chartArea:{top, right, bottom, left, width, height},
                scales:{x,y}
            } = chart;
            ctx.save();
            ctx.strokeStyle = options.lineColor;
            ctx.strokeRect(left, y.getPixelForValue(options.yPosition), width, 0);
            ctx.restore();
        }  
    };

    function pointDesign(ctx){
        let index = ctx.dataIndex;
        let value = ctx.dataset.data[index];
        if(value.overridden){
            return {
                radius: 10,
                display: true,
                pointStyle: 'triagle',
                hoverRadius: 13,
                pointBorderColor: CHART_COLORS.red,
                pointBackgroundColor: transparentize(CHART_COLORS.red,0.5)
            };
        } else {
            return {
                radius: 4,
                display: true,
                pointStyle: 'circle',
                hoverRadius: 7,
                pointBorderColor: CHART_COLORS.blue,
                pointBackgroundColor: transparentize(CHART_COLORS.blue,0.5)
            };
        }
    }

    function customRadius(ctx){
        let index = ctx.dataIndex;
        let value = ctx.dataset.data[index];
        //console.log(value);
        return value.overridden ? 10:4;
    }
    function customHoverRadius(ctx){
        let index = ctx.dataIndex;
        let value = ctx.dataset.data[index];
        //console.log(value);
        return value.overridden ? 13:7;
    }
    function customStyle(ctx){
        let index = ctx.dataIndex;
        let value = ctx.dataset.data[index];
        //console.log(value);
        return value.overridden ? 'triangle':'circle';
    }
    function customColor(ctx){
        let index = ctx.dataIndex;
        let value = ctx.dataset.data[index];
        //console.log(value);
        return value.overridden ? CHART_COLORS.red:CHART_COLORS.blue;
    }
    function customBGColor(ctx){
        let index = ctx.dataIndex;
        let value = ctx.dataset.data[index];
        //console.log(value);
        return value.overridden ? transparentize(CHART_COLORS.red,0.5):transparentize(CHART_COLORS.blue,0.5);
    }
    const b = [            
        {id: "7:30 am", value:22, overridden: false},
    {id: "8 am", value:0, overridden: false},
    {id: "8:30 am", value:20, overridden: false},
    {id: "9 am", value:23, overridden: false},
    {id: "9:30 am", value:28, overridden: false},
    {id: "10 am", value:31, overridden: false},
    {id: "10:30 am", value:31, overridden: false},
    {id: "11 am", value:31, overridden: false},
    {id: "11:30 am", value:30, overridden: false},
    {id: "12 pm", value:30, overridden: false},
    {id: "12:30 pm", value:0, overridden: false},
    {id: "1 pm", value:0, overridden: false},
    {id: "1:30 pm", value:14, overridden: false},
    {id: "2 pm", value:13, overridden: false},
    {id: "2:30 pm", value:13, overridden: false},
    {id: "3 pm", value:15, overridden: false},
    {id: "3:30 pm", value:19, overridden: false},
    {id: "4 pm", value:19, overridden: false},
    {id: "4:30 pm", value:19, overridden: false},
    {id: "5 pm", value:19, overridden: false},
    {id: "5:30 pm", value:19, overridden: false},
    {id: "6 pm", value:19, overridden: true},
    {id: "6:30 pm", value:19, overridden: true},
    {id: "7 pm", value:19, overridden: false},
    {id: "7:30 pm", value:19, overridden: false},
    {id: "8 pm", value:19, overridden: false},
    {id: "8:30 pm", value:19, overridden: false},];
    const chartLabels = setActiveHours(8,20);
    const chartTooltips = setActiveTooltips(7.0,20.5);
    const datasets = [{
        label:'Hourly',
        borderColor: CHART_COLORS.blue,
        backgroundColor: transparentize(CHART_COLORS.blue,0.5),
        data: b,
    }];
    const options = {
        parsing: {
            xAxisKey: 'id',
            yAxisKey: 'value'
        },
        onClick: clickHandler,
        scales: {
            x:{
                ticks: {
                    callback: function(value, index){
                        return index % 2 === 0 ? this.getLabelForValue(value): '';
                    }
                }
            }
        },
        plugins: {
            alertThreshold:{
                lineColor: CHART_COLORS.warning,
                yPosition: 15
            },
            clinicThreshold:{
                lineColor: CHART_COLORS.red,
                yPosition: 30
            }
        },
        elements: {
            point: {
                radius: customRadius,
                display: true,
                pointStyle: customStyle,
                hoverRadius: customHoverRadius,
                pointBorderColor: customColor,
                pointBackgroundColor: customBGColor
            }
        }
    };
    const myChartData = {
        labels: chartTooltips,
        datasets: datasets
        //options: options
    };
    

	// Dynamic Buttons
}));