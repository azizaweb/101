const userName= prompt ("Ismingizni kiriting")
const age=prompt("yoshingizni kiriting  ")
if(userName){
    const nameElement = document.createElement("div")
nameElement.textContent=userName+age
nameElement.style.fontSize="50px"
nameElement.style.color="yellow"
nameElement.style.fontWeight="bold"
nameElement.style.textAlign = "center"
nameElement.style.position="absolute"
nameElement.style.top="50%"
nameElement.style.left="50%"
nameElement.style.transform = "(translate(-50%, -50%)"

document.body.appendChild(nameElement)

}