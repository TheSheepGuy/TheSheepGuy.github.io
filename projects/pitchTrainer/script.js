//Create audio api context:
var audioCtx = new AudioContext(), //audioCtx = Audio Context
    oscillator, gainNode,
    freq = 440, randomNote, pickedNote = "A", octave = 4; //Create global variables & defaults to be used/replaced later

//Make sleep function:
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


//Choose a random note from C-B:
function newRandomNote(){
    randomNote = Math.floor(Math.random() * 11);
    octave = document.getElementById("octave").value - 3; //See what octave the user wants to train
    switch(randomNote){
        case 0:
            freq = 130.81 * Math.pow(2,octave);
            pickedNote = "C";
            console.log("Note is C")
            break;
        case 1:
            freq = 138.59 * Math.pow(2,octave);
            pickedNote = "C#";
            console.log("Note is C#")
            break;
        case 2:
            freq = 146.83 * Math.pow(2,octave);
            pickedNote = "D";
            console.log("Note is D")
            break;
        case 3:
            freq = 155.56 * Math.pow(2,octave);
            pickedNote = "D#";
            console.log("Note is D#")
            break;
        case 4:
            freq = 164.81 * Math.pow(2,octave);
            pickedNote = "E";
            console.log("Note is E")
            break;
        case 5:
            freq = 174.61 * Math.pow(2,octave);
            pickedNote = "F";
            console.log("Note is F")
            break;
        case 6:
            freq = 185 * Math.pow(2,octave);
            pickedNote = "F#";
            console.log("Note is F#")
            break;
        case 7:
            freq = 196 * Math.pow(2,octave);
            pickedNote = "G";
            console.log("Note is G")
            break;
        case 8:
            freq = 207.65 * Math.pow(2,octave);
            pickedNote = "G#";
            console.log("Note is G#")
            break;
        case 9:
            freq = 220 * Math.pow(2,octave);
            pickedNote = "A";
            console.log("Note is A")
            break;
        case 10:
            freq = 233.08 * Math.pow(2,octave);
            pickedNote = "A#";
            console.log("Note is A#")
            break;
        case 11:
            freq = 246.94 * Math.pow(2,octave);
            pickedNote = "B";
            console.log("Note is B")
            break;
    }    
}

//Play & stop the note:
async function playNote(){
    
    //Create the Oscillator node
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    gainNode.gain.value = document.getElementById("volumeControl").value / 100; //Set the volume
    oscillator.type = document.getElementById("waveType").value; //I.e. sine wave
    oscillator.frequency.value = freq; // in Hz
    oscillator.start();
    document.getElementById("play").setAttribute('disabled', true);
    await sleep(document.getElementById("playTime").value * 1000);
    oscillator.stop();
    document.getElementById("play").removeAttribute('disabled');
    
}
function stopPlaying(){
    oscillator.stop();
    document.getElementById("play").removeAttribute('disabled');
}

//Check if the guess is right:
function checkGuess(){
    var guessedNote = document.getElementById("guessedNote").value;
    if(guessedNote == pickedNote){
        document.getElementById("answer").innerHTML = pickedNote;
        document.getElementById("answer").style.color = "green";
    }
    else{
        document.getElementById("answer").innerHTML = guessedNote;
        document.getElementById("answer").style.color = "red";
    }
}

//Show instruction:
function toggleInstructions(){
    if(document.getElementById("instructions").innerHTML == "Instructions?"){
        document.getElementById("instructionText").style.display = "block";
        document.getElementById("instructions").innerHTML = "Hide instructions";
        console.log("Shown");
    }
    else{
        document.getElementById("instructionText").style.display = "none";
        document.getElementById("instructions").innerHTML = "Instructions?";
        console.log("Hidden");
    }
}