import { Human } from './planetary-life';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function(){
  $("#form").submit(function(){
      let name = $("#name").val();
      let birthdate = $("#date").val();
      let gender = $("#gender").val();
      const human = new Human(name, gender, birthdate);
      human.runPlanets();
  });
  $()
});
