

console.log('We are ready to replace the images!'); 

chrome.runtime.onMessage.addListener(replace); 


function replace() {
  contNum = 0;
  let imgs = document.getElementsByTagName('img'); 
  for(imgElt of imgs) { 
     
      let h = imgElt.height;
      let w = imgElt.width;
      let file = "../images/angry-birds.png"; 
      let url = chrome.extension.getURL(file); 
      imgElt.src = url; 
      imgElt.height = h;
      imgElt.width = w;
      console.log(url);   
      contNum = contNum +1;
      console.log(contNum);
    } 

    const child = document.createElement('h1');
    child.textContent = " Number of images : " + contNum;
    child.style.color = 'blue';
    child.style.backgroundSize= '10em';
    child.style.background = 'black';
    child.style.fontSize = '4em';
    document.body.insertBefore(child,document.body.firstChild);
}




