//interface.js

let interfaceLib = {
    errorMessage:{
        msg: "",
        generate: function(msg){
            this.msg = msg;
            let errorMessageElement = document.createElement("div");
            errorMessageElement.setAttribute("class","errorMessage");
            errorMessageElement.innerText = msg;

            document.body.appendChild(errorMessageElement);
        }
    }
};