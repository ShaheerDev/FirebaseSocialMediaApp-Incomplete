
function press() {
var para = document.createElement("textarea");                       
var t = document.getElementById("postbox").value;
var n = document.getElementById("postname").value;     
para.setAttribute("cols", "20")
para.setAttribute("rows", "8")
if(t == ""){
  alert("Please enter your post.")
}else if(n == ""){
  alert("Please enter your name.")
}else if(t == "" || n == ""){
    alert("Please enter your name and post.")
}else{
para.innerHTML = "@" + n + " has posted: " + t
document.getElementById("userposts").appendChild(para);

var post = {
    postname: n,
    posttext: t,
}

var postkey = firebase.database().ref("userposts").push().key;
firebase.database().ref("userposts/" + postkey).set(post);

console.log("post_KEY got in Firebase database")
console.log(post)
}                       
}