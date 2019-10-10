//audioEngine.js

let audioEngine = {
    init: function(){
        try{
            window.AudioContext = window.AudioContext||window.webkitAudioContext;
            this.ctx = new AudioContext();
            interfaceLib.errorMessage.generate("Audio Context found and set.");
        }
        catch(e){
            interfaceLib.errorMessage.generate("Audio Context not found.");
        }
    },

    oscillator0: {
        osc: "",
        oscType: "sine",
        oscFreq: 440,
        gain: "",
        init: function(){

            this.gain = audioEngine.ctx.createGain();
            this.osc = audioEngine.ctx.createOscillator();
            
            this.osc.connect(this.gain);
            this.gain.connect(audioEngine.ctx.destination);

            //this.osc.start();
        },
        playNote: function(note, vol){
            this.gain.gain.value = vol;

            this.osc.type = this.oscType;
            this.osc.frequency.setValueAtTime(audioEngine.notesDef[note], audioEngine.ctx.currentTime);
            this.osc.start();
        },
        stopNote: function(){
            this.osc.stop();
        }
    },

    notesDef: {
        "A0": 27.5,
        "A#0": 29.13524,
        "B0": 30.86771,
        "C1": 32.70320,
        "C#1": 34.64783,
        "D1": 36.70810,
        "D#1": 38.89087,
        "E1": 41.20344,
        "F1": 43.65353,
        "F#1": 46.24930,
        "G1": 48.99943,
        "G#1": 51.91309,
        "A1": 55.00000,
        "A#1": 58.27047,
        "B1": 61.73541,
        "C2": 65.40639,
        "C#2": 69.29566,
        "D2": 73.41619,
        "D#2": 77.78175,
        "E2": 82.40689,
        "F2": 87.30706,
        "F#2": 92.49861,
        "G2": 97.99886,
        "G#2": 103.8262,
        "A2": 110,
        "A#2": 116.5409,
        "B2": 123.4708,
        "C3": 130.8128
    }
}