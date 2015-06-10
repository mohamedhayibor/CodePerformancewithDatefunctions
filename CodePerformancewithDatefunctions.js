var IP = ["Nipping Global Variable", "Sneaky Forin", "Bulging Blocking Script"],
GH = ["Switch Blocks", "Pesky Gnat", "Aiedra"],
inhabitants = [IP,GH];

function populationGetter(popn){
  var list = "";
  for(var i = 0, x = popn.length; i < x; i++){
    for(var j = 0; j < popn[i].length; j++){
      list += (popn[i][j] + ", ");
    }
  }
  return list;
}

populationGetter(inhabitants);

// no code edits above.

function SpeedTest (testImplement, testParams, repetitions) {
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 100000;
  this.average = 0;
}

SpeedTest.prototype = {
  startTest : function () {
  	var beginTime, endTime, sumTimes = 0;
  	for (var i = 0, x = this.repetitions; i < x; i++) {
      beginTime = +new Date();
      this.testImplement(testParams);
      endTime = +new Date();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    alert("The average time for " + this.repetitions + ": " +
												this.average);
  }
};

var bpTest = new SpeedTest(populationGetter, popn);
bpTest.startTest();