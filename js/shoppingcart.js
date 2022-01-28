window.onload = function() {
    $("item1").onclick = addItem; 
    $("item2").onclick = addItem;   
    $("item3").onclick = addItem;  
    $("item4").onclick = addItem;  
    $("item5").onclick = addItem; 
    $("item6").onclick = addItem;  
    $("item7").onclick = addItem;   
    $("item8").onclick = addItem;   
    $("item9").onclick = addItem;   
    $("item10").onclick = addItem;
    $("total").innerText = "You have not added any items";
}

var items = [
    {name:"Blue Truck Beauty", count:0, price:49.99},
    {name:"Red Classic Beauty", count:0, price:49.99},
    {name:"Wagon Beauty", count:0, price:49.99},
    {name:"Wooden Rose", count:0, price:54.99},
    {name:"Best Wishes", count:0, price:89.99},
    {name:"Many Wishes", count:0, price:79.99},
    {name:"True Love", count:0, price:79.99},
    {name:"Real Love", count:0, price:49.99},
    {name:"Dangling Roses", count:0, price:49.99},
    {name:"The Simple Things", count:0, price:39.99}
]

function $(id) {
    return document.getElementById(id);
}

function addItem() {
    var x = (this.id).replace("item","");
    x--;

    items[x].count++;
    clearList()
    adjust()
}

function clearList() {
    var ul = $("shoppingcart");
    ul.innerHTML = "";

    ul = $("cartqty");
    ul.innerHTML = "";

    ul = $("cost");
    ul.innerHTML = "";

    ul = $("rmbtns");
    ul.innerHTML = "";
}

function adjust() {
    var descriptions = $("shoppingcart");
    var quantity = $("cartqty");
    var cost = $("cost");
    var btns = $("rmbtns");
    var itemTotals = 0;
    var incart = false;
    var total = 0;
    for(var x = 0; x < items.length; x++) {
        if(items[x].count > 0){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(items[x].name));
            descriptions.append(li);

            li = document.createElement("li");
            li.appendChild(document.createTextNode(items[x].count));
            quantity.append(li);

            li = document.createElement("li");
            li.appendChild(document.createTextNode((items[x].count * items[x].price).toFixed(2))    );
            cost.append(li);
            total += (items[x].count * items[x].price);

            li = document.createElement("li");
            var btn = document.createElement("button");
            btn.innerHTML = "Remove a " + items[x].name;
            btn.classList.add("fill-cell");
            btn.addEventListener("click", deleteOne);

            li = btn;
            btns.append(li);
            incart = true;
        }
    }
    if(!incart){
        $("total").innerText = "You have not added any items";
    } else {
        $("total").innerText = "Subtotal: $" + total.toFixed(2);
    }
}

function deleteOne() {
    var name = (this.innerText).replace("Remove a ", "");
    for(var i = 0; i < items.length; i++){
        if(items[i].name === name){
            items[i].count--;
            clearList()
            adjust()
            break;
        }
    }
}