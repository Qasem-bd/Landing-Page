
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
          handleActive(event)
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
          let randumNumber = Math.floor(Math.random() * 4);
          landingpage.style.backgroundImage = 'url("/Images/web-design'+ randumNumber +'.jpg")'
      },5000)
   
  }
}

// Updating Switching Start According to The local Storage
if (isSwitchable === 'true') {
  randomizeBackground(true);
  document.querySelector('.Setting-box .option-box .yes').classList.add('active');
  document.querySelector('.Setting-box .option-box .no').classList.remove('active')
}
else {
  
}


//Adding EventListener For The Span, That Controle The Switching 
const b_control_el = document.querySelectorAll('.Setting-box .random-b span');

b_control_el.forEach(controlEl => {
    
    controlEl.addEventListener('click', (event) => {
        
          //   Activing The selected Button
          handleActive(event)
          
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


// Start Skills Section
let mySkills = document.querySelector('.skills');
window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = mySkills.offsetTop;
  // console.log (skillsOffsetTop)

  // skills Height
  let skillsOffsetHeight = mySkills.offsetHeight;
  // console.log(skillsOffsetHeight)

  // window Height 
  let widowOffsetHeight = this.innerHeight;
  // console.log(widowOffsetHeight)

  // Scroll Offset Y
  let scrollOffsetY = this.scrollY;
  // console.log(scrollOffsetY)

  if (scrollOffsetY > (skillsOffsetTop - widowOffsetHeight )) {
    let progressElements = document.querySelectorAll('.skills .skill-box .skill-progress span');
    progressElements.forEach(element => {
      let progressValue = element.dataset.progress;
      // console.log(progressValue);
      element.style.width = progressValue;
    })
  }

}
// End Skills Section


// Creat Popup with The Image
let galleryImgs = document.querySelectorAll('.gallery .images-box img');

galleryImgs.forEach((img) => {
      img.addEventListener('click', (e) =>{

            // Create Overlay Element
            let overlay = document.createElement('div');

            // Add Class To Overlay
            overlay.className = 'popup-overlay';

            // Append Overlay To The Body
            document.body.appendChild(overlay);

            // Create The Popup-Box
            let popupBox = document.createElement('div')

            // Add Class To PopupBox
            popupBox.className = 'popup-box';

            // Add Header To The Popupbox
            if (img.alt) {
              // Create The Header
              let imgHeader = document.createElement('h3');

              // Create TextNode 
              let hText = document.createTextNode(img.alt)

                // Appent The Text To The Header
                imgHeader.appendChild(hText);

              // Append The imgHeader To The popupBox
              popupBox.appendChild(imgHeader)
            }

            // Create The Image Element 
            let popupImg = document.createElement('img');
              // Set Image Source
              popupImg.src = img.src;

            // Append The Image To The PopupBox
            popupBox.appendChild(popupImg)

            // Append PopupBox To The Body
            document.body.appendChild(popupBox)

            // Create The Close Spane
            let closeSpan = document.createElement('span')

            // Add Class To The Span
            closeSpan.className = 'close-span'

            // Create Text To The CloseSpan
            let spanText = document.createTextNode("x") 
            
              closeSpan.appendChild(spanText);
            
            // Apped CloseSpan To The PopupBox
            popupBox.appendChild(closeSpan)

      })

})

 // Adding EventListener To The CloseSpan [Closing The PopupBox]
 document.addEventListener ('click', function (e) {

  if (e.target.className == 'close-span' ) {
    // console.log(e.target.parentElement)
    
    // Remove The PopupBox
    e.target.parentElement.remove();

    // Remove The Overlay
    document.querySelector('.popup-overlay').remove();
  }
})

// Start Navigation Bullets
const scrollToSection = (elements) => {

      elements.forEach(element => {
        
            element.addEventListener('click', (e) => {
              e.preventDefault();
          
            document.querySelector(e.target.dataset.section).scrollIntoView({behavior: 'smooth'})
          })
    })
}

const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const allLinks = document.querySelectorAll('.Links a');

scrollToSection(allBullets);
scrollToSection(allLinks)

// End Navigation Bullets

// Function To Handle The active Status
const handleActive = (ev) => {
      ev.target.parentElement.querySelectorAll('.active').forEach(element => {
          element.classList.remove('active');
      })
      ev.target.classList.add('active')
}

// Show and Hide The Bullets 
const bulletControls = document.querySelectorAll(".Setting-box .bullets span");
const navBullets = document.querySelector (".nav-bullets")

const bulletsDisplay = localStorage.getItem('bullets-option');
if (bulletsDisplay) {
    if (bulletsDisplay === 'yes') {
      navBullets.style.display = 'block'
      document.querySelector('.bullets .no').classList.remove('active');
      document.querySelector('.bullets .yes').classList.add('active');
    }
    else {
      navBullets.style.display = 'none';
      document.querySelector('.bullets .yes').classList.remove('active');
      document.querySelector('.bullets .no').classList.add('active');
    }
  
}
bulletControls.forEach(span => {
        span.addEventListener("click", (event) => {
            handleActive(event);

            if (span.dataset.display ==='yes') {
              navBullets.style.display = 'block'
              localStorage.setItem('bullets-option','yes');
            }
            else {
              navBullets.style.display = 'none'
              localStorage.setItem('bullets-option','no');
            }
      })
})



// Reset All Options
const resetButton = document.querySelector('.Setting-box .reset-options button');
      resetButton.onclick = () => {
        // localStorage.clear();
        localStorage.removeItem('main_color');
        localStorage.removeItem('isSwitchable');
        localStorage.removeItem('bullets-option');
        window.location.reload();
      }



// Start Contact Section
document.querySelector('.contact-me form  .submit').onclick = (event) => {
  event.preventDefault()
}
// End Contact Section