import Musics from "./music.js"
import { playingFlorest, playingRain, playingCanteen, playingFireplace } from "./music.js"

const buttonFlorest = document.querySelector(".buttonFlorest")
const buttonRain = document.querySelector(".buttonRain")
const buttonCanteen = document.querySelector(".buttonCanteen")
const buttonFireplace = document.querySelector(".buttonFireplace")
const buttonPlay = document.querySelector(".buttonPlay")
const buttonStop = document.querySelector(".buttonStop")
const buttonPlus = document.querySelector(".buttonPlus")
const buttonMinus = document.querySelector(".buttonMinus")
const timerDisplay = document.querySelector(".display")
const timerMinutes = document.querySelector(".timerMinutes")
const timerSeconds = document.querySelector(".timerSeconds")
const buttonLightMode = document.querySelector(".iconLightMode")
const buttonDarkMode = document.querySelector(".iconDarkMode")

const body = document.body

let minutes = Number(timerMinutes.textContent)
let seconds = Number(timerSeconds.textContent)

let timerTimeOut
let timerActive = false

const music = Musics()

function darkMode(){
  buttonLightMode.classList.toggle("hide")
  buttonDarkMode.classList.toggle("hide")
  body.classList.toggle("darkMode")
  buttonFlorest.classList.toggle("darkMode")
  buttonRain.classList.toggle("darkMode")
  buttonCanteen.classList.toggle("darkMode")
  buttonFireplace.classList.toggle("darkMode")
  timerDisplay.classList.toggle("darkMode")
  buttonPlay.classList.toggle("darkMode")
  buttonStop.classList.toggle("darkMode")
  buttonPlus.classList.toggle("darkMode")
  buttonMinus.classList.toggle("darkMode")
}

function updateDisplay(minutes, seconds){
  timerMinutes.textContent = String(minutes).padStart(2, "0")
  timerSeconds.textContent = String(seconds).padStart(2, "0")
}

function resetTime(){
  timerMinutes.textContent = String(minutes).padStart(2, "0")
  timerSeconds.textContent = String(seconds).padStart(2, "0")
}

function contDown(){
  timerTimeOut = setTimeout(function(){

    let minutes = Number(timerMinutes.textContent)
    let seconds = Number(timerSeconds.textContent)

    if(minutes == 60){
      seconds = 0
    }

    if(seconds <= 0){
      seconds = 60
      --minutes
    }

    if(minutes < 0){
      timerActive = false
      resetTime()
      music.timerEnd()
      return
    }

    updateDisplay(String(minutes).padStart(2, "0"), String(seconds - 1).padStart(2, "0"))

    contDown()

  }, 1000)
}

buttonPlay.addEventListener("click", function(){

  if(timerActive == false){
    if(minutes == 0 && seconds == 0){
      return
    }else{
    timerActive = true
    music.pressButton()
    contDown()
    }
  }
})

buttonStop.addEventListener("click", function(){
  if(timerActive == true){
    updateDisplay(minutes, "00")
    clearTimeout(timerTimeOut)
    music.pressButton()
    timerActive = false
  }
})

buttonPlus.addEventListener("click", function(){
  if(minutes <= 55){
    minutes = minutes + 5
    music.pressButton()
    timerMinutes.textContent = String(minutes).padStart(2,"0")
  }else{
    updateDisplay(60, "00")
  }
})

buttonMinus.addEventListener("click", function(){
    if(minutes >= 5){
    minutes = minutes - 5
    music.pressButton()
    timerMinutes.textContent = String(minutes).padStart(2,"0")
  }else{
    clearTimeout(timerTimeOut)
    updateDisplay("00", "00")
    timerActive = false
  }
})


buttonFlorest.addEventListener("click", function(){
  if(playingFlorest == false){
    music.florest()
    buttonFlorest.classList.add("pressedButton")
    buttonRain.classList.remove("pressedButton")
    buttonCanteen.classList.remove("pressedButton")
    buttonFireplace.classList.remove("pressedButton")
  }else{
    music.florest()
    buttonFlorest.classList.remove("pressedButton")
  }
})

buttonRain.addEventListener("click", function(){
  if(playingRain == false){
    music.rain()
    buttonFlorest.classList.remove("pressedButton")
    buttonRain.classList.add("pressedButton")
    buttonCanteen.classList.remove("pressedButton")
    buttonFireplace.classList.remove("pressedButton")
  }else{
    music.rain()
    buttonRain.classList.remove("pressedButton")
  }
})

buttonCanteen.addEventListener("click", function(){
  if(playingCanteen == false){
    music.canteen()
    buttonFlorest.classList.remove("pressedButton")
    buttonRain.classList.remove("pressedButton")
    buttonCanteen.classList.add("pressedButton")
    buttonFireplace.classList.remove("pressedButton")
  }else{
    music.canteen()
    buttonCanteen.classList.remove("pressedButton")
  }
})

buttonFireplace.addEventListener("click", function(){
  if(playingFireplace == false){
    music.fireplace()
    buttonFlorest.classList.remove("pressedButton")
    buttonRain.classList.remove("pressedButton")
    buttonCanteen.classList.remove("pressedButton")
    buttonFireplace.classList.add("pressedButton")
  }else{
    music.fireplace()
    buttonFireplace.classList.remove("pressedButton")
  }
})

buttonLightMode.addEventListener("click", function(){
  darkMode()
})

buttonDarkMode.addEventListener("click", function(){
  darkMode()
})