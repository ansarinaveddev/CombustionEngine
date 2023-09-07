const buttomBarDetails = document.getElementsByClassName("buttomBarDetails")
const boxes = document.getElementsByClassName("boxes")
console.log(buttomBarDetails)
// console.log(boxes[0].style.backgroundColor = "red")

const colors = ["#E8BD0D", "#8D3DAF", "#E07C24", "#758283", "#E03B8B", "#6A1B4D", "#D82E2F", "#383CC1", "#03203C", "#1C8D73"]

setInterval(() => {
    const randomNumber = Math.floor((Math.random() * 10))
    console.log("Random number is " + randomNumber)
    const picketColor = colors[randomNumber]
    console.log(picketColor)

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.border = `5px solid ${picketColor}`
    }
}, 1000);
