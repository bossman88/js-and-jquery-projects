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

    var answers = ["b", "c","c"];
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) === answers[i-1]) {
            score++;
        }
    }

    var results = document.getElementById('results');
    results.innerHTML = '<h3> You scored ' + score + ' out of ' + total + ' points!';

    return false;
}