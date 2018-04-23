chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  const content = `
        <style>
        #mydiv {
            position: absolute;
            top: 350px;
            left: 110px;
            z-index: 1000;
            background-color: #f1f1f1;
            text-align: center;
        }
        
        #emails {
            padding: 20px 10px;
            cursor: move;
            z-index: 10;
            background-color: #2196F3;
            color: #fff;
        }

        #emails div{
          margin:5px;
        }

        .input-email{
          font-size:10px;
          width: 170px;
        }
        
        </style>

        <div id="emails"></div>     
    `;

  const dragDiv = document.createElement("div");
  dragDiv.id = "mydiv";
  dragDiv.innerHTML = content;
  document.body.appendChild(dragDiv);

  copyEmail();
  createEmailList();

  //window.addEventListener('hashchange', function(e){console.log('hash changed')})

  //window.addEventListener('popstate', function(e){console.log('url changed')});

  //let urls = []

  //function checkChange(){
  //urls.push(window.location.href)
  //if(urls[-1] != urls[-2]){
  //createEmailList()
  //}
  //}

  //setInterval(createEmailList,100)

  var currentPage = window.location.href;
  let urls = [currentPage]
  console.log(urls)
  document.addEventListener("click", function() {
    let timer = 0;
    let intURLChange = setInterval(function() {
      if(!urls.includes(window.location.href)){
        urls.push(window.location.href)
      }
      if (currentPage != window.location.href) {
        // page has changed, set new page as 'current'
        currentPage = window.location.href;
        deleteList();
        createEmailList();
        // do your thing...
      }
      timer++;
      console.log(timer)
      if(timer>100){
        clearInterval(intURLChange)
        console.log(urls)
        timer=0
      }
    }, 10);
    
  });

  // listen for changes

  //Make the DIV element draggagle:
  dragElement(document.getElementById("mydiv"));

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

function copyEmail() {
  document.querySelectorAll(".btn-email").forEach(btn =>
    btn.addEventListener("click", function() {
      document.getElementById(this.previousElementSibling.id).select();
      document.execCommand("Copy");
    })
  );
}

const emails = [];
let counter = 0;

function createEmailList() {
  const elements = Array.from(document.querySelectorAll("[href^='mailto']"));
  const myNode = document.querySelector("#emails");
  let nbrEl = 0;

  for (let i = 0; i < elements.length; i++) {
    const email = elements[i].innerText;
    if (!emails.includes(email) && email != "helpme@gabriellemoore.com") {
      console.log(email);
      emails.push(email);
      const content = `
      <input type="text" class="input-email" value="${email}" id="${i}"> <button class="btn-email" id="${i}">Copy</button>`;
      const emailDiv = document.createElement("div");
      emailDiv.innerHTML = content;
      myNode.appendChild(emailDiv);
      nbrEl++;
    }
  }
}

function deleteList() {
  const myNode = document.querySelector("#emails");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}

// Observe a specific DOM element:
