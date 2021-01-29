
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


//Start Sitching The Background Randomly
let isSwitchable = localStorage.getItem('isSwitchable');
    console.log(isSwitchable)
let landingpage = document.querySelector(".Landing-page");
let backgrounInterval;
if (isSwitchable ===null) {
  isSwitchable=true;
}
// switch The Background Randomly
const randomizeBackground = (switchable) => {
  if (switchable) {
        backgrounInterval = setInterval(() => {
          let randumNumber = Math.floor(Math.random() * 5);
          landingpage.style.backgroundImage = 'url("/Images/web-design'+ randumNumber +'.jpg")'
      },1000)
   
  }
}

// Updating Switching Start According to The local Storage
if (isSwitchable === 'true') {
  randomizeBackground(true);
  document.querySelector('.Setting-box .random-b .yes').classList.add('active');
  document.querySelector('.Setting-box .random-b .no').classList.remove('active')
}
else {
  
}


//Adding EventListener For The Span, That Controle The Switching 
const b_control_el = document.querySelectorAll('.Setting-box .random-b span');

b_control_el.forEach(controlEl => {
    
    controlEl.addEventListener('click', (event) => {
        
          //   Activing The selected Button
          controlEl.parentElement.querySelectorAll('span').forEach(element => {
              element.classList.remove('active');
          })
          controlEl.classList.add('active')
          
          const elType = controlEl.dataset.background;
          if (elType === 'yes') {
              isSwitchable = true;
              randomizeBackground(isSwitchable);
              localStorage.setItem('isSwitchable',isSwitchable);
          }
          else {
              isSwitchable = false;
              clearInterval(backgrounInterval);
              // To Stop Switching by The first Image
              landingpage.style.backgroundImage = 'url("/Images/web-design0.jpg")';
              localStorage.setItem('isSwitchable',isSwitchable);
          }

    })  

})
//End Switching The Background Randomly


