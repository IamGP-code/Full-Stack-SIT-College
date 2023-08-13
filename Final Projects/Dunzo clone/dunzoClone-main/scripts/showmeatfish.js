
let before_element = document.getElementById('products1').querySelector('button');
let before_div = 0;

  // ----------------Fresh Fruits Objects----------------------------------------------------------------------------------------------------------------------
  
  let Papaya = [
    {
        name: "Chickens"
    },
    {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/MGdFRlFaM00wMjdlY0wva0lqRlhQQT09-product_image.jpg",name:"Chicken Breat strips", price:123},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1646206064623_product_5bcf812a752feb5014a2e2d5_1.jpg",name:" Boneless Chicken", price:523},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/RTd1WE5ndkh0WHVmdE1aQ3ZQVWlaQT09-product_image.jpg",name:"Chicken Fry Cut", price:233},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644858426890_product_5cb462e6f3995b3a4e6da393_1.jpg",name:"Chicken Curry Cut", price:543},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/S1RCdjFobVJkZzZXaWs4VkM3OEhrQT09-product_image.jpg",name:"Broiler Chicken", price:223},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/YXpwaFhHTWRyemVITWtHcHJaQkhJQT09-product_image.jpg",name:"Chicken Cury cut With Skin", price:278}
        ]

    let Fruits = [Papaya  ];

    localStorage.setItem('PBO',JSON.stringify(Fruits));

// _____________________________________

     // ----------------Fresh Vegetables Objects----------------------------------------------------------------------------------------------------------------------
  
     let Fresh_Vegetables = [
        {
            name: "Fish & SeaFoods"
        },

        {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/TFRrSXA0RlpDM0ppbktJamdtRi9TUT09-product_image.jpg",name:"Cotla", price:400},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/N1F6akV6czcwK3lHUFhQd0tpQ2NzUT09-product_image.jpg",name:" Rohu", price:400},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/T09YL2VSWWZ6SHBUSllHaGh2bjlDUT09-product_image.jpg",name:"Rohu-Slice", price:500},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/aTZZWDF4aXVMMjFlanNUM0xmdzRaQT09-product_image.jpg",name:"Catla Steaks Without Head", price:699},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615716392323_product_5c4b852379ae300f6ea008e5_1.jpg",name:"Fish Popcorn", price:800},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/VUFyY1NsVy9BL3RvRmZrckhlUzRzQT09-product_image.jpg",name:"Prawns(Medium)", price:1000}
        ]

    
    let Vegetables = [Fresh_Vegetables];
    localStorage.setItem('veg',JSON.stringify(Vegetables));

// ___________________________________________________

   // ----------------Fresh Herbs Objects----------------------------------------------------------------------------------------------------------------------
  
   let Fresh_Herbs = [
    {
        name: " Mutton"
    },

    {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644858423802_product_5bcf812a752feb5014a2e2f8_1.jpg",name:"Mutton Curry Cut", price:999},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/RjE2ZHoydnVrMDFoVTJ4dTYyNEdiUT09-product_image.jpg",name:" Mutton With Bone", price:799},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/aHpqdTFrUkhCUVdERm1IUENpUVZzUT09-product_image.jpg",name:"Mutton Leg Shoulder", price:1199},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644858423884_product_5bcf812a752feb5014a2e2fa_1.jpg",name:"Mutton Keema(Mince)", price:999},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/YlhMMUx3b1RLUXJyUnFURk95WktVZz09-product_image.jpg",name:"Mutton Biriyani Cut", price:850},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/clZlaC9FemJqY2hTNWtIS1IyM040QT09-product_image.jpg",name:"Mutton Chops", price:779}

  ];

  let Herbs = [Fresh_Herbs];
  localStorage.setItem('herbs',JSON.stringify(Herbs));

 
