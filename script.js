const toggles = document.querySelectorAll('.faq-toggle')

// use .ParentNode to access the parent div
// loop through elements using forEach

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})


