var colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5',
    '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50',
    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
    '#FF5722', '#9E9E9E', '#607D8B'
  ];
  
  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  function getQuote() {
    $.ajax({
      url: "https://api.quotable.io/random",
      method: "GET",
      dataType: "json",
      success: function(data) {
        console.log("API Response:", data); // Log the response data
        var quote = data.content;
        var author = data.author;
        $("#quote").animate({ opacity: 0 }, 500, function() {
          $(this).animate({ opacity: 1 }, 500);
          $("#quote").html(quote);
        });
  
        $("#author").animate({ opacity: 0 }, 500, function() {
          $(this).animate({ opacity: 1 }, 500);
          $("#author").html(author);
        });
  
        $(".card").animate({ opacity: 0 }, 500, function() {
          $(this).animate({ opacity: 1 }, 500);
        });
  
        var color = randomColor();
        $("body").animate({ backgroundColor: color }, 1000);
      },
      error: function(xhr, status, error) {
        console.error("API Request Failed:", status, error); // Log the error
        $("#quote").html('Error fetching quote');
        $("#author").html('');
      }
    });
  }
  
  $(document).ready(function() {
    getQuote();
    $("#btn").click(function() {
      getQuote();
    });
  });
  