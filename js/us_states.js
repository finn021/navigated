const states = ["alabama","alaska","arizona","arkansas","california","colorado","connecticut","delaware","florida","georgia","hawaii","idaho","illinois","indiana","iowa","kansas","kentucky","louisiana","maine","maryland","massachusetts","michigan","minnesota","mississippi","missouri","montana","nebraska","nevada","newhampshire","newjersey","newmexico","newyork","northcarolina","northdakota","ohio","oklahoma","oregon","pennsylvania","rhodeisland","southcarolina","southdakota","tennessee","texas","utah","vermont","virginia","washington","westvirginia","wisconsin","wyoming"];
var stateValues = new Array(50).fill(false);

$(answerInput).on("input", function (e) {
  if (typeof this.value !== "undefined") {
    var input = this.value.toLowerCase();
    var formattedInput = input.replace(/\W/g, "");
    if (states.includes(formattedInput)) {
      var index = states.indexOf(formattedInput);
      if (stateValues[index] == false) {
        stateValues[index] = true;
        console.log(stateValues);
        $("#answerInput").val("");
        var count = stateValues.reduce(function(n, val) {
        return n + (val === true); }, 0);
         $("#count").text(count + "/50");
        console.log(count);
      }
    }
  }
});
