
    const input = document.querySelector("input");
    const button = document.querySelector("button");
    const list = document.querySelector("ul");

    button.addEventListener("click", () => {
        console.log("hi");
        if(input.value !== "") {
            let chapter = input.value;
            
            const li = document.createElement("li");
            const deleteBtn = document.createElement('button');
            deleteBtn. textContent = '❌';
            deleteBtn.addEventListener("click", () => {
                list.removeChild(li);
               
            });

            
            li.textContent = chapter;
            li.appendChild(deleteBtn);
            list.appendChild(li);
        }
        input.value = "";
        input.focus();
      
    });