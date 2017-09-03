(function() {

  $(function() {

    let newQuestion = "http://jservice.io/api/random";

    //new Questions
    let loadQuestion;
    let loadAnswer;
    let loadCategory;
    let loadPoints;

    //Score
    let correctAnswerCounter = 0;
    let labelScore = $("#score").html(correctAnswerCounter);
    let previousAnswer;

    //function to generate new question
    generateNewQuestion();
    console.log ("test")
    function generateNewQuestion() {

      $.get(newQuestion, function(data) {

        loadCategory = data[0].category.title;
        loadValue = parseInt(data[0].value);
        loadQuestion = data[0].question;
        loadAnswer = data[0].answer;

        console.log(loadCategory);
        console.log(loadValue);
        console.log(loadAnswer);
        console.log(loadCategory);

        let labelCategory = $("#category").html("Category: " + loadCategory.toUpperCase());
        let labelValue = $("#value").html("Points: " + loadValue);
        let labelQuestion = $("#question").html("Question: " + loadQuestion);
        //let labelAnswer = $("#answer").html(loadAnswer);

      })

    }

    $("#send").click(function() {
      let userGuess_textBox = $('#userGuess').val();
      let trimUserGuess_textBox = $.trim(userGuess_textBox);



      if (trimUserGuess_textBox != "" ){
        if (trimUserGuess_textBox.toLowerCase() == loadAnswer.toLowerCase()){

          correctAnswerCounter = correctAnswerCounter + loadValue;
          console.log("your answer: " + trimUserGuess_textBox + " matches: " + loadAnswer)
          $("#score").html("");
          labelScore = $("#score").html(correctAnswerCounter);
          previousAnswer = $("#previousAnswer").html("Correct!, the aswer is: " + loadAnswer);


        }
        else if (trimUserGuess_textBox.toLowerCase() != loadAnswer.toLowerCase())
        {
          previousAnswer = $("#previousAnswer").html("incorrect, the aswer is" + loadAnswer);
        }

        generateNewQuestion();


      }

      $("#userGuess").html("");


    });






  })
})()
