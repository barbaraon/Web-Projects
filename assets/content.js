

console.log('We are ready to replace the images!'); 

chrome.runtime.onMessage.addListener(replace); 


function replace() {
  contadorNum = 0;
  let imgs = document.getElementsByTagName('img'); 
  for(imgElt of imgs) { 
     
     
      let file = "../images/angry-birds.png"; 
      let url = chrome.extension.getURL(file); 
      imgElt.src = url; 
      console.log(url);   
      contadorNum = contadorNum +1;
      console.log(contadorNum);
    } 

    const child = document.createElement('h1');
    child.textContent = " Number of images : " + contadorNum;
    child.style.color = 'blue';
    child.style.backgroundSize= '10em';
    child.style.background = 'black';
    child.style.fontSize = '4em';
    document.body.insertBefore(child,document.body.firstChild);
}




