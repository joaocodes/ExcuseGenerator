/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  function randjoao(max) {
    return Math.floor(Math.random() * (max - 0));
  }

  let who = ["My Brother", "My girlfriend", "My pet dragon"];
  let how = ["ripped my homework", "burned my homework", "lost my homework"];
  let when = ["two days ago", "last week", "yesterday"];

  let excusejoao = document.querySelector("#excuse");

  excusejoao.innerHTML =
    who[randjoao(who.length)] +
    " " +
    how[randjoao(how.length)] +
    " " +
    when[randjoao(when.length)] +
    " ";
};
