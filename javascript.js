const dropDown = document.querySelector("#drop-down")
const dropDownButtons = document.querySelector("#drop-down-container")

dropDown.addEventListener('click', function(){
    toggle(dropDownButtons)
})


function toggle(x) {
    if (x.style.display == 'flex') {
        x.style.display = 'none'
    } else {
        x.style.display = 'flex';
    }
}

