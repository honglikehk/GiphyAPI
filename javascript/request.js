$(document).ready(function() {
  // Initial array of movies
  var emotions = [
    "Sad",
    "Mad",
    "Happy",
    "Joy",
    "Loved",
    "Thankful",
    "Annoyed",
    "Bored",
    "Discouraged",
    "Tired",
    "Hopeful",
    "Excited",
    "Stressed"
  ];
  /*
  let queryURL =
    "https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=4nfHq8YkmeFlm6nHNmYviT4iZ4e3TfBx";

  $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
    console.log(response);
  });
  */
  // creating buttons and connecting it to ajax

  // Generic function for capturing the movie name from the data-attribute
  function alertEmotionName() {
    $("button").on("click", function() {
      let x = $(this).data("search");

      let queryURL =
        "https://api.giphy.com/v1/gifs/search?q=" +
        x +
        "&api_key=4nfHq8YkmeFlm6nHNmYviT4iZ4e3TfBx&limit=10";

      $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
          $("#GIFArea").append("<p> Rating: " + response.data[i].rating);
          $("#GIFArea").append(
            "<img src='" + response.data[i].images.downsized.url + "'>"
            // response.data[i].images.480w_still.url
          );
        }
      });
    });
    // YOUR CODE GOES HERE!!!
  }

  // Function for displaying movie data
  function renderButtons() {
    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < emotions.length; i++) {
      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("emotion");
      // Added a data-attribute
      a.attr("data-search", emotions[i]);
      // Provided the initial button text
      a.text(emotions[i]);
      // Added the button to the HTML
      $("#buttons-view").append(a);
    }
  }

  // This function handles events where one button is clicked
  $("#add-emotion").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var movie = $("#emotion-input")
      .val()
      .trim();

    // The movie from the textbox is then added to our array
    emotions.push(emotion);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Function for displaying the movie info
  // We're adding a click event listener to all elements with the class "movie"
  // We're adding the event listener to the document itself because it will
  // work for dynamically generated elements
  // $(".movies").on("click") will only add listeners to elements that are on the page at that time
  $(document).on("click", ".emotion", alertEmotionName);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();
});
