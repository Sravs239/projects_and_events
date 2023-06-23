function info(){
    form=document.form;
    check = validate(form)
    if(check){
        let title=form.title.value;
        let des=form.des.value; 
        let link=form.link.value;
        form.title.value="";
        form.des.value="";
        form.link.value="";
        createDiv(title,des,link);
    }
    else{
        form.title.value="";
        form.des.value="";
        form.link.value="";
        alert("invalid data");
    }
}

function createDiv(title,des,link){
    var boxes=document.getElementById("boxes");
    divobj=document.createElement("div");
    divobj.setAttribute("class","card")
    boxes.appendChild(divobj);

    let t=document.createElement("h2");
    t.innerText=title;
    t.id="title"
    divobj.appendChild(t)
    let d=document.createElement("p");
    d.innerText=des;
    divobj.appendChild(d);
    let a=document.createElement("a");
    a.innerHTML="<button>register</button>"
    a.href=link;
    divobj.appendChild(a);
    let btn=document.createElement("button");
    btn.innerText="remove"
    btn.style.padding="5px"
    btn.style.display="block"
    btn.addEventListener("click",()=>
    {
        let card=btn.parentElement;
        boxes.removeChild(card);
    })
    divobj.appendChild(btn)
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
        document.getElementById("boxes").style.opacity="1";
    }
}

function validate(form){
    if(form.title.value !="" && form.des.value !="" && form.link.value !="")
        return true
    return false
}
