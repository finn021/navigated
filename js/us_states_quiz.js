let stateCodes = {
  alabama: "al",
  alaska: "ak",
  americansamoa: "as",
  arizona: "az",
  arkansas: "ar",
  california: "ca",
  colorado: "co",
  connecticut: "ct",
  delaware: "de",
  districtofcolumbia: "dc",
  federatedstatesofmicronesia: "fm",
  florida: "fl",
  georgia: "ga",
  guam: "gu",
  hawaii: "hi",
  idaho: "id",
  illinois: "il",
  indiana: "in",
  iowa: "ia",
  kansas: "ks",
  kentucky: "ky",
  louisiana: "la",
  maine: "me",
  marshallislands: "mh",
  maryland: "md",
  massachusetts: "ma",
  michigan: "mi",
  minnesota: "mn",
  mississippi: "ms",
  missouri: "mo",
  montana: "mt",
  nebraska: "ne",
  nevada: "nv",
  newhampshire: "nh",
  newjersey: "nj",
  newmexico: "nm",
  newyork: "ny",
  northcarolina: "nc",
  northdakota: "nd",
  northernmarianaislands: "mp",
  ohio: "oh",
  oklahoma: "ok",
  oregon: "or",
  palau: "pw",
  pennsylvania: "pa",
  puertorico: "pr",
  rhodeisland: "ri",
  southcarolina: "sc",
  southdakota: "sd",
  tennessee: "tn",
  texas: "tx",
  utah: "ut",
  vermont: "vt",
  virginislands: "vi",
  virginia: "va",
  washington: "wa",
  westvirginia: "wv",
  wisconsin: "wi",
  wyoming: "wy",
};

var states = ['alabama','alaska','american samoa','arizona','arkansas','california','colorado','connecticut','delaware','district of columbia','federated states of micronesia','florida','georgia','guam','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','marshall islands','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new hampshire','new jersey','new mexico','new york','north carolina','north dakota','northern mariana islands','ohio','oklahoma','oregon','palau','pennsylvania','puerto rico','rhode island','south carolina','south dakota','tennessee','texas','utah','vermont','virgin island','virginia','washington','west virginia','wisconsin','wyoming'];

var stateValues = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

$(document).ready(function () {
  $("#map").usmap({});
});

$(answerInput).on('input',function(e){
  if (typeof this.value !== 'undefined') {
    var input = this.value.toLowerCase();
    var formattedInput = semirawinput.replace(/\W/g, '');
    if (states.includes(formattedInput) {
 	    var index = states.indexOf(input);
      people[index] = true;
      $(answerInput).value = "";
      updateMap();
      updateCount();
      updateGraph();
}
}
});
