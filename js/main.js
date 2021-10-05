const img = document.getElementById('img-slide')
const imgObj = [
    'img/IMG_1.jpg',
    'img/IMG_2.jpg',
    'img/IMG_3.jpg',
    'img/IMG_4.jpg',
    'img/IMG_5.jpg',
    'img/IMG_6.jpg',
]

let indexOfImg = 0

setInterval(() => {
 
    const imgUrl = imgObj[indexOfImg]
   
    if(indexOfImg >= imgObj.length){
        indexOfImg = 0
    }
    else{
        img.setAttribute('src', imgUrl)  
        indexOfImg++
    }
}, 2000);