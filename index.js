let btn1 = document.getElementById("myButton1");
let btn2 = document.getElementById("myButton2");

const HexValues = () =>{
    let myHexaValues  = "0123456789abcdef";             // 16 digits of hexacode
    // console.log(myHexaValues[5]);
    
    let colors = "#";               // # se start karna hai becuase hex code aise hi hota hai "#1b2c6d"
    
    //* Hex Code eg -> #ab1234 6 digit ka random number generate krna hamesha on every click so we wil use loop:
    for(let i=0;i<6;i++){
                
        let randomNumber = myHexaValues[Math.floor(Math.random() * 16)];  // 0 to 9 and then abcdef tak ka number generate hoga
        // console.log(randomNumber);              // 0 to 15 ka any one randome number generate hoga

        colors += randomNumber;         // yeh random number ko colors mein add karte ja rahe hain
    }
    //! console.log(colors);                // final generated!

    return colors;      // yeh he chaiye final output!
};


let copyDiv = document.querySelector(".copyCode");  // yeh div hai jo hex code ko copy karega

const handleButton1 = () =>{
    
    let rgb1 =  HexValues();             // yeh function call kiya hai jo hex code generate karega;
    console.log(rgb1);                  // yeh function call kiya hai jo hex code generate karega;

    document.body.style.backgroundImage = `linear-gradient(to left, ${rgb1} , #444)`; 
    btn1.textContent = rgb1;         // yeh button ka text change karega jo hex code generate hua hai usse;
    
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, #444)`;

};

const handleButton2 = () => {
    let rgb2 = HexValues();             // yeh function call kiya hai jo hex code generate karega;
    console.log(rgb2);                  // yeh function call kiya hai jo hex code generate karega;
    
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb2} , #444)`;
    btn2.textContent = rgb2;         // yeh button ka text change karega jo hex code generate hua hai usse;

    copyDiv.innerHTML = `background-image: linear-gradient(to left, ${rgb2}, #444)`;

};

// Function calls:
btn1.addEventListener("click", handleButton1); 
btn2.addEventListener("click", handleButton2);