var data = [];

const states = [
    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
    'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas',
    'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota',
    'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'newhampshire', 'newjersey',
    'newmexico', 'newyork', 'northcarolina', 'northdakota', 'ohio', 'oklahoma', 'oregon',
    'pennsylvania', 'rhodeisland', 'southcarolina', 'southdakota', 'tennessee', 'texas', 'utah',
    'vermont', 'virginia', 'washington', 'westvirginia', 'wisconsin', 'wyoming'
];
const statesFormatted = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
    'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
    'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
const stateCodes = {
    'arizona': 'az',
    'alabama': 'al',
    'alaska': 'ak',
    'arkansas': 'ar',
    'california': 'ca',
    'colorado': 'co',
    'connecticut': 'ct',
    'delaware': 'de',
    'florida': 'fl',
    'georgia': 'ga',
    'hawaii': 'hi',
    'idaho': 'id',
    'illinois': 'il',
    'indiana': 'in',
    'iowa': 'ia',
    'kansas': 'ks',
    'kentucky': 'ky',
    'louisiana': 'la',
    'maine': 'me',
    'maryland': 'md',
    'massachusetts': 'ma',
    'michigan': 'mi',
    'minnesota': 'mn',
    'mississippi': 'ms',
    'missouri': 'mo',
    'montana': 'mt',
    'nebraska': 'ne',
    'nevada': 'nv',
    'newhampshire': 'nh',
    'newjersey': 'nj',
    'newmexico': 'nm',
    'newyork': 'ny',
    'northcarolina': 'nc',
    'northdakota': 'nd',
    'ohio': 'oh',
    'oklahoma': 'ok',
    'oregon': 'or',
    'pennsylvania': 'pa',
    'rhodeisland': 'ri',
    'southcarolina': 'sc',
    'southdakota': 'sd',
    'tennessee': 'tn',
    'texas': 'tx',
    'utah': 'ut',
    'vermont': 'vt',
    'virginia': 'va',
    'washington': 'wa',
    'westvirginia': 'wv',
    'wisconsin': 'wi',
    'wyoming': 'wy',
};

var stateValues = new Array(50).fill(false);
$(document).ready(function() {
    intMap();
    $(".navbar").load("../comp/navbar.html");
});

$(answerInput).on("input", function(e) {
    if (typeof this.value !== "undefined") {}
    var input = this.value.toLowerCase();
    var formattedInput = input.replace(/\W/g, "");
    if (states.includes(formattedInput)) {
        var index = states.indexOf(formattedInput);
        if (stateValues[index] == false) {
            stateValues[index] = true;
            $("#answerInput").val("");
            var count = stateValues.reduce(function(n, val) {
                return n + (val === true);
            }, 0);
            $("#count").text(count + "/50");
            var stateCode = stateCodes[formattedInput];
            console.log('us-' + stateCode);
            data.push(['us-' + stateCode, 1]);
            intMap();
            // document.getElementById("cell" + index).style.visibility = "visible";
        }
    }
});

function intMap() {
    Highcharts.mapChart('map-container', {
        chart: {
            map: 'countries/us/us-all'
        },
        colors: ['rgba(70,235,52,1)'],

        mapNavigation: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            nullColor: '#333333',
            data: data,
            name: 'States Found',

            dataLabels: {
                enabled: false
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: '#ffffff',
            nullColor: '#ffffff',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
}
