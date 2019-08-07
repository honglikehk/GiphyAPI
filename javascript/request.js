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

  function createEmotionGifs() {
    $("button").on("click", function() {
      let x = $(this).data("search");
      alert("yay");

      let queryURL =
        "https://api.giphy.com/v1/gifs/search?q=" +
        x +
        "&api_key=4nfHq8YkmeFlm6nHNmYviT4iZ4e3TfBx&limit=10";

      $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
        for (var i = 0; i < response.data.length; i++) {
          $("#GIFArea").append("<p> Rating: " + response.data[i].rating);
          $("#GIFArea").append(
            "<img src='" + response.data[i].images.downsized.url + "'>"
            // response.data[i].images.480w_still.url
          );
        }
      });
    });
  }

  // display the buttons for emotions
  function renderButtons() {
    $("#buttons-view").empty();
    // looping through the array of emotions
    for (var i = 0; i < emotions.length; i++) {
      var a = $("<button>");
      a.addClass("emotion");
      a.attr("data-search", emotions[i]);
      a.text(emotions[i]);
      $("#buttons-view").append(a);
    }
  }

  // This function handles events where one button is clicked
  $("#add-emotion").on("click", function(event) {
    event.preventDefault();

    let emotion = $("#emotion-input")
      .val()
      .trim();

    emotions.push(emotion);

    renderButtons();
  });

  $(document).on("click", ".emotion", createEmotionGifs);
  renderButtons();
});
