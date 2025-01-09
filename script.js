let body = document.body
let div = document.createElement("div")

let nameN = document.createElement("h2");
nameN.textContent = "1. Ism:   " + prompt('Ismingizni kiriting');

let userName = document.createElement("h2");
userName.textContent = "2. Familiya:   " + prompt('Familyangizni kiriting');

let age = document.createElement("h2");
age.textContent = "3. Yosh:   " + prompt('Yoshingizni kiriting');

let one = 1
let two = 2
let vibor = prompt(`ismingizni kanaka yozilu \n ${one})Kotta \n ${two})kichik`)

if(vibor == "1"){
    nameN.textContent = nameN.textContent.toUpperCase();
    userName.textContent = userName.textContent.toUpperCase();
    age.textContent = age.textContent.toUpperCase();

    div.appendChild(nameN);
    div.appendChild(userName);
    div.appendChild(age);

    body.appendChild(div);
} else if (vibor == "2") {
    nameN.textContent = nameN.textContent.toLowerCase();
    userName.textContent = userName.textContent.toLowerCase();
    age.textContent = age.textContent.toLowerCase();

    div.appendChild(nameN);
    div.appendChild(userName);
    div.appendChild(age);

    body.appendChild(div);
}else{
    alert("notogri yozilgan");
}

div.style.backgroundColor = 'black';
div.style.color = 'white';
div.style.padding = "20px 40px";
div.style.borderRadius = "50px";
div.style.display = "inline-block";
div.style.margin = "80px";