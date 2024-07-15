import Login, { Title } from "../library/modules/login.js";
import Credit from "../library/modules/credit.js";
document.getElementById("lblTitle").innerHTML = Title();
document.getElementById("container").innerHTML = Login();
document.querySelector("section").innerHTML = Credit()