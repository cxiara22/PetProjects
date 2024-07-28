
window.onload = () => {
    var bgimgs = [`https://c4.wallpaperflare.com/wallpaper/843/56/876/night-artwork-futuristic-city-cyberpunk-wallpaper-preview.jpg`, 
        `https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D`, 
        `https://wallpaper.forfun.com/fetch/d8/d8b84d191ca9773ed1e8facf413b06fe.jpeg`, 
        `https://t4.ftcdn.net/jpg/06/68/21/81/360_F_668218175_fXLxBRPLyvgHBGYwa8bSIq0z8Eo2Tyuu.jpg`]

    var randimg = bgimgs [Math.floor(Math.random()*bgimgs.length)]
    document.body.style.backgroundImage = `url(${randimg})`; 
    document.body.style.backgroundSize = `cover`; 
    document.body.style.backgroundRepeat = `no-repeat`; 
}; 


var Time = document.getElementById("Time"); 

function updateClock() {
    var newTime = new Date(); 
    let hr = newTime.getHours(); 
    const meridiem = hr >= 12? "PM":"AM"; 
    hr = hr%12 || 12; 
    // || is a logical OR operand that picks the second value if the 
    // first equates to 0
    const min = newTime.getMinutes().toString().padStart(2,'0'); 
    const sec = newTime.getSeconds().toString().padStart(2,'0'); 
    Time.innerText = `${hr}:${min}:${sec} ${meridiem}`; 
    
}

updateClock(); 
setInterval(updateClock, 1000); 
