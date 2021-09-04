var data = [];
data.push(['us-al', 1]);
data.push(['us-ca', 2]);

Highcharts.mapChart('map-container', {
    chart: {
        map: 'countries/us/us-all'
    },
   mapNavigation: {
        enabled: false
   },
    tooltip: {
        enabled: false
    },
  dataLabels: {
        enabled: false
  },
    colorAxis: {
                dataClasses: [{
                    to: 1
                }, {
                    from: 2,
                }]
            },
      series: [{
        data: data,
        name: 'States Found',
          
        dataLabels: {
            enabled: false
        }
    }, {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
        color: 'black',
        nullColor: 'black',
        showInLegend: false,
        enableMouseTracking: false
    }]
});
const states = [
  'alabama','alaska','arizona','arkansas','california','colorado','connecticut',
  'delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas',
  'kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota',
  'mississippi','missouri','montana','nebraska','nevada','newhampshire','newjersey',
  'newmexico','newyork','northcarolina','northdakota','ohio','oklahoma','oregon',
  'pennsylvania','rhodeisland','southcarolina','southdakota','tennessee','texas','utah',
  'vermont','virginia','washington','westvirginia','wisconsin','wyoming'
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

var stateValues = new Array(50).fill(false);

var body = document.body;
var tbl = document.createElement('table');
tbl.style.width  = '100px';
tbl.style.border = '1px solid black';
tbl.style.tableLayout = 'auto';
tbl.style.width = '100%';
for (var i = 0; i < 50; i++) {
  var tr = tbl.insertRow();
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 1) {
        break;
       } else {
         var td = tr.insertCell();
         td.appendChild(document.createTextNode(statesFormatted[i]));
         td.setAttribute("id", "cell" + i, 0);
         td.style.visibility = "hidden";
       }
     }
   }
body.appendChild(tbl);

$(answerInput).on("input", function (e) {
  if (typeof this.value !== "undefined") {
    var input = this.value.toLowerCase();
    var formattedInput = input.replace(/\W/g, "");
    if (states.includes(formattedInput)) {
      var index = states.indexOf(formattedInput);
      if (stateValues[index] == false) {
        stateValues[index] = true;
        $("#answerInput").val("");
        var count = stateValues.reduce(function(n, val) {
        return n + (val === true); }, 0);
         $("#count").text(count + "/50");
        console.log("cell" + index);
        document.getElementById("cell" + index).style.visibility = "visible";
      }
    }
  }
});
