function clickHandler(e){
    var activePoints = chart.getElementsAtEventForMode(evt, 'nearest',{intersect: true}, true);
    if(activePoints[0]){
        const label = chart.data.labels[activePoints[0].index];
        var bv = chart.data.datasets[activePoints[0].datasetIndex].data[activePoints[0].index];

        console.log(label, bv);
    }
}

const chartLabels = setActiveHours(8,20);
const datasets = [{
    label:'Hourly',
    data: [0,20,23,28,31,31,31,30],
    backgroundColor: CHART_COLORS.blue,
    borderColor: transparentize(CHART_COLORS.blue,0.5)
}];
const options = {
    parsing: {
        xAxisKey: 'id',
        yAxisKey: 'value'
    },
    onClick: clickHandler
};
const myChartData = {
    labels: chartLabels,
    datasets: datasets,
    //options: options
};


//Utils.buildDataModel(Utils.months({count:7}),'Sales',[500,234,1243,89,55,432,908]),
//Utils.buildDataModel(Utils.months({count:7}),'Products',[222,987,3345,128,44,2345,872]),
