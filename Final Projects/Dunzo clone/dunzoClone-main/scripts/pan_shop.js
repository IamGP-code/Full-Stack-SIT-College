let pan_Data = [];

function panShop(name,address,distance,image){
    this.name=name;
    this.address=address;
    this.distance=distance;
    this.image=image;
}
let p1 = new panShop("Shree Ganesh Store","Andheri East","0.8KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/VkhWK3pPRVhqYmZzalF2SnlzSEczUT09-1577703419915-store_image.jpg")
pan_Data.push(p1);

let p2 = new panShop("Maharashtra Paan Bidi Shop","Marol Military Road","0.9KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/81fc52dd-cb65-4d6d-b0a1-ad579cdc2d69-1565269361029-store_image.jpg")
pan_Data.push(p2);

let p3 = new panShop("Kohinoor Store","Saki Naka","2.4KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/SmxQVG1xOXhZcE1Ca29WVU9SMzRJQT09-1595421912600-store_image.jpg")
pan_Data.push(p3);

let p4 = new panShop("Vinisha Paan Shop","Saki Naka","3.4KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/SmxQVG1xOXhZcE1Ca29WVU9SMzRJQT09-1595421912600-store_image.jpg")
pan_Data.push(p4);

let p5 = new panShop("Adarsh Paan Shop","Kurla West","1.5KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/NStEN2t5STBrejE1Nys3TXMrRGtjUT09-1624286702430-store_image.jpg")
pan_Data.push(p5);

let p6 = new panShop("Ds Foods","Santacruz","4.4KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/849faef2-28dd-4997-9914-b76191be3324-1630308368220-store_image.jpg")
pan_Data.push(p6);

let p7 = new panShop("New Satyam Stores","Andheri West","15.4KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/bm1iUHpkc1Z3TTNoT0hWSDdhRkxZZz09-1631178513340-store_image.jpg")
pan_Data.push(p7);

let p8 = new panShop("Hussain General Stores","Varsova","12.4KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/cce3ffe8-4325-4816-acee-18ed62df30d6-1629713811573-store_image.jpeg")
pan_Data.push(p8);

let p9 = new panShop("Honey Foods","Malad West","18.4KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/35641a51-ec92-4aa2-8261-bb0b7eaa6582-1598263515652-store_image.jpeg")
pan_Data.push(p9);

let p10 = new panShop("24 Hrs Shop","Andheri West","12.7KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/SmxQVG1xOXhZcE1Ca29WVU9SMzRJQT09-1595421912600-store_image.jpg")
pan_Data.push(p10);

let p11 = new panShop("Xpress Market","Andheri","14KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/ZHMvdm5SN3ZReW5sZkcreWNUa2tIdz09-1641388409280-store_image.jpg")
pan_Data.push(p11);

let p12 = new panShop("Patel Super Market","Andheri West","12.7KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/194aecb2-3f31-4c2a-a45e-13e9a9d028a0-1596093301315-store_image.jpeg")
pan_Data.push(p12);

let p13 = new panShop("Krishna Cigarette Corner","Marol Military Road","0.8KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/VkhWK3pPRVhqYmZzalF2SnlzSEczUT09-1577703419915-store_image.jpg")
pan_Data.push(p13);

let p14 = new panShop("Vishal store","Malad West","15.8KM","https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/d9d7da7f-09d5-4b2f-801b-9a5a030b0ea7-1624612957635-store_image.jpg")
pan_Data.push(p14);

localStorage.setItem("panstore",JSON.stringify(pan_Data));
console.log(pan_Data);

function showData(pan_Data){
    let pan = document.getElementById("pan_Dukan");
    pan.innerHTML = null;

    pan_Data.map(function(elem){
        let div = document.createElement("div");

        let imgdiv = document.createElement("div")
        let img = document.createElement("img");
        img.src = elem.image;
        
        let datadiv = document.createElement("div");
        let title = document.createElement("h2");
        title.innerText = elem.name;

        let address = document.createElement("p");
        address.innerText = elem.address;

        let distance = document.createElement("p");
        distance.innerText = elem.distance;

        imgdiv.append(img);
        datadiv.append(title,address,distance);

        div.append(imgdiv,datadiv);
        pan.append(div);

    })
}
showData(pan_Data);

document.querySelector("#pan_Dukan").addEventListener("click",myfunction)
function myfunction(elem){
    window.location.href="advance_item.html"
    
}

