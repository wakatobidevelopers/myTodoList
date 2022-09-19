const inputBox = document.getElementById("inputBox")

addButton.addEventListener("click", function () {
   // create list variable
   const createList = document.createElement("li")

   // create img variable
   const createImg = document.createElement("img")

   //set attr to list tag
   createList.setAttribute("class", "list")
   createList.setAttribute("id", inputBox.value)

   //set attr to imgT
   createImg.setAttribute("class", "trush")
   createImg.setAttribute("id", inputBox.value)

   //set img src
   createImg.src = "/Trash.svg"

   // append input value to list
   createList.append(
      document.createTextNode(inputBox.value),
      createImg
   )
   
   // append list to parentElement ("ul")
   todo.appendChild(createList)
   
   //function remove
   function removeList(text) {
      const li = [...document.querySelectorAll("li")]
      li.forEach(element => {
         if (element.innerText == text) element.parentNode.removeChild(element)
      });
   }

   document.getElementById(createImg.getAttribute("id"))?.addEventListener('click', function () {
      removeList(createList.getAttribute("id"))
   })

   //delete inut box
   inputBox.value = "";
});