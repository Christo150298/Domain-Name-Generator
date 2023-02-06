import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let pronounIndx = 0; pronounIndx < pronoun.length; pronoun++) {
    console.log(pronoun[pronounIndx]);
    for (let adjIndx = 0; adjIndx < adj.length; adj++) {
      console.log(adj[adjIndx]);
      for (let nounIndx = 0; nounIndx < noun.length; noun++) {
      console.log(noun[nounIndx]);
      }
    }
  };