// ____________________________________________________________

      // ----------------Cuts And Sprouts-------------------------------------------------------------------------------------------------------------------
  
      let  Cuts_And_Sprouts = [
        {
            name: "Eggs"
        },

        {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615716379823_product_5bcf812a752feb5014a2e2ba_1.jpg",name:"Eggs", price:72},
           {url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/VVdxZWI2djBHNFFtTHMrU1pSdjAwUT09-product_image.jpg",name:"Natures Farn Fresh Eggs", price:78},
           

    ];

    let Cuts = [ Cuts_And_Sprouts];
    localStorage.setItem('cuts',JSON.stringify(Cuts));
    console.log(Cuts)


// _________________________________________________________




    function display(arr) {
    let main_div = document.getElementById("prds");

        arr.forEach(function(type) {
        type.forEach(function(products,index) {
        if(index === 0){
        let h2 = document.createElement('h2');
        h2.innerText = products.name;
        h2.style.fontWeight = 'bold';
        main_div.append(h2);

                    }else{
                        var div = document.createElement("div");
                        var img = document.createElement("img");
                        img.setAttribute("id","img")
                        var details = document.createElement("div");
                        var name = document.createElement("h4")
                        var quantity = document.createElement("p");
                        var price = document.createElement("h5");
                        var button = document.createElement("button");
                        
        // -------------------Adding all products dynamically.------------------------------------
                        img.src = products.url;
                        name.textContent=products.name;
                        // quantity.textContent=products.volume;
                        price.textContent=`₹ ${products.price}`;
                        button.innerText="+ADD"
                        details.append(name,quantity,price);
                        quantity.setAttribute("class","quantity");
                        name.setAttribute("class","name");
                        price.setAttribute("class","name")
                        details.setAttribute("id","details")
                        div.append(img,details,button);
                        div.setAttribute("id","divs")
                        document.getElementById("prds").append(div);
                        button.addEventListener('click',moveToCart);
                        div.addEventListener('mouseenter',function(){
                        div.querySelector('h4').style.color = 'green';
                        div.setAttribute('class','transform');
                        })
                        div.addEventListener('mouseleave',function(){
                        div.querySelector('h4').style.color = 'black';
                        div.setAttribute('class','transformBack');
                        })
                    }
                    
            })
        });
        before_div = document.getElementById('prds');
    }

    function displayitems(e,id){
        before_element.style = "none";
        console.log(before_div)
        
        while (before_div.firstChild) {
            before_div.removeChild(before_div.lastChild);
        }

        let btn = e.target;
        btn.style.fontSize = "large";
        btn.style.fontWeight = "bold";
        btn.style.color="rgb(0, 179, 122)";
        before_element = btn;

        let itemsHead = document.getElementById('heading');
        itemsHead.innerText = btn.innerText;
        let data = JSON.parse(localStorage.getItem(id));

        if(data == null){
        let main_div = document.getElementById("prds");
        let h2 = document.createElement('h2');
        h2.innerText = "Not Available Sorry..";
        main_div.append(h2);
        }else{
        display(JSON.parse(localStorage.getItem(id)));
        }
       
    }
    


    display(JSON.parse(localStorage.getItem('PBO')));
    display(JSON.parse(localStorage.getItem('cuts')));
    display(JSON.parse(localStorage.getItem('herbs')));
    display(JSON.parse(localStorage.getItem('veg')));
    

    function moveToCart() {
    location.reload();
    let cart = [];
    let isThere = false;
        
    let price = event.target.parentNode.querySelector('h5').innerText;
    let arr = price.split(" ");
    price = Number(arr[1]);

    let item = {
        name:event.target.parentNode.querySelector('h4').innerText,
        img:event.target.parentNode.querySelector('img').src,
        volume:event.target.parentNode.querySelector('p').innerText,
        price:price,
        qty:1,
        };

        console.log(item);

        cart = JSON.parse(localStorage.getItem('dCart')); 

        if(cart === null){
        console.log('set the cart');
        cart = [item];
        localStorage.setItem('dCart',JSON.stringify(cart));
        }else{
        cart.forEach(function(prd){
        if(prd.name === item.name){
        prd.qty = prd.qty + 1;
        isThere = true;
        } 
            });

            if(isThere == false){
            cart[cart.length]=item;
            localStorage.setItem('dCart',JSON.stringify(cart));
            isThere = false;
            }else{
            localStorage.setItem('dCart',JSON.stringify(cart));
            }
            
        }
        if(JSON.parse(localStorage.getItem('dCart')) != null){
        displayCartItems();
        }
       
    }


    function displayCartItems() {
    let total_price = 0;
    let main_div = document.getElementById('products3')
    main_div.style.overflow = 'scroll';
    let cart = JSON.parse(localStorage.getItem('dCart'));
    console.log(cart);
    
        while (main_div.firstChild) {
        main_div.removeChild(main_div.lastChild);
        }

            let p = document.createElement('p');
            p.innerText = 'Your Cart';
            let ul = document.createElement('ul');
            main_div.append(p);

            cart.forEach(function(prd){
            let li = document.createElement('li');
            li.style.display = 'flex';
            li.style.marginBottom = '15px'

            let div1 = document.createElement('div');
            div1.style.width = '40%'
            let h3 = document.createElement('h3');
            h3.innerText = prd.name;
            h3.style.fontWeight = 'lighter';
            let h5 = document.createElement('h5');
            h5.style.fontWeight = 'lighter';
            h5.innerText = prd.volume;

            let div2 = document.createElement('div');
            div2.id = "box";
            div2.style.width = '15%'
            let btn1 = document.createElement('button');
            btn1.id = 'minus';
            btn1.addEventListener('click',function(){
                    
            let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

            let cart = JSON.parse(localStorage.getItem('dCart'));

            cart.forEach(function(prd,index){
            if(prd.name == name){
            prd.qty = prd.qty-1;
            if(prd.qty == 0){
            cart.splice(index,1)
                               
            }
            total_price -= prd.price;
            }
            });
            localStorage.removeItem('dCart')
            localStorage.setItem('dCart',JSON.stringify(cart));
            location.reload();
            if(JSON.parse(localStorage.getItem('dCart')).length === 0){
            localStorage.removeItem('dCart')
            }

            })


                let span = document.createElement('span');
                span.id ='val';


                let btn2 = document.createElement('button');
                btn2.id = 'plus';
                btn2.addEventListener('click',function(){
                  
                let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

                let cart = JSON.parse(localStorage.getItem('dCart'));

                cart.forEach(function(prd){
                if(prd.name == name){
                prd.qty = prd.qty+1;
                total_price += prd.price;
                }
                });

                localStorage.removeItem('dCart')
                localStorage.setItem('dCart',JSON.stringify(cart));
                location.reload();
                })
                
                span.innerText = prd.qty;
                btn1.innerText = '-';
                btn2.innerText = '+';

                let div3 = document.createElement('div');
                div3.style.width = '20%'
                let h4 = document.createElement('h4');
                h4.innerText = '₹'+ prd.price * prd.qty;

                total_price += prd.price*prd.qty;

                div1.append(h3,h5);
                div2.append(btn1,span,btn2);
                div3.append(h4)
                li.append(div1,div2,div3);
                ul.append(li)
                
            })
                let div4 = document.createElement('div');
                div4.id = 'checkout';
                let checkout_btn = document.createElement('button');
                checkout_btn.innerText = `checkout ₹${total_price}`;
                checkout_btn.setAttribute("class","checkout")
                checkout_btn.addEventListener('click',function(){
                    window.location.href = "manage-payment.html";
                });
                div4.append(checkout_btn);

               main_div.append(ul,div4);
           
    }

    if(JSON.parse(localStorage.getItem('dCart')) != null){
    displayCartItems();
    }
    // -------------------logo redirect to home------------------------------


    document.getElementById("logo").addEventListener("click",redirect);
    function redirect(){
        window.location.href="../index.html"
    }
    //------------------------------adding location;----------------------------

    document.getElementById("location").innerText=JSON.parse(localStorage.getItem("location"));
    document.getElementById("location").addEventListener("click",getLoc);
    function getLoc(){
    var input = prompt("Please enter your location.");
    if(localStorage.getItem("location")==null){
    localStorage.setItem("location",JSON.stringify(input));
    }
    else if(localStorage.getItem("location")!=null){
    var data = localStorage.getItem("location");
    data = JSON.parse(data);
    if(data!=input){
    localStorage.setItem("location",JSON.stringify(input));
    } 
    }
    }
    document.getElementById("cart").addEventListener("click",cart);
    function cart(){
    window.location.href="../pay/pay.html"
    }
        //----------------------------------shops location----------------------------------------

        document.getElementById("head").querySelector("p").innerText=`India > ${JSON.parse(localStorage.getItem("location"))}`

        if(JSON.parse(localStorage.getItem('dCart')) != null){
        var circle = document.getElementById('circle');

        let arr = JSON.parse(localStorage.getItem('dCart'));
        let qty = 0;

        arr.forEach(function(prd){
        qty += prd.qty;
        });

        circle.innerText = "qty";
        }else{
        document.getElementById('circle').style.display = "none";
        }
        


        // seaching
        function search(){
            var searchText = document.getElementById("searchBar").value;
            console.log(searchText)
             var filterData = Papaya.filter(function(item){
               return item.name.includes(searchText);
             });
             console.log(filterData)
             displayCartItems(filterData);
          
            //  document.getElementById("items").innerText = filterData.length;
          }