const dropDown = document.querySelector("#drop-down")
const dropDownButtons = document.querySelector("#drop-down-container")

dropDown.addEventListener('click', function(){
    toggle()
})


function toggle() {
    if (dropDownButtons.style.display == 'flex') {
        dropDownButtons.style.display = 'none'
    } else {
        dropDownButtons.style.display = 'flex';
    }
}

