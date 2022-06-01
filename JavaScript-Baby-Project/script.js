function getInput(id) {
  return document.getElementById(id).value;
}


function plot() {
  var parameters = {
    target: '.target',
    data: [{
      fn: getInput("function"),
      color: 'red'
    }
    ],
    grid: true,
    yAxis: {
      domain: [
        parseInt(getInput("yMin")),
        parseInt(getInput("yMax"))
      ]
    },
    xAxis: {
      domain: [parseInt(getInput("xMin")),
      parseInt(getInput("xMax"))
    ]
    }
  }
  functionPlot(parameters);
}
