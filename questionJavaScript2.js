function getReport(){
let subject=['Maths','Physics','Chemistry'];
let Marks=[];
for(var index=0;index<3;index++){
    let al = Math.floor(Math.random()*100);
    Marks.push(al);
    //console.log(Marks[index]+"<br>");
    //document.write(Marks[index]+"<br>");
}
let Status=[];
for(var index=0;index<3;index++){
    if(Marks[index]<36){
        Status[index]='Fail';
    }
    else{
        Status[index]='Pass';
    }
}
let Report=[
    {
        subject:subject[0],
        Marks:Marks[0],
        Status:Status[0],
    },
    {
        subject:subject[1],
        Marks:Marks[1],
        Status:Status[1],
    },
    {
        subject:subject[2],
        Marks:Marks[2],
        Status:Status[2],
    },
];
console.table(Report);
}

getReport();