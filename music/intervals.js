//Establish API's:
//Tone.JS:
const synth = new Tone.PolySynth(8, Tone.Synth);
synth.toMaster();

const toneJSNotes = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "F#5", "G5", "Ab5", "A5", "Bb5", "B5", "C6"];
const noteNames = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B", "C"];

function playInterval(root, interval) {
	synth.triggerAttackRelease([root, interval], "2s");
}



//Get the buttons in the table:
let tableButtons = document.getElementsByClassName("tableButtons");
for (let n = 0; n < tableButtons.length; n++) {
	tableButtons[n].addEventListener("click", () => {
		playInterval("C4", toneJSNotes[n]);
	}, false);
}

//Table:
document.getElementById("tableCollapseButton").addEventListener("click", () => {
	document.getElementById("intervalTable").classList.toggle("hidden");
}, false);


//Get the practise button:
let practiseButton = document.getElementById("practiseButton").addEventListener("click",() => {
	intervalPractise();
}, false);

function intervalPractise() {
	let rootSemitones = Math.floor(Math.random() * 13);
	let intervalSemitones = Math.floor(Math.random() * 13) + rootSemitones;

	//Get the text of the root note, and then replace it with the name of the root note:
	document.getElementById("note1Text").innerHTML = noteNames[rootSemitones];
	//Same for the interval note:
	document.getElementById("note2Text").innerHTML = noteNames[intervalSemitones];

	playInterval(toneJSNotes[rootSemitones], toneJSNotes[intervalSemitones]);
}