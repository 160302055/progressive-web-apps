// function getfile(file,callback) {
//    var xhr = new XMLHttpRequest();   xhr.overrideMimeType("application/json");
//    xhr.open("GET",file,true);
//
//    xhr.onreadystatechange=function(){
//
//      if(xhr.readyState===4 && xhr.status=="200")
//   {
//       callback(xhr.responseText);
//    }
//
//    };
//
//    xhr.send(null);
//  }
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error("error"));
      }
    })
  })
}

  var newfile = loadjson("a.json")
  newfile.then(data=>{
   details(data.basics);
   career(data.CareerObjective);
   education(data.education);
  skillset(data.skills);
      })

//  getfile("a.json",function(text){
//    var data=JSON.parse(text);
//   console.log(data);


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

 function education(edu){

   var ed = document.createElement("h2");
   ed.textContent = "Education Qualification";
   child2.appendChild(ed);

   for(i=0;i<edu.length;i++){
     var deg=document.createElement("h3");
     deg.textContent = edu[i].degree;
     child2.appendChild(deg);

     var eduu1=document.createElement("ul");
     var eduli=document.createElement("li");
     eduli.textContent=edu[i].institute;
     eduu1.appendChild(eduli);
     child2.appendChild(eduu1);

     var eduu2=document.createElement("ul");
     var eduli1=document.createElement("li");
     eduli1.textContent=edu[i].data;
     eduu2.appendChild(eduli1);
     child2.appendChild(eduu2);

   }
 }

 function skillset(skillinfo){

   var s = document.createElement("h2");
   s.textContent="Technical skills";
   child2.appendChild(s);

   var h = document.createElement("hr");
   child2.appendChild(h);

   var skilldata = document.createElement("table");
   skilldata.border="1";
   child2.appendChild(skilldata);

   tabledata="";
   for(i=0;i<skillinfo.length;i++){
     tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>";
   }
   skilldata.innerHTML=tabledata;
 }
 
