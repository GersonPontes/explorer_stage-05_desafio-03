export let playingFlorest = false
export let playingRain = false
export let playingCanteen = false
export let playingFireplace = false

const musicFlorest = new Audio("./music/florest.wav")
const musicRain = new Audio("./music/rain.wav")
const musicCanteen = new Audio("./music/canteen.wav")
const musicFireplace = new Audio("./music/fireplace.wav")
const musicButtonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const musicTimerEnd = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")


const volumeControlFlorest = document.querySelector(".volumeControlFlorest")
const volumeControlRain = document.querySelector(".volumeControlRain")
const volumeControlCanteen = document.querySelector(".volumeControlCanteen")
const volumeControlFireplace = document.querySelector(".volumeControlFireplace")
let volumeFlorest
let volumeRain
let volumeCanteen
let volumeFireplace

export default function Musics(){

  musicFlorest.loop = true
  musicRain.loop = true
  musicCanteen.loop = true
  musicFireplace.loop = true

  function pressButton(){
    musicButtonPress.play()
  }

  function timerEnd(){
    musicTimerEnd.play()
  }

  function playMusic(music){
    musicFlorest.pause()
    musicRain.pause()
    musicCanteen.pause()
    musicFireplace.pause()
    playingFlorest = false
    playingRain = false
    playingCanteen = false
    playingFireplace = false

    switch(music){
      case "florest":
        musicFlorest.play()
        playingFlorest = true
        break
      case "rain":
        musicRain.play()
        playingRain = true
        break
      case "canteen":
        musicCanteen.play()
        playingCanteen = true
        break
      case "fireplace":
        musicFireplace.play()
        playingFireplace = true
        break    
    }
  }

  function florest(){
    if(playingFlorest == false){
      playMusic("florest")
      resetVolume()
    }else{
      musicFlorest.pause()
      resetVolume()
      stopMusic()
    }
  }

  function rain(){
    if(playingRain == false){
      playMusic("rain")
      resetVolume()
    }else{
      musicRain.pause()
      resetVolume()
      stopMusic()
    }
  }

  function canteen(){
    if(playingCanteen == false){
      playMusic("canteen")
      resetVolume()
    }else{
      musicCanteen.pause()
      resetVolume()
      stopMusic()
    }
  }

  function fireplace(){
    if(playingFireplace == false){
      playMusic("fireplace")
      resetVolume()
    }else{
      musicFireplace.pause()
      resetVolume()
      stopMusic()
    }
  }

  function stopMusic(){
    playingFlorest = false
    playingRain = false
    playingCanteen = false
    playingFireplace = false
  }

  function resetVolume(){
    volumeControlFlorest.value = 0.5
    volumeControlRain.value = 0.5
    volumeControlCanteen.value = 0.5
    volumeControlFireplace.value = 0.5
  
    volumeFlorest = volumeControlFlorest.value
    volumeRain = volumeControlRain.value
    volumeCanteen = volumeControlCanteen.value
    volumeFireplace = volumeControlFireplace.value
    
    musicFlorest.volume = volumeFlorest
    musicRain.volume = volumeRain
    musicCanteen.volume = volumeCanteen
    musicFireplace.volume = volumeFireplace
  }

  return{
    florest,
    rain,
    canteen,
    fireplace,
    pressButton,
    timerEnd
  }
}

volumeControlFlorest.addEventListener("change", function(){
  if(playingFlorest == true){
    volumeFlorest = volumeControlFlorest.value
    musicFlorest.volume = volumeFlorest
  }
})

volumeControlRain.addEventListener("change", function(){
  if(playingRain == true){
    volumeRain = volumeControlRain.value
    musicRain.volume = volumeRain
  }
})

volumeControlCanteen.addEventListener("change", function(){
  if(playingCanteen == true){
    volumeCanteen = volumeControlCanteen.value
    musicCanteen.volume = volumeCanteen
  }
})

volumeControlFireplace.addEventListener("change", function(){
  if(playingFireplace == true){
    volumeFireplace = volumeControlFireplace.value
    musicFireplace.volume = volumeFireplace
  }
})