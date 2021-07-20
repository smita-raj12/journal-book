import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from "./journal.js";

$(document).ready(function(){
  $("form#jouralForm").submit(function(event){
    event.preventDefault();
    const title = $("#title").val();
    const passage = $("#body").val().toLowerCase();
    const entry = new Entry();
    const vowelWords=entry.vowels(passage);
    const response = entry.numOfWords(passage);
    $("#vowel").text(vowelWords);
    $('#titleres').text(title);
    $("#total-words").text(response);
  });
});