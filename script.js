let head1 = document.getElementById("h1")
let head2 = document.getElementById("h2")
let head3 = document.getElementById("h3")
let head4 = document.getElementById("h4")
let head5 = document.getElementById("h5")

let para1 = document.getElementById("p1")
let para2 = document.getElementById("p2")
let para3 = document.getElementById("p3")
let para4 = document.getElementById("p4")
let para5 = document.getElementById("p5")

head1.addEventListener("click", f1);
function f1() {
    if (para1.innerHTML === "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.") {
        para1.innerHTML = " ";
    }else{
        para1.innerHTML = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";
    }
}
head2.addEventListener("click", f2);
function f2() {
    if (para2.innerHTML === "No more than 2GB. All files in your account must fit your allotted storage space.") {
        para2.innerHTML = " ";
    }else{
        para2.innerHTML = "No more than 2GB. All files in your account must fit your allotted storage space.";
    }
}
head3.addEventListener("click", f3);
function f3() {
    if (para3.innerHTML === "Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.") {
        para3.innerHTML = " ";
    }else{
        para3.innerHTML = "Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.";
    }
}
head4.addEventListener("click", f4);
function f4() {
    if (para4.innerHTML === "Yes! Send us a message and we’ll process your request no questions asked.") {
        para4.innerHTML = " ";
    }else{
        para4.innerHTML = "Yes! Send us a message and we’ll process your request no questions asked.";
    }
}
head5.addEventListener("click", f5);
function f5() {
    if (para5.innerHTML === "Chat and email support is available 24/7. Phone lines are open during normal business hours.") {
        para5.innerHTML = " ";
    }else{
        para5.innerHTML = "Chat and email support is available 24/7. Phone lines are open during normal business hours.";
    }
}