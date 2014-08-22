
window.recaptcha = {};
window.recaptcha.plot = {};
recaptcha.plot.dataplot = function(jsonData) {
  var container = $("#placeholder");
  var rocDiv = document.createElement('div');
  rocDiv.id = 'roc';
  rocDiv.style.width=400;
  rocDiv.style.height=400;

  container.append(rocDiv);

  var rocPrDiv = document.createElement('div');
  rocPrDiv.id = 'rocPr';
  rocPrDiv.style.width=400;
  rocPrDiv.style.height=400;
  container.append(rocPrDiv);

  $.plot(rocDiv, [{label: "ROC : " + jsonData.roc_auc,
    data: jsonData.roc,
    lines: { show: true }
  }], {

    xaxis: {
      ticks: 10,
      min: 0,
      max: 1,
      tickDecimals: 1
    },
    yaxis: {
      ticks: 10,
      min: 0,
      max: 1,
      tickDecimals: 1
    },
    grid: {
      backgroundColor: { colors: [ "#fff", "#eee" ] },
      borderWidth: {
        top: 1,
        right: 1,
        bottom: 2,
        left: 2
      }
    }
  }
  );

  $.plot(rocPrDiv, [{label: "ROC-PR : " + jsonData.pr_auc,
    data: jsonData.pr,
    lines: { show: true }
  }], {

    xaxis: {
      ticks: 10,
      min: 0,
      max: 1,
      tickDecimals: 1
    },
    yaxis: {
      ticks: 10,
      min: 0,
      max: 1,
      tickDecimals: 1
    },
    grid: {
      backgroundColor: { colors: [ "#fff", "#eee" ] },
      borderWidth: {
        top: 1,
        right: 1,
        bottom: 2,
        left: 2
      }
    }
  }
  );

  /*
     var yaxisLabel = $("<div class='axisLabel yaxisLabel'></div>")
     .text("TPR")
     .appendTo(container);
     yaxisLabel.css("margin-top", yaxisLabel.width() / 2 - 20);
     var xaxisLabel = $("<div class='axisLabel xaxisLabel'></div>")
     .text("FPR")
     .appendTo(container);
     xaxisLabel.css("margin-left", xaxisLabel.width() / 2 - 20);
     */
};

