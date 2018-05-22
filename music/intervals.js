//Create the instrument:
const synth = new Tone.PolySynth(8, Tone.Synth);
synth.toMaster();

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

//Get the buttons in the table:
let tableButtons = document.getElementsByClassName("tableButtons");

for (let n = 0; n < tableButtons.length; n++) {
	tableButtons[n].addEventListener("click", () => {
		playIntervalFromC(n);
	}, false);
}

async function playIntervalFromC(semitones) {
	let intervalNotes = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"];

	synth.triggerAttackRelease(["C4", intervalNotes[semitones]], "2s");
}

//Table:

document.getElementById("tableCollapseButton").addEventListener("click", () => {
	document.getElementById("intervalTable").classList.toggle("hidden");
}, false);
