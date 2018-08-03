import { Human } from './planetary-life.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    let name = $("#name").val();
    let birthdate = $("#date").val();
    let gender = $("#gender").val();
    let newHuman = new Human(name, gender, birthdate);
    // newHuman.runPlanets();
    $("#lifeMercury").text(newHuman.gender);
    $("#ageMercury").text(newHuman.name);
  });



});
