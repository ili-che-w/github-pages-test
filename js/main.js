/* Show/Hide Menu (on Mobile) Button */

const sidebar = document.querySelector('.sidebar'),
    btnToggleSidebar = document.querySelector('.toggle-sidebar'),
    menuIcon = document.querySelector('.menu-icon')

btnToggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--mobile-active')
    menuIcon.classList.toggle('menu-icon-active')
})

/* "Show More (Cards)" Button */

const btnShowMoreCards = document.querySelector('.btn-more'),
    hiddenCards = document.querySelectorAll('.card-link--hidden')

btnShowMoreCards.addEventListener('click', () => {
    hiddenCards.forEach(card => {
        card.classList.remove('card-link--hidden')
    })
})

/* Hide/Show Widget by Click on its Title */

const widgets = document.querySelectorAll('.widget')

widgets.forEach(widget => {
    widget.addEventListener('click', e => {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--closed')
            e.target.nextElementSibling.classList.toggle('widget__body--hidden')
        }
    })
})

/* Location Widget Checkboxes Behavior */

const locationAll = document.getElementById('location--all'),
    locationCheckboxes = document.querySelectorAll('[data-location-param=detailed]')

locationAll.addEventListener('change', e => {
    if (e.target.checked) {
        locationCheckboxes.forEach(checkbox => {
            checkbox.checked = false
        })
    }
})

locationCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', e => {
        if (e.target.checked && locationAll.checked) {
            locationAll.checked = false
        }
    })
})

/* "Show More" Button Inside a Widget */

const btnShowHidden = document.querySelector('.btn__show-hidden'),
    hiddenParams = document.querySelector('ul.widget-hidden')

btnShowHidden.addEventListener('click', e => {
    if (hiddenParams.classList.contains('widget-hidden')) {
        hiddenParams.classList.remove('widget-hidden')
        btnShowHidden.innerText = 'Скрыть'
    } else {
        hiddenParams.classList.add('widget-hidden')
        btnShowHidden.innerText = 'Показать ещё'
    }
})
