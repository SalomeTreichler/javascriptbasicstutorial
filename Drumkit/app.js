//Attach an event listener to the window
window.addEventListener('keydown', function (e) {

})

const removeTransition = function (e) {
}

//select every key on the page to listen on each one
const keys = document.querySelectorAll('.key')
console.log(keys)
keys.forEach(function (key) {
  key.addEventListener('transitionend', removeTransition)
})

  //create the removeTransition function to remove the added class    