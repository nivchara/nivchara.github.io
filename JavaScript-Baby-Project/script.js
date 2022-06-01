function getInput(id) {
  return document.getElementById(id).value;
}


function plot() {
  var parameters = {
    target: '.target',
    data: [{
      fn: getInput("function"),
      color: getInput("color")
    }
    ],
    grid: true,
    yAxis: {
      domain: [
        getInput("yMin"),
        getInput("yMax")
      ]
    },
    xAxis: {
      domain: [getInput("xMin"),
      getInput("xMax")
    ]
    }
  }
  functionPlot(parameters);
}
