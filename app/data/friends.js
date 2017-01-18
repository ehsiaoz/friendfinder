
//Buttons======================================
$("#submit").on('click',function(event){
  var surveyAnswers = [$('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(),
                     $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val(),];
   event.preventDefault();
   var newProfile = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores: surveyAnswers,
   };
   // console.log(newProfile);
   $.post("/api/survey", newProfile)
   .done(function(response){
      console.log("this is response: ", response);

    // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#matchName").text(response.name);
        $('#matchImg').attr("src", response.photo);

        // Show the modal with the best match 
        $("#resultsModal").modal('toggle');
   });
});


  // <script type="text/javascript">

  //  // Chosen CSS
  //   var config = {
  //     '.chosen-select'           : {},
  //     '.chosen-select-deselect'  : {allow_single_deselect:true},
  //     '.chosen-select-no-single' : {disable_search_threshold:10},
  //     '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
  //     '.chosen-select-width'     : {width:"95%"}
  //   }
  //   for (var selector in config) {
  //     $(selector).chosen(config[selector]);
  //   }

  //   // Capture the form inputs 
  //   $("#submit").on("click", function(){

  //     // Form validation
  //     function validateForm() {
  //       var isValid = true;
  //       $('.form-control').each(function() {
  //         if ( $(this).val() === '' )
  //             isValid = false;
  //       });

  //       $('.chosen-select').each(function() {

  //        if( $(this).val() === "")
  //           isValid = false
  //       })
  //       return isValid;
  //     }

  //     // If all required fields are filled
  //     if (validateForm() == true)
  //     {
  //        // Create an object for the user's data
  //        var userData = {
  //           name: $("#name").val(),
  //           photo: $("#photo").val(),
  //           scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
  //        }


  //        // Grab the URL of the website
  //        var currentURL = window.location.origin;

  //        // AJAX post the data to the friends API. 
  //        $.post(currentURL + "/api/friends", userData, function(data){

  // //           // Grab the result from the AJAX post so that the best match's name and photo are displayed.
  //           $("#matchName").text(data.name);
  //           $('#matchImg').attr("src", data.photo);

  //           // Show the modal with the best match 
  //           $("#resultsModal").modal('toggle');

  //        });
  //     }
  //     else
  //     {
  //        alert("Please fill out all fields before submitting!");
  //     }
      
  //     return false;
  //   });


  // </script>