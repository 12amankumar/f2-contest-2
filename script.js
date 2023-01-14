function message(event){
   
    let name=document.getElementById("name");
    let Profession=document.getElementById("Profession");
    let Age=document.getElementById("Age");
    let button=document.getElementById("btn");
    let mytable=document.querySelector("#table");
    const success=document.getElementById("success");
    const feild=document.getElementById("feild");
    let employees=[{id:1,name:"jack",profession:"developer",age:20},{id:2,name:"john",profession:"admin",age:28},{id:3,name:"aman",profession:"admin",age:22},{id:4,name:"abhi",profession:"admin",age:25},{id:5,name:"ayush",profession:"developer",age:26 }]

    if(name.value=='' || Profession.value=='' || Age.value==''){
        feild.style.display='block';
      
    }
    else{
        success.style.display='block';
       

    }
    event.preventDefault();
}

// function myCreateFunction(event) {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//      var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     cell1.innerHTML = "id:1";
//     cell2.innerHTML = "Name:John";
//       cell3.innerHTML = "Profession:developer";
//     cell4.innerHTML = "Age:23";
//     myTable.style.display:'block'
//   }
//   event.preventDefault();
//   function myDeleteFunction() {
//     document.getElementById("myTable").deleteRow(0);
//   }

// function addToTable(){
    
//       if(name&& profession&& age){
//       let id=employees.length+1;
//       employees.push({name:name,profession:profession,age:age})
//       employees();
//       clearitem();
//       }
//   }



// function displaydata(){
//     let html="<table class='table'>";
//     setTimeout(()=>{
//         for(var i=0;i<employees.length;i++){
//             html+="<tr>";
//             html+="<td>"+employees[i].id+"</td>";
//             html+="<td>"+employees[i].name+"</td>";
//             html+="<td>"+employees[i].profession+"</td>";
//             html+="<td>"+employees[i].age+"</td>";
//             html+="</tr>";

//         }
//         html+="</table>";
//         document.getElementById("table").innerHTML=html;
//     } 5000)
// }
// displaydata();

// function clearitem(){
// document.getElementById("name").value;
//     document.getElementById("Professin").value;
//    document.getElementById("Age").value;
// }
// function removeitem(rec){
// console.log(rec);
// var fil=employees.filter((a,i)=>{
//     if(rec==a.age){
//         employees.splice(i,1);
//         displaydata();
//     }
// })
// console.log(employees);
// }
// removeitem();

