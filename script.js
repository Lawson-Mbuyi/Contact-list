const form=document.getElementById("contact-form");
const userFile = document.getElementById("userFile");
const imageContainer=document.getElementById("imageContainer");
const imageView=imageContainer.querySelector(".imageView" );

userFile.addEventListener("change", function(){
  const file=this.files[0];
  if(file){
    const reader= new FileReader();
    imageView.getElementsByClassName.display="block";
    reader.addEventListener("load", function(){
      imageView.setAttribute("src", this.result);
    });
    reader.readAsDataURL(file);
  }else{
    imageView.style.display=null;
    imageView.setAttribute("src", "");
      
  } 
});
function addCloseEvent(close,modal_data){
  close.addEventListener("click", function(){
    modal_data.remove();
   })
}

function ajouter(modal_data){
  const contatc_data = document.querySelector(".list_contacts");
  return contatc_data.appendChild(modal_data);
}
function checkInput(prenom,nom){
  return prenom.length>=3 && nom.length>=3;
}
function addChangeCreateTextEvent(modal_data){
  const create_btn = document.querySelector(".create");
  modal_data.addEventListener("click", function(){
    if(create_btn.innerText=="Modifier"){
      create_btn.innerText="Créer";
    }else{
      create_btn.innerText="Modifier"
    }

  })
}

form.addEventListener("submit", function(e){ 
  e.preventDefault();

  const inputs=this.elements;

  if(checkInput(inputs[0].value,inputs[1].value)){
    const modal_data=document.createElement("div");
    modal_data.classList.add("modal");
   
  const close = document.createElement("span");
  close.classList.add("close");
  close.innerText="+";


  const profil = document.createElement("img");
  profil.classList.add("profil");
  profil.src = URL.createObjectURL(inputs.userFile.files[0]);

  const user_prenom= document.createElement("p");
  user_prenom.innerHTML=inputs[0].value;
  const user_nom= document.createElement("p");
  user_nom.innerHTML=inputs[1].value;
  const user_choice=document.createElement("p");
  user_choice.innerHTML=inputs[2].value;
  const user_bio=document.createElement("p");
  user_bio.innerHTML=inputs[3].value;
  const hr=document.createElement("hr");  
  

  
  modal_data.append(close,profil,user_prenom,user_nom,user_choice,user_bio,hr);
  addCloseEvent(close, modal_data);


  ajouter(modal_data);
  addChangeCreateTextEvent(modal_data);


  }else{
    const inputError=document.querySelector(".inputError");
    inputError.style="display:block";
    inputError.innerText="La longueur des champs noms ou prenom insuffisante (min=3)";
  }

  
});







