
//  Check if There is Local Storage "color_option"
const mainColor = localStorage.getItem('main_color');

if (mainColor) {
    // console.log(mainColor)
    // Set The mainColor from The Local Storage
    document.documentElement.style.setProperty('--main-color',mainColor )

    // Remove The class active from all Element 
    document.querySelectorAll('.colors-list li').forEach(element => {
        element.classList.remove('active');
        // Adding class active to The active Element
        if(element.dataset.color === mainColor) {
            element.classList.add('active')
        }
    })

}

// start Toggle class on  Icon

document.querySelector(".Toggle-icon ").addEventListener("click", function () {
    
    document.querySelector(".Toggle-icon i").classList.toggle("fa-spin")
    document.querySelector(".Setting-box ").classList.toggle("Open")
})


// start Toggle class on  Icon


// Switch Colors
const colorsLi = document.querySelectorAll('.colors-list li ');

colorsLi.forEach(li => {
    li.addEventListener('click', (event) => {
      const newColor = event.target.dataset.color;
      const updatedColor =event.target.getAttribute("data-color")
    //   event.target.dataset.color == event.target.getAttribute("data-color") => updatedColor == newColor
    //   Set The new Color on Root
      document.documentElement.style.setProperty('--main-color',newColor );

    //   set The new Color on The LocalStorage 
    localStorage.setItem('main_color',newColor )

    //   Activing The selected Color 
      li.parentElement.querySelectorAll('li').forEach(element => {
          element.classList.remove('active');
      })
      li.classList.add('active')
    })
})

// Switch Colors


// Start Random change the Backgrounf
let landingpage = document.querySelector(".Landing-page");

// setInterval(() => {
//     let randumNumber = Math.floor(Math.random() * 5);
    
//     landingpage.style.backgroundImage = 'url("/Images/web-design'+ randumNumber +'.jpg")'
// },5000)

// Random Change the Background