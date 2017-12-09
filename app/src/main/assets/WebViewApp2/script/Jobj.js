var func = {
  "dispMsg": "dispMsg"
};

alert("Old Func :\n"+JSON.stringify(func));
window[func.dispMsg]("Welcome");

func["dispMsg"] = "KT.dispMsg";
func2 = {};
func2["name"] = "Nishant";
func2["dispMsg"] = "NONE FUN";
Object.assign(func,func2);

alert("New Func :\n"+JSON.stringify(func));

