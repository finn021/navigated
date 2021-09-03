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

var states = ['alabama','alaska','americansamoa','arizona','arkansas','california','colorado','connecticut','delaware','districtofcolumbia','federatedstatesofmicronesia','florida','georgia','guam','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','marshall islands','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','newhampshire','newjersey','newmexico','newyork','northcarolina','northdakota','northernmarianaislands','ohio','oklahoma','oregon','palau','pennsylvania','puertorico','rhodeisland','southcarolina','southdakota','tennessee','texas','utah','vermont','virginisland','virginia','washington','westvirginia','wisconsin','wyoming'];

var stateValues = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

$(answerInput).on('input',function(e){
  if (typeof this.value !== 'undefined') {
    var input = this.value.toLowerCase();
    var formattedInput = input.replace(/\W/g, '');
    if (states.includes(formattedInput)) {
 	    var index = states.indexOf(formattedInput);
      if (stateValues[index] == false) {
      stateValues[index] = true;
      console.log(stateValues)
      $('#answerInput').val('');
      console.log(stateValues)
      updateMap();
      updateCount();
      updateGraph();
      }
      
}
}
});
