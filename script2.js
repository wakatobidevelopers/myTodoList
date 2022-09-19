const inputBox = document.getElementById("inputBox")

addButton.addEventListener("click", function () {
   // create list variable
   const createList = document.createElement("li")

   // create img variable
   const createBtn = document.createElement("button")

   //set attr to list tag
   createList.setAttribute("class", "list")
   createList.setAttribute("id", inputBox.value)

   //set attr to imgT
   createBtn.setAttribute("class", "trush")
   createBtn.setAttribute("id", inputBox.value)

   //set img src
   //createImg.src = "/Trash.svg"

   // append input value to list
   createList.append(
      document.createTextNode(inputBox.value),
      createBtn
   )

   createBtn.innerHTML += `<i class="fa-sharp fa-solid fa-circle-xmark"></i>`
   
   // append list to parentElement ("ul")
   todo.appendChild(createList)
   
   //function remove
   function removeList(text) {
      const li = [...document.querySelectorAll("li")]
      li.forEach(element => {
         if (element.innerText == text) element.parentNode.removeChild(element)
      });
   }

   document.getElementById(createBtn.getAttribute("id"))?.addEventListener('click', function () {
      removeList(createList.getAttribute("id"))
   })

   //delete inut box
   inputBox.value = "";
});