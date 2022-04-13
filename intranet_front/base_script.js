const navbarToggle = document.getElementById('navbar-toggle');
const navbar = document.getElementById('navbar')

navbarToggle.addEventListener('click', e => {
    navbar.classList.toggle('active')
})

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton){
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle('active')
        console.log('active toggle')
    }

    document.querySelectorAll("[data-dropdown]").forEach(dropdown => {
        if(dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})
