function getfile(file,callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")
{
      callback(xhr.responseText);
  }
  };
  xhr.send(null);
}
getfile("a.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.CareerObjective);
})
var child = document.querySelector(".childone")

function details(det){
  var name = document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);
  var phoneno = document.createElement("h1");
  phoneno.textContent = det.phoneno;
  child.appendChild(phoneno);
  var mail = document.createElement("a");
  mail.href = "mailto:talagadadeevichandana@gmail.com";
  mail.textContent = det.email;
  child.appendChild(mail);
  var Address = document.createElement("p");
  Address.textContent = det.Address;
  child.appendChild(Address);

  var hr=document.createElement("hr");
  child.appendChild(hr);
}
var child2 = document.querySelector(".childtwo");
function career(careerinfo){
  var hd=document.createElement("h1");
  hd.textContent = "Career Objective";
  child2.appendChild(hd);

  var hr1=document.createElement("hr");
  child2.appendChild(hr1);
  var info1 = document.createElement("h3");
  info1.textContent = careerinfo.info;
  child2.appendChild(info1);


}
