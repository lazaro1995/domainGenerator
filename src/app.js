/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  //let ext = [".com", ".net", ".us", ".io"];

  //var whenLength = ext.length;

  function firstOnload() {
    //result += ext[Math.floor(Math.random() * whenLength)];
    //console.log(Math.floor(Math.random() * whatLength))
    let result1 = [];
    var result = "";
    pronoun = ["the", "our"];
    var flag = false;
    var flag1 = false;
    var flag2 = false;
    var temp = "";
    var temp1 = "";
    var temp2 = "";
    var tempTest = "";
    var tempTest1 = "";

    for (let i = 0; i < 2; i++) {
      result = "";
      adj = ["great", "big"];
      flag1 = false;
      if (flag && temp === "the") {
        pronoun.shift();
      } else if (flag && temp === "our") {
        pronoun.pop();
      }
      flag = true;
      temp = pronoun[Math.floor(Math.random() * pronoun.length)];
      result = temp;

      for (let j = 0; j < 2; j++) {
        noun = ["jogger", "racoon"];
        flag2 = false;
        if (flag1 && temp1 === "great") {
          adj.shift();
        } else if (flag1 && temp1 === "big") {
          adj.pop();
        } else {
          tempTest1 = result;
        }
        flag1 = true;
        temp1 = adj[Math.floor(Math.random() * adj.length)];
        if (adj.length == 1) {
          if (pronoun.length == 1) {
            tempTest1 = pronoun[0];
          }
          result = tempTest1;
        }
        result += temp1;
        for (let x = 0; x < 2; x++) {
          if (flag2 && temp2 === "jogger") {
            noun.shift();
          } else if (flag2 && temp2 === "racoon") {
            noun.pop();
          }
          temp2 = noun[Math.floor(Math.random() * noun.length)];
          tempTest = result;
          result += temp2 + ".com" + "\n";
          console.log(result);
          result1.push(result);
          flag2 = true;
          result = tempTest;
        }
      }
    }
    document.getElementById("excuse").innerHTML = result1;
  }

  document.getElementById("btn").addEventListener("click", firstOnload);
};
