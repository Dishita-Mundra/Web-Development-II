// function handleClick() {
//     const button=document.getElementById("btn");
//     button.textContent="Clicked"
//     button.style.backgroundColor="red";
//     button.style.color="white";
    // const h1=document.querySelector("h1");
    // h1.style.color="green";
//     document.querySelector("h1").style.color="green";
// }

function handleClick() {
    // create h2 element
    const h2 = document.createElement('h2');
    h2.textContent = 'Butterfly';

    // create image element
    const img = document.createElement('img');
    img.src = "C:\\Users\\DISHITA\\Desktop\\butterfly.avif";
    img.alt = 'Butterfly';
    img.style.width = '200px'; // set image width

    // append elements to content div
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(h2);
    contentDiv.appendChild(img);
}