const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function random(){
    alert(words[Math.floor(Math.random()*words.length)]);
}

function start(){
    document.getElementById("res").innerHTML="Loading";
    var t1 = document.getElementById('t1').value;
    var t2 = document.getElementById('t2').value;
    var t3 = document.getElementById('t3').value;
    var t4 = document.getElementById('t4').value;
    var t5 = document.getElementById('t5').value;
    var k1 = document.getElementById('k1').value;
    var k2 = document.getElementById('k2').value;
    var k3 = document.getElementById('k3').value;
    var k4 = document.getElementById('k4').value;
    var k5 = document.getElementById('k5').value;

    if(t1 || t2 || t3 || t4 || t5) check(t1, t2, t3, t4, t5, k1, k2, k3, k4, k5);
    else if(k1 || k2 || k3 || k4 || k5) check(t1, t2, t3, t4, t5, k1, k2, k3, k4, k5);
    else document.getElementById("res").innerHTML="Error ;(";
}

function check(t1, t2, t3, t4, t5, k1, k2, k3, k4, k5){
    var arrTemp=[0,0,0,0,0];
    var temp=[];

var end=[];
for(let i=0; i<26; i++){if(t1) i=26;
    for(let u=0; u<26; u++){if(t2) u=26;
        for(let y=0; y<26; y++){if(t3) y=26;
            for(let t=0; t<26; t++){if(t4) t=26;
                for(let r=0; r<26; r++){if(t5) r=26;
                    count(i,u,y,t,r);
                }
            }
        }
    }
}
    
for(let i=0; i<temp.length; i++){
    if(words.indexOf(temp[i])!=-1) end.push(temp[i]);
}

var res =sort();
console.table(res);
if(!res[0]) document.getElementById("res").innerHTML="no results";
    else{
        var div = document.getElementById("mainRes");
        var htmlString='<br>';
        div.innerHTML = htmlString.trim();
        div.firstChild;
        for(let i=0; i<res.length; i++){
            document.getElementById("res").innerHTML = "Done";
            htmlString="<input type='text' class='textbox2' style='margin-right: 5px' value="+(i+1)+" disabled='disabled'>";
            div.innerHTML += htmlString.trim();
            div.firstChild;
            for(let t=0; t<res[i].split('').length; t++){
                htmlString="<input type='text' class='textbox4' value="+res[i].split('')[t]+" disabled='disabled'>";
                div.innerHTML += htmlString.trim();
                div.firstChild;
            }
            htmlString="<br>";
            div.innerHTML += htmlString.trim();
            div.firstChild;
        }
}

function count(i,u,y,t,r){
    arrTemp[0]=abc[i];
    arrTemp[1]=abc[u];
    arrTemp[2]=abc[y];
    arrTemp[3]=abc[t];
    arrTemp[4]=abc[r];
    if(t1) arrTemp[0]=t1;
    if(t2) arrTemp[1]=t2;
    if(t3) arrTemp[2]=t3;
    if(t4) arrTemp[3]=t4;
    if(t5) arrTemp[4]=t5;
    temp.push(arrTemp[0]+arrTemp[1]+arrTemp[2]+arrTemp[3]+arrTemp[4]);
}

function sort(){
    var done=[];
    var word;
    for(let i=0; i<end.length; i++){
        word=end[i];
        if(word.includes(k1) && word.includes(k2) && word.includes(k3) && word.includes(k4) && word.includes(k5)) done.push(word);
    }
    done=sortWo(done);
    return done;
}

function sortWo(arr){
var m1 = document.getElementById('m1').value;
var m2 = document.getElementById('m2').value;
var m3 = document.getElementById('m3').value;
var m4 = document.getElementById('m4').value;
var m5 = document.getElementById('m5').value;
var m6 = document.getElementById('m6').value;
var m7 = document.getElementById('m7').value;
var m8 = document.getElementById('m8').value;
var m9 = document.getElementById('m9').value;
var m10 = document.getElementById('m10').value;
var m11 = document.getElementById('m11').value;
var m12 = document.getElementById('m12').value;
var m13 = document.getElementById('m13').value;
var m14 = document.getElementById('m14').value;
var m15 = document.getElementById('m15').value;
var m16 = document.getElementById('m16').value;
var m17 = document.getElementById('m17').value;
var m18 = document.getElementById('m18').value;
var m19 = document.getElementById('m19').value;
var m20 = document.getElementById('m20').value;
var m21 = document.getElementById('m21').value;
var m22 = document.getElementById('m22').value;
var m23 = document.getElementById('m23').value;
var m24 = document.getElementById('m24').value;
var m25 = document.getElementById('m25').value;
var m26 = document.getElementById('m26').value;
var maShe=[m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24, m25, m26];
maShe = maShe.filter(Boolean);
var done=[];
if(maShe[0]){
    var boo=true;
    for(let i=0; i<arr.length; i++){
        for(let t=0; t<maShe.length; t++){
            if(arr[i].includes(maShe[t])) boo=false;
        }
        if(boo) done.push(arr[i]);
        boo=true;
    }
}else return arr;
return done;
}
}