const htmlbody = (obj) => 
`<!DOCTYPE html>
<html>
    <head>
        <title>Calculator Challenge</title>
        <!--bootstrap-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="jumbotron">
            <h1 class="display-4" style="text-align: center;">CALCULATOR</h1>
        </div>
        <div class="container">
            <div class="row"  style="padding-bottom: 10px;">
                <form class="form-inline" >
                    <div class="col"> Numbers Input
                        <div class="form-group mb-2 ">
                            <textarea name="numberinput" class="form-control" id="stringtoaddinput" cols="20" rows="1" style="margin-right: 10px;"></textarea>
                        </div>
                        <!--Note: to add other operations on the calculator I can just add a button for new operation-->
                        <button type="submit" class="btn btn-primary mb-2" id="additionButton">Add</button>
                    </div>
                </form>
            </div>
            <div class="row"  style="padding-bottom: 10px; margin-left: 1%;">
                <div>Result: ${obj.finalResultStr}</div>
            </div>
            <div class="row"  style="padding-bottom: 10px; margin-left: 1%;">
                <div>${obj.comment}</div> 
            </div>
        </div>
        <div class="row" style="background-color:lightskyblue;">
            <ul> INPUT INSTRUCTIONS: 
                <li>Please provide a list of numbers separated by a single character delimiter of your choice</li>
                <li>Format: //{delimiter}\n{numbers}</li>
                <li>Example: //#\n2#5</li>
            </ul>
        </div>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!--<script src="./public/assets/js/index.js"></script>-->
    <script type="text/javascript">
      $("#additionButton").on("click", function(event) {
        console.log("click add button")
        event.preventDefault();
        var newObj = {
            stringToAdd: $("#stringtoaddinput").val()
        };
        console.log('new string captured')
        console.log(newObj)
        $.post("/", newObj)
          .then(function(data) {
            location.reload();
          });
      });
    </script>
</html>`

module.exports = htmlbody;