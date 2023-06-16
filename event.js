function info(){
    form=document.form;
    let title=form.title.value;
    let des=form.des.value; 
    let link=form.link.value;
    form.title.value="";
    form.des.value="";
    form.link.value="";
    createDiv(title,des,link);
}

function createDiv(title,des,link){
    let boxes=document.getElementById("boxes");
    divobj=document.createElement("div");
    boxes.appendChild(divobj);

    let t=document.createElement("h2");
    t.innerText=title;
    t.id="title"
    divobj.appendChild(t)
    let d=document.createElement("p");
    d.innerText=des;
    divobj.appendChild(d);
    let  a=document.createElement("a");
    a.innerText="register"
    a.href=link;
    divobj.appendChild(a);
    update(true)
}

function deleteDiv(title){
    title=prompt("enter title of event");
    let boxes=document.getElementById("boxes");
    events=boxes.getElementsByTagName("div");
    for(var event of events){
        console.log("checking..")
        if(document.getElementById("title").textContent==title){
            boxes.removeChild(event);
            alert("event removed");
            update(false)
            return ;
        }
    }
    alert("event is not there");
}

let count=0
function update(bool){
    if(bool){
        count=count+1
        document.getElementById("count").innerText="count - "+(count)
    }
    else{
        count=count-1
        document.getElementById("count").innerText="count - "+(count)
    }
        
}

function toggle(){
    form=document.form;
    let layout=document.getElementById("boxes");
    if(form.style.display=="none"){
        form.style.display="block";
        document.getElementById("boxes").style.opacity=".7";
    }  
    else{
        form.style.display="none";
        document.getElementById("boxes").style.opacity=".7";
    }
}
