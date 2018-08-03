import { Human } from './planetary-life.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function(){
  $("#hide").hide();
  $("#form").submit(function(event){
    event.preventDefault();
    let name = $("#name").val();
    let birthdate = $("#date").val();
    let gender = $("#gender").val();
    let newHuman = new Human(name, gender, birthdate);
    newHuman.runPlanets();
    $("#hide").show();
    $("#lifeMercury").text(newHuman.lifeExMerc);
    $("#ageMercury").text(newHuman.ageMerc);
    $("#lifeVenus").text(newHuman.lifeExV);
    $("#ageVenus").text(newHuman.ageV);
    $("#lifeMars").text(newHuman.lifeExMar);
    $("#ageMars").text(newHuman.ageMar);
    $("#lifeJupiter").text(newHuman.lifeExJup);
    $("#ageJupiter").text(newHuman.ageJup);
  });



});
