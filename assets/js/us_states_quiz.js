let stateCodes = {
"alabama":"al",
"alaska":"ak",
"americansamoa":"as",
"arizona":"az",
"arkansas":"ar",
"california":"ca",
"colorado":"co",
"connecticut":"ct",
"delaware":"de",
"districtofcolumbia":"dc",
"federatedstatesofmicronesia":"fm",
"florida":"fl",
"georgia":"ga",
"guam":"gu",
"hawaii":"hi",
"idaho":"id",
"illinois":"il",
"indiana":"in",
"iowa":"ia",
"kansas":"ks",
"kentucky":"ky",
"louisiana":"la",
"maine":"me",
"marshallislands":"mh",
"maryland":"md",
"massachusetts":"ma",
"michigan":"mi",
"minnesota":"mn",
"mississippi":"ms",
"missouri":"mo",
"montana":"mt",
"nebraska":"ne",
"nevada":"nv",
"newhampshire":"nh",
"newjersey":"nj",
"newmexico":"nm",
"newyork":"ny",
"northcarolina":"nc",
"northdakota":"nd",
"northernmarianaislands":"mp",
"ohio":"oh",
"oklahoma":"ok",
"oregon":"or",
"palau":"pw",
"pennsylvania":"pa",
"puertorico":"pr",
"rhodeisland":"ri",
"southcarolina":"sc",
"southdakota":"sd",
"tennessee":"tn",
"texas":"tx",
"utah":"ut",
"vermont":"vt",
"virginislands":"vi",
"virginia":"va",
"washington":"wa",
"westvirginia":"wv",
"wisconsin":"wi",
"wyoming":"wy"
};

$(document).ready(function() {
    $('#map').usmap({});
  });

$('#map').usmap({
  stateStyles: {fill: '#000000', stroke: "#ffffff"},
  stateHoverStyles: {fill: '#121212', stroke: "#ffffff"},
  showLabels: false
});

$('#text').keyup(function(event) {
   if($('#text').val() != lastentry) {       
   }
   lastentry = $('#text').val()
   $('#map').usmap({
  stateSpecificStyles: {
    'stateCodes[lastentry].toUpperCase()' : {fill: 'yellow'}
  } 
  }
});
