var label = document.getElementById('label').innerHTML;
var jObj = window;        // Window Object to Manipulate from Kotlin

setTimeout(function() {   // Show a Greet Message after 0.4 sec of loading JS
  jObj.greet();
}, 400);


function greet() {
  alert("Hello, JS !!");
}

function setLabel(msg) {
    if (msg=="")
        msg = label;

    document.getElementById('label').innerHTML = msg;
}

function dispMsg(msg) {
  if (msg=="")
    msg = "Enter some text...";
  else
    msg = "Msg : " + msg;

  alert(msg);
}

function show() {
  var msg = document.getElementById('msg');
  setLabel(msg.value);
  jObj.dispMsg(msg.value);
  msg.value = "";
}


/*
// Code Injected in JS from Kotlin :-
// - - - - - - - - - - - - - - - -
try { jObj = eval(KT.getSrc()); } catch(err) { jObj = window; }

// Where KT is actually the valur of J_OBJ
// given by using, $J_OBJ


// Actual Kotlin Code :-
// - - - - - - - - - -
myWebView.loadUrl("javascript: try { jObj = eval($J_OBJ.getSrc());} catch(err) { jObj = window; }")
*/
