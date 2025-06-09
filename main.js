const items = []


function addItem() {
    const itemName = document.querySelector ("#item").value

    const item = {
        name: itemName,
        checkd: false
        }

        items.push(item) 
        
        document.querySelector("#item").value = ""

        showItensList()
    }

    function showItemList() { 
        const sectionList = document.querySelector(".list")
        sectionList.textContent = ""


            items.map((item, index) => {
                sectionList.innerHTML += `
                <div class="item">
                    <div>
                        <input type="checkbox" name="list" id="iten-${index}">
                        <div class="custom-checkbox">
                            <img src="./assets/assets/checked.svg" alt="checkd">
                        </div>
                        <label for="iten-${index}">Maçã</label>
                    </div>
                    <button><img src="./assets/assets/trash-icon.svg" alt="trach icon"></button>
                </div>                
                `
            }) 
        }
    

    

