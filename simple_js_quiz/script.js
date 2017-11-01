/**
 * Created by vladimirs on 26.10.2017.
 */
function submitAnswers() {
    var total = 3;
    var score = 0;


    //get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;

    // validation


    for (i = 1; i <= total; i++) {
        if ((eval('q' + i) === '') || (eval('q' + i) === null)) {
            alert('Please answer question number ' + i);
            return false;
        }
    }



    return false;
}