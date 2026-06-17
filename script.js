const keyboard = document.getElementById("keyboard");
const display = document.getElementById("display");

const layout = [
    [
        "Esc","F1","F2","F3","F4","F5","F6",
        "F7","F8","F9","F10","F11","F12"
    ],
    [
        "`","1","2","3","4","5","6","7","8","9","0",
        "-","=","Backspace"
    ],
    [
        "Tab","Q","W","E","R","T","Y","U","I","O","P",
        "[","]","\\"
    ],
    [
        "Caps","A","S","D","F","G","H","J","K","L",
        ";","'","Enter"
    ],
    [
        "Shift","Z","X","C","V","B","N","M",
        ",",".","/","Shift"
    ],
    [
        "Ctrl","Win","Alt","Space","Alt","Fn","Menu","Ctrl"
    ]
];

let capsLock = false;

layout.forEach(row => {

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    row.forEach(key => {

        const btn = document.createElement("button");
        btn.classList.add("key");
        btn.textContent = key;

        if(key === "Backspace"){
            btn.classList.add("w-3","backspace");
        }

        if(key === "Tab"){
            btn.classList.add("w-2","special");
        }

        if(key === "Caps"){
            btn.classList.add("w-3","special");
        }

        if(key === "Enter"){
            btn.classList.add("w-3","enter");
        }

        if(key === "Shift"){
            btn.classList.add("w-4","special");
        }

        if(["Ctrl","Alt","Fn","Win","Menu"].includes(key)){
            btn.classList.add("special");
        }

        if(key === "Space"){
            btn.classList.add("space","special");
        }

        btn.addEventListener("click", () => {

            if(key === "Backspace"){
                display.value = display.value.slice(0,-1);
            }

            else if(key === "Enter"){
                display.value += "\n";
            }

            else if(key === "Tab"){
                display.value += "    ";
            }

            else if(key === "Space"){
                display.value += " ";
            }

            else if(key === "Caps"){
                capsLock = !capsLock;
                btn.classList.toggle("active");
            }

            else if(
                ["Shift","Ctrl","Alt","Fn","Win","Menu","Esc",
                 "F1","F2","F3","F4","F5","F6",
                 "F7","F8","F9","F10","F11","F12"].includes(key)
            ){
                return;
            }

            else{
                display.value += capsLock
                    ? key.toUpperCase()
                    : key.toLowerCase();
            }

            display.focus();
        });

        rowDiv.appendChild(btn);
    });

    keyboard.appendChild(rowDiv);
});
