const points = document.getElementById("points")
let corrects = 0
let progress = 0
 
const questions = [
    "Hva står RAM for?",
    "Hva står VLAN for?",
    "Hva er GDPR?",
    "Hva er Mac-adresse?",
    "Hva kan du sammenligne med IP-adresse?"
]
 
const answers = [
    ["Random Access Memory", "Radio Access Music", "Radision Asked Mode", "Random Asked Memory"],
    ["Vital Land Area Network", "Virtual Local Area Network", "Voided Loned Area Network", "Virtual Long Area Network"],
    ["General Data Protection Regulation", "General Data Protection Rules", "Gental duration prof Return", "Media Account Control-adresse"],
    ["Gental duration E-Return", "Media Account Control-adresse", "Media Access Control-adresse", "Media Access Control"],
    ["Hjemmeadresse", "Nettverkskortet", "Telefonnummer", "Postadresse"]
 
]
 
const correctAnswers = [0, 1, 0, 2, 0]
const questionsText = document.getElementById("que")
const ans1 = document.getElementById("ans1")
const ans2 = document.getElementById("ans2")
const ans3 = document.getElementById("ans3")
const ans4 = document.getElementById("ans4")
 
function refresh() {
    questionsText.textContent = questions[progress]
    ans1.textContent = answers[progress][0]
    ans2.textContent = answers[progress][1]
    ans3.textContent = answers[progress][2]
    ans4.textContent = answers[progress][3]
    points.textContent = "Poeng: " + corrects
}
 
function check(answer) {
    if (answer == correctAnswers[progress]) {
        corrects++
    }
    else{
        alert("WRONG")
    }
    progress++
    if (progress < questions.length) {
        refresh()
    }
    }
 
 
 
 
refresh()
 