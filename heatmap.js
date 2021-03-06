const CSV_NAME = 'PUT YOUR CSV NAME HERE';

//ajax GET request to load the csv file and launch the heatmap
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: CSV_NAME,
        dataType: "text",
        success: function(data) {processData(data);}
    });
});

//Actual process function
function processData(allText) {
  //Split csv lines by return \n and by commas
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');
  var datapoints = [];

  //Here's where you need to write a loop that
  //goes through all of csv, at each line, and
  //pushes a heatmap data point onto the datapoints array
  //with the proper x and y values ()
  //A heatmap data point looks like this object:
  //{ x: ?, // x coordinate of the datapoint, a float 
  //  y: ?, // y coordinate of the datapoint, a float
  //  value: 50 // the value at datapoint(x, y) }
  //"value" is arbitrary, keep at 50 but is adjustable for more/
  //less intense maps

  //Hint: lookup parse float, and use the regex
  //string.match(/-?\d+\.\d+/) when pushing your
  //datapoints onto the datapoint array

  //Creates a heatmap instance
  var heatmapInstance = h337.create({
      container: document.querySelector('.heatmap')
  });

  //Initializes a heatmap data object with the lines
  //stack datapoints
  var data = {
    max: datapoints.length,
    min: 0,
    data: datapoints
  };

  //Displays heatmap
  heatmapInstance.setData(data);
}
