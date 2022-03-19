// code your solution here
 function saturdayFun(activity = "roller-skate"){
    var printActivity = `This Saturday, I want to ${activity}!`;
    return printActivity;

}

function mondayWork(activity = "go to the office"){
    var printActivity = `This Monday, I will ${activity}.`;
    return printActivity;

}

function wrapAdjective(input ="*") {
    return function(adj="special") {
      return `You are ${input}${adj}${input}!`;
}
}