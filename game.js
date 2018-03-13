<!DOCTYPE html>
<html>
<head>
  <title>simple crystal game</title>
  
  <style type="text/css">

    .crystal-image {
      width: 300px;
      height: 300px;
    }
  </style>

</head>
<body>

  <h1>Number to Guess: <span id="number-to-guess"></span></h1>

  <div id="crystals">
  </div>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <script type="text/javascript">;

 var targetNumber = 53;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;


  var numberOptions = [10, 5, 3, 7];


  for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {

    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });

  </script>
</body>
</html>