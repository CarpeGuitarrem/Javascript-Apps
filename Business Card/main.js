const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = 500;
const height = canvas.height = 275;

//initial render of business card 
ctx.fillStyle='white';
ctx.strokeStyle='black';
ctx.fillRect(0,0,width,height);
ctx.fillStyle='rgb(240,240,200)';
ctx.fillRect(0,height*0.6,width,height);
ctx.strokeRect(0,0,width,height);

//Referenced by draw()
const myName = document.querySelector('#name');
const myBusiness = document.querySelector('#business');
const myTagline = document.querySelector('#tagline');

const btn = document.querySelector('#download');
const menu = document.querySelector('.optionMenu');

menu.addEventListener('keyup', draw);

//function to convert render to file 
download.addEventListener('click',() => { 
	 let canvasImage = canvas.toDataURL('image/png');
    
    // this can be used to download any image from webpage to local disk
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () { //set function to create dummy download link to blob 
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = 'business_card.png';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
      };
      xhr.open('GET', canvasImage); // This is to download the canvas Image
      xhr.send();
});

function draw(){
	const name = myName.value;
	const business = myBusiness.value;
	const tagline = myTagline.value.toUpperCase();
	ctx.clearRect(0, 0, width, height);
	ctx.fillStyle='white';
	ctx.strokeStyle='black';
	ctx.fillRect(0,0,width,height);
	ctx.fillStyle='rgb(240,240,200)';
	ctx.fillRect(0,height*0.6,width,height);
	ctx.strokeRect(0,0,width,height); // Initial card
	
	indent = 30;
	
	ctx.fillStyle='black';
	ctx.font = '50px serif';
	ctx.fillText(name,indent,90);
	ctx.font = '2em sans-serif';
	ctx.fillText(business,indent+10,130);
	ctx.font = '1.2em sans-serif';
	ctx.fillText(tagline,indent+50,200);
}