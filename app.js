(function(){
    const customImg = document.querySelector('#customer-img')
    const customName = document.querySelector('#customer-name')
    const customText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')

    let index = 0
    const arr = []

    function Objeto(img,name,text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img,name,text){
        img = `img/${img}.jpg`
        let novo = new Objeto(img,name,text)
        arr.push(novo)
    }

    createCustomer(0, "Jhon", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae, quo minus fugit itaque ipsa placeat unde fugiat doloremque reiciendis?");
    createCustomer(1, "Brishti", "  dolor sit amet consectetur adipisicing elit. Aliquid quae, quo minus fugit itaque ipsa placeat unde fugiat doloremque reiciendis?");
    createCustomer(2, "Mariya", "Lorem ipsum dolor sit amet consectetur Aliquid quae, quo minus fugit itaque ipsa placeat unde fugiat doloremque reiciendis?");
    createCustomer(3, "Srabony", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae, quo minus fugit itaque ipsa placeat unde fugiat doloremque reiciendis?");
    createCustomer(4, "Munna", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae, quo minus fugit itaque ipsa placeat.");
     
    btn.forEach(function(btn){
        btn.addEventListener('click',function(e){
            if(e.target.classList.contains('prevBtn')){
                if(index === 0){
                    index = arr.length
                }
                index --
                customImg.src=arr[index].img
                customName.textContent=arr[index].name
                customText.textContent=arr[index].text

            }
            if(e.target.classList.contains('nextBtn')){
                if(index === arr.length - 1) {
                    index = -1
                }
                index++
                customImg.src=arr[index].img
                customName.textContent=arr[index].name
                customText.textContent=arr[index].text
                
            }
        })
    })

})()