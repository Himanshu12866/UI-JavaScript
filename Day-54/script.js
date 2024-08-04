let box = document.getElementById("box");
let array = ["Window Object", "Document Object", "Navigator Object", "Location Objects", "History Objects"];

function LoadObj() {
  box.innerHTML = ""
  for (let i = 0; i < array.length; i++) {
    let div = document.createElement("div");
    div.setAttribute('id', "box-id")
    let ul = document.createElement("ul");
    ul.style.listStyle = "none"
    let li = document.createElement("button");
    li.style.fontWeight = "bold";

    li.classList = "btn btn-danger m-2 w-100 text-center";

    let div_1 = document.createElement("div");
    div_1.setAttribute("id", "div-id");

    li.addEventListener('click', function (e) {
      var WindowObj = ['alert()', "prompt()", 'confirm()', "open()", "print()", "XHttpRequest", "fetch"];
      var DocumentObj = ["write()", "innerHTML", "innerText", "getElementById()"];
      var NavigatorObj = ['appName()', 'appVersion()', 'plaform()', 'language()', 'cookieEnabled()', 'plugins[]', 'mimeTypes[]', 'geoLoacation()'];
      var LocationObj = ['href', 'hash', 'search', 'reload()', 'assign()', 'protocol', 'port', 'protocol', 'pathname'];
      var HistoryObj = ['back()', 'forward()', 'go()', 'length'];


      console.log(e.target.innerText);



      if (e.target.innerText === "Window Object") {
        div_1.innerHTML = ""
        WindowObj.map(item => {
          div.classList = "m-4";
          let btn = document.createElement("button");
          btn.setAttribute("id", "btn-id")
          btn.classList = "btn btn-warning my-3 mx-2 w-25";
          btn.innerHTML = item + "<br>";
          div_1.appendChild(btn);
          document.getElementById("box-id").appendChild(div_1);
          btn.addEventListener("click", LoadFunc)

        })
      }
      else if (e.target.innerText === "Document Object") {
        div_1.innerHTML = ""
        DocumentObj.map(item => {
          div.classList = "m-3";
          let btn = document.createElement("button");
          btn.setAttribute("id", "btn-id")
          btn.classList = "btn btn-dark my-3 mx-2 w-25";
          btn.innerHTML = item + "<br>";
          div_1.appendChild(btn);
          e.target.insertAdjacentElement("afterend", div_1);
          btn.addEventListener("click", LoadFunc)

        })
      }
      else if (e.target.innerText === "Navigator Object") {
        div_1.innerHTML = "";
        NavigatorObj.map(item => {
          div.classList = "m-3";
          let btn = document.createElement("button");
          btn.setAttribute("id", "btn-id");
          btn.classList = "btn btn-info my-3 mx-2 w-25";
          btn.innerHTML = item + "<br>";
          div_1.appendChild(btn);
          e.target.insertAdjacentElement("afterend", div_1);
          btn.addEventListener("click", LoadFunc)
        }
        )
      }


      else if (e.target.innerText === "Location Objects") {
        div_1.innerHTML = "";
        LocationObj.map(item => {
          div.classList = "m-3";
          let btn = document.createElement("button");
          btn.setAttribute("id", "btn-id");
          btn.classList = "btn btn-secondary my-3 mx-2 w-25";
          btn.innerHTML = item + "<br>";
          div_1.appendChild(btn);
          e.target.insertAdjacentElement("afterend", div_1);
          btn.addEventListener("click", LoadFunc)
        })
      }
      else if (e.target.innerText === "History Objects") {
        div_1.innerHTML = "";
        HistoryObj.map(item => {
          div.classList = "m-3";
          let btn = document.createElement("button");
          btn.setAttribute("id", "btn-id");
          btn.classList = "btn btn-success my-3 mx-2 w-25";
          btn.innerHTML = item + "<br>";
          div_1.appendChild(btn);
          e.target.insertAdjacentElement("afterend", div_1);
          btn.addEventListener("click", LoadFunc)

        })
      }
    })
    li.innerHTML = array[i];
    ul.appendChild(li);
    div.appendChild(ul);
    box.appendChild(div);
  }
}
function LoadFunc(event) {
  let buttonText = event.target.innerText.trim();

  if (buttonText === "alert()") {
    alert("Jai Sri Ram");
  } else if (buttonText === "prompt()") {
    let name = prompt("Enter your name");
    alert("Your name is " + name);
  }
  else if (buttonText === "confirm()") {
    let confirmed = confirm("Are you sure you want to delete this file?");
    if (confirmed) {
      alert("File deleted successfully");
    }
    else {
      alert("File not deleted");
    }
  }
  else if (buttonText === "open()") {
    let url = prompt("Enter the URL of the website you want to open");
    window.open(url);
  }
  else if (buttonText === "print()") {
    alert("Printing Started")
    window.print();
  }
  else if (buttonText === "fetch") {

    fetch("https://fakestoreapi.com/products/category/electronics")
      .then(response => {
        return response.json();
      })
      .then(data => {
        alert("Data Fetched Successfully")
        var div = document.createElement("div");
        div.setAttribute("id", "ProductCard")
        document.getElementById("box-id").appendChild(div)
        var table = document.createElement("table");
        table.className = "table table-hover"
        var tbhead = document.createElement("thead");
        var tr_1 = document.createElement("tr");
        var th_1 = document.createElement("th");
        var th_2 = document.createElement("th");
        var th_3 = document.createElement("th");
        var th_4 = document.createElement("th");
        th_1.innerHTML = "Sr.No";
        th_2.innerHTML = "Name";
        th_3.innerHTML = "Price";
        th_4.innerHTML = "Preview";
        tr_1.appendChild(th_1);
        tr_1.appendChild(th_2);
        tr_1.appendChild(th_3);
        tr_1.appendChild(th_4);
        tbhead.appendChild(tr_1);
        table.appendChild(tbhead);

        data.map((product, index) => {


          let tbody = document.createElement("tbody");

          let tr_2 = document.createElement("tr");

          let td_1 = document.createElement("td");
          let td_2 = document.createElement("td");
          let td_3 = document.createElement("td");
          let td_4 = document.createElement("td");

          td_1.innerHTML = index + 1;
          td_2.innerHTML = product.title;
          td_3.innerHTML = "&#8377;  " + product.price;
          td_4.innerHTML = `<img src= ${product.image} style= "width:50px; height:50px ">`

          tr_2.appendChild(td_1);
          tr_2.appendChild(td_2);
          tr_2.appendChild(td_3);
          tr_2.appendChild(td_4);

          tbody.appendChild(tr_2);
          table.appendChild(tbody)

          document.getElementById("ProductCard").appendChild(table)
        })
      })
  }

  else if(buttonText == "write()"){
    let p = document.createElement("p");
    let msg = prompt("Enter Your Message");
    p.innerHTML = msg;
    document.getElementById("btn-id").appendChild(p);
  }
  else if(buttonText == "innerHTML"){
    let p = document.createElement("p");
    let msg = prompt("Enter Your Message");
    p.innerHTML = msg;
    document.getElementById("btn-id").appendChild(p);
  }


  else {
    alert("Unmatched");
  }
}

