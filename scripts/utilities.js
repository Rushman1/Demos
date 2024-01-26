
function points(config) {
    const xs = this.numbers(config);
    const ys = this.numbers(config);
    return xs.map((x, i) => ({ x, y: ys[i] }));
}
function bubbles(config) {
    return this.points(config).map(pt => {
        pt.r = this.rand(config.rmin, config.rmax);
        return pt;
    });
}
function labels(config) {
    var cfg = config || {};
    var min = cfg.min || 0;
    var max = cfg.max || 100;
    var count = cfg.count || 8;
    var step = (max - min) / count;
    var decimals = cfg.decimals || 8;
    var dfactor = Math.pow(10, decimals) || 0;
    var prefix = cfg.prefix || '';
    var values = [];
    var i;
    for (i = min; i < max; i += step) {
        values.push(prefix + Math.round(dfactor * i) / dfactor);
    }
    return values;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */
function valueOrDefault(value, defaultValue) {
    return typeof value === 'undefined' ? defaultValue : value;
}
function numbers(config) {
    var cfg = config || {};
    var min = valueOrDefault(cfg.min, 0);
    var max = valueOrDefault(cfg.max, 100);
    var from = valueOrDefault(cfg.from, []);
    var count = valueOrDefault(cfg.count, 8);
    var decimals = valueOrDefault(cfg.decimals, 8);
    var continuity = valueOrDefault(cfg.continuity, 1);
    var dfactor = Math.pow(10, decimals) || 0;
    var data = [];
    var i, value;
    for (i = 0; i < count; ++i) {
        value = (from[i] || 0) + this.rand(min, max);
        if (this.rand() <= continuity) {
            data.push(Math.round(dfactor * value) / dfactor);
        }
        else {
            data.push(null);
        }
    }
    return data;
}
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const HOURS = [
    {index: 0, label: '12 am'},
    {index: 0.5, label: '12:30 am'},
    {index: 1, label: '1 am'},
    {index: 1.5, label: '1:30 am'},
    {index: 2, label: '2 am'},
    {index: 2.5, label: '2:30 am'},
    {index: 3, label: '3 am'},
    {index: 3.5, label: '3:30 am'},
    {index: 4, label: '4 am'},
    {index: 4.5, label: '4:30 am'},
    {index: 5, label: '5 am'},
    {index: 5.5, label: '5:30 am'},
    {index: 6, label: '6 am'},
    {index: 6.5, label: '6:30 am'},
    {index: 7, label: '7 am'},
    {index: 7.5, label: '7:30 am'},
    {index: 8, label: '8 am'},
    {index: 8.5, label: '8:30 am'},
    {index: 9, label: '9 am'},
    {index: 9.5, label: '9:30 am'},
    {index: 10, label: '10 am'},
    {index: 10.5, label: '10:30 am'},
    {index: 11, label: '11 am'},
    {index: 11.5, label: '11:30 am'},
    {index: 12, label: '12 pm'},
    {index: 12.5, label: '12:30 pm'},
    {index: 13, label: '1 pm'},
    {index: 13.5, label: '1:30 pm'},
    {index: 14, label: '2 pm'},
    {index: 14.5, label: '2:30 pm'},
    {index: 15, label: '3 pm'},
    {index: 15.5, label: '3:30 pm'},
    {index: 16, label: '4 pm'},
    {index: 16.5, label: '4:30 pm'},
    {index: 17, label: '5 pm'},
    {index: 17.5, label: '5:30 pm'},
    {index: 18, label: '6 pm'},
    {index: 18.5, label: '6:30 pm'},
    {index: 19, label: '7 pm'},
    {index: 19.5, label: '7:30 pm'},
    {index: 20, label: '8 pm'},
    {index: 20.5, label: '8:30 pm'},
    {index: 21, label: '9 pm'},
    {index: 21.5, label: '9:30 pm'},
    {index: 22, label: '10 pm'},
    {index: 22.5, label: '10:30 pm'},
    {index: 23, label: '11 pm'},
    {index: 23.5, label: '11:30 pm'}
];
function setActiveHours(start, end) {
    const sIndex = HOURS.findIndex((a)=>a.index===start);
    const eIndex = HOURS.findIndex((a)=>a.index===end);
    var blah = HOURS.slice(sIndex, eIndex + 1);
    var labels = [];
    for(let i = 0; i < blah.length; i++){
        if(blah[i].index %1 === 0){
            labels.push(blah[i].label);
        } else {
            labels.push('');
        }
    }
    return labels;
}
function setActiveTooltips(start, end) {
    const sIndex = HOURS.findIndex((a)=>a.index===start);
    const eIndex = HOURS.findIndex((a)=>a.index===end);
    var blah = HOURS.slice(sIndex, eIndex + 1);
    var labels = [];
    for(let i = 0; i < blah.length; i++){
        labels.push(blah[i].label);
    }
    return labels;
}

function months(config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;
    for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
    }
    return values;
}
const COLORS = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba',
    '#ffbb33'
];
function color(index) {
    return COLORS[index % COLORS.length];
}
function transparentize(value, opacity) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return `rgba(${value.replace('rgb(', '').replace(')', '')},${alpha})`;
}
const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
    warning: '#ffbb33'
};
const NAMED_COLORS = [
    CHART_COLORS.red,
    CHART_COLORS.orange,
    CHART_COLORS.yellow,
    CHART_COLORS.green,
    CHART_COLORS.blue,
    CHART_COLORS.purple,
    CHART_COLORS.grey,
];
