/*
    Author: Kaine van Ommeren
    Date: 20-12-2021
    Subject: Project portfolio website
*/
var subject = ["Plannen & Ontwerpen","Realiseren","Testen & Verbeteren",
    "Computervaardigheden","Burgerschap","Nederlands","Engels","Rekenen"];

var gradesPO = [6.0, 8.6, 7.8];
var gradesREA = [7.0, 6.7, 8.3];
var gradesTV = [8.7, 8.8, 8.9];
var gradesCOM = [7.0, 8.7, 7.8];
var gradesBUR = [8.5, 8.5, 8.5];
var gradesNED = [5.8, 7.1, 7.1];
var gradesENG = [10, 8, 6];
var gradesREK = [5.4, 8.0, 8];

var table = "";

function ApplyGrades(myGrades, mySubject)
{
    table += "<tr>";
    table += "<th>" + subject[mySubject] + "</th>";
    for (var i = 0; i < myGrades.length; i++)
    {
        table += "<td>" + myGrades[i] + "</td>";
    }
    table += "<td>" + GradeAverage(myGrades).toFixed(2) + "</td>";
    table += "</tr>";
}

function GradeAverage(subject)
{
    var gradeAverage = 0;
    for (var i = 0; i < subject.length; i++)
    {
        gradeAverage += subject[i];
    }
    return (gradeAverage / subject.length);
}

ApplyGrades(gradesPO, 0);
ApplyGrades(gradesREA, 1);
ApplyGrades(gradesTV, 2);
ApplyGrades(gradesCOM, 3);
ApplyGrades(gradesBUR, 4);
ApplyGrades(gradesNED, 5);
ApplyGrades(gradesENG, 6);
ApplyGrades(gradesREK, 7);

document.getElementById("bodyGrade").innerHTML = table;
