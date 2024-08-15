async function get_data_from_link(){

    var link = document.getElementById("channel_link").value;

    var popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#f7f7f7";
    popup.style.padding = "30px";
    popup.style.borderRadius = "20px";
    popup.style.border = "1px solid #ddd";
    popup.style.width = "300px";
    popup.style.height = "250px";
    popup.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
    popup.style.zIndex = "1000";
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    popup.style.flexDirection = "column";
    popup.style.alignContent = "center";

    var popupHeader = document.createElement("h2");
    popupHeader.style.margin = "0";
    popupHeader.style.padding = "0";
    popupHeader.style.color = "#333";
    popupHeader.style.fontSize = "24px";
    popupHeader.style.fontFamily = "Arial";
    popupHeader.style.textAlign = "center";
    popupHeader.textContent = "Загрузка...";

    var popupText = document.createElement("p");
    popupText.style.margin = "0";
    popupText.style.padding = "0";
    popupText.style.color = "#666";
    popupText.style.fontSize = "18px";
    popupText.style.fontFamily = "Arial";
    popupText.style.textAlign = "center";
    popupText.textContent = "Пожалуйста, подождите...";

    var loadingIcon = document.createElement("img");
    loadingIcon.src = "https://media.tenor.com/3arJZZkFW6kAAAAi/dancing-duck-danse.gif";
    loadingIcon.style.width = "120px";
    loadingIcon.style.height = "120px";
    loadingIcon.style.margin = "0 auto";
    loadingIcon.style.display = "block";
    loadingIcon.style.marginTop = "20px";

    popup.appendChild(popupHeader);
    popup.appendChild(popupText);
    popup.appendChild(loadingIcon);
    document.body.appendChild(popup);

    var result = await eel.parse_from_link(link)();

    document.body.removeChild(popup);

    if (result == "Link incorrect")
    {
        var errorWindow = document.createElement("div");
        errorWindow.style.position = "fixed";
        errorWindow.style.top = "50%";
        errorWindow.style.left = "50%";
        errorWindow.style.transform = "translate(-50%, -50%)";
        errorWindow.style.background = "#f7f7f7";
        errorWindow.style.padding = "30px";
        errorWindow.style.borderRadius = "20px";
        errorWindow.style.border = "1px solid #ddd";
        errorWindow.style.width = "300px";
        errorWindow.style.height = "250px";
        errorWindow.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
        errorWindow.style.zIndex = "1000";
        errorWindow.style.display = "flex";
        errorWindow.style.justifyContent = "center";
        errorWindow.style.alignItems = "center";
        errorWindow.style.flexDirection = "column";
        errorWindow.style.alignContent = "center";
        errorWindow.style.marginTop = "20px";

        var errorWindowHeader = document.createElement("h2");
        errorWindowHeader.style.margin = "0";
        errorWindowHeader.style.padding = "0";
        errorWindowHeader.style.color = "#333";
        errorWindowHeader.style.fontSize = "24px";
        errorWindowHeader.style.fontFamily = "Arial";
        errorWindowHeader.style.textAlign = "center";
        errorWindowHeader.textContent = "Ошибка";

        var errorWindowText = document.createElement("p");
        errorWindowText.style.margin = "0";
        errorWindowText.style.padding = "0";
        errorWindowText.style.color = "#666";
        errorWindowText.style.fontSize = "18px";
        errorWindowText.style.fontFamily = "Arial";
        errorWindowText.style.textAlign = "center";
        errorWindowText.textContent = "Ссылка введена неверно.";

        var closeButton = document.createElement("button");
        closeButton.style.margin = "0";
        closeButton.style.padding = "0";
        closeButton.style.border = "none";
        closeButton.style.background = "transparent";
        closeButton.style.fontSize = "16px";
        closeButton.style.fontFamily = "Arial";
        closeButton.style.cursor = "pointer";
        closeButton.style.width = "100px";
        closeButton.style.height = "30px";
        closeButton.style.borderRadius = "10px";
        closeButton.style.background = "#4CAF50";
        closeButton.style.color = "#fff";
        closeButton.style.marginTop = "30px";
        closeButton.textContent = "Закрыть";
        closeButton.onclick = function() {
          errorWindow.remove();
        };

        errorWindow.appendChild(errorWindowHeader);
        errorWindow.appendChild(errorWindowText);
        errorWindow.appendChild(closeButton);
        document.body.appendChild(errorWindow);
    }
    else if (result == "Error")
    {
        var errorWindow = document.createElement("div");
        errorWindow.style.position = "fixed";
        errorWindow.style.top = "50%";
        errorWindow.style.left = "50%";
        errorWindow.style.transform = "translate(-50%, -50%)";
        errorWindow.style.background = "#f7f7f7";
        errorWindow.style.padding = "30px";
        errorWindow.style.borderRadius = "20px";
        errorWindow.style.border = "1px solid #ddd";
        errorWindow.style.width = "300px";
        errorWindow.style.height = "250px";
        errorWindow.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
        errorWindow.style.zIndex = "1000";
        errorWindow.style.display = "flex";
        errorWindow.style.justifyContent = "center";
        errorWindow.style.alignItems = "center";
        errorWindow.style.flexDirection = "column";
        errorWindow.style.alignContent = "center";
        errorWindow.style.marginTop = "20px";

        var errorWindowHeader = document.createElement("h2");
        errorWindowHeader.style.margin = "0";
        errorWindowHeader.style.padding = "0";
        errorWindowHeader.style.color = "#333";
        errorWindowHeader.style.fontSize = "24px";
        errorWindowHeader.style.fontFamily = "Arial";
        errorWindowHeader.style.textAlign = "center";
        errorWindowHeader.textContent = "Ошибка";

        var errorWindowText = document.createElement("p");
        errorWindowText.style.margin = "0";
        errorWindowText.style.padding = "0";
        errorWindowText.style.color = "#666";
        errorWindowText.style.fontSize = "18px";
        errorWindowText.style.fontFamily = "Arial";
        errorWindowText.style.textAlign = "center";
        errorWindowText.textContent = "Канал недоступен.";

        var closeButton = document.createElement("button");
        closeButton.style.margin = "0";
        closeButton.style.padding = "0";
        closeButton.style.border = "none";
        closeButton.style.background = "transparent";
        closeButton.style.fontSize = "16px";
        closeButton.style.fontFamily = "Arial";
        closeButton.style.cursor = "pointer";
        closeButton.style.width = "100px";
        closeButton.style.height = "30px";
        closeButton.style.borderRadius = "10px";
        closeButton.style.background = "#4CAF50";
        closeButton.style.color = "#fff";
        closeButton.style.marginTop = "30px";
        closeButton.textContent = "Закрыть";
        closeButton.onclick = function() {
          errorWindow.remove();
        };

        errorWindow.appendChild(errorWindowHeader);
        errorWindow.appendChild(errorWindowText);
        errorWindow.appendChild(closeButton);
        document.body.appendChild(errorWindow);
    }
    else
    {
        var errorWindow = document.createElement("div");
        errorWindow.style.position = "fixed";
        errorWindow.style.top = "50%";
        errorWindow.style.left = "50%";
        errorWindow.style.transform = "translate(-50%, -50%)";
        errorWindow.style.background = "#f7f7f7";
        errorWindow.style.padding = "30px";
        errorWindow.style.borderRadius = "20px";
        errorWindow.style.border = "1px solid #ddd";
        errorWindow.style.width = "300px";
        errorWindow.style.height = "250px";
        errorWindow.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
        errorWindow.style.zIndex = "1000";
        errorWindow.style.display = "flex";
        errorWindow.style.justifyContent = "center";
        errorWindow.style.alignItems = "center";
        errorWindow.style.flexDirection = "column";
        errorWindow.style.alignContent = "center";

        var errorWindowHeader = document.createElement("h2");
        errorWindowHeader.style.margin = "0";
        errorWindowHeader.style.padding = "0";
        errorWindowHeader.style.color = "#333";
        errorWindowHeader.style.fontSize = "24px";
        errorWindowHeader.style.fontFamily = "Arial";
        errorWindowHeader.style.textAlign = "center";
        errorWindowHeader.textContent = "Готово!";

        var errorWindowText = document.createElement("p");
        errorWindowText.style.margin = "0";
        errorWindowText.style.padding = "0";
        errorWindowText.style.color = "#666";
        errorWindowText.style.fontSize = "18px";
        errorWindowText.style.fontFamily = "Arial";
        errorWindowText.style.textAlign = "center";
        errorWindowText.textContent = "Данные успешно выгружены.";

        var closeButton = document.createElement("button");
        closeButton.style.margin = "0";
        closeButton.style.padding = "0";
        closeButton.style.border = "none";
        closeButton.style.background = "transparent";
        closeButton.style.fontSize = "16px";
        closeButton.style.fontFamily = "Arial";
        closeButton.style.cursor = "pointer";
        closeButton.style.width = "100px";
        closeButton.style.height = "30px";
        closeButton.style.borderRadius = "10px";
        closeButton.style.background = "#4CAF50";
        closeButton.style.color = "#fff";
        closeButton.style.marginTop = "20px";
        closeButton.textContent = "Закрыть";
        closeButton.onclick = function() {
            errorWindow.remove();
        };

        errorWindow.appendChild(errorWindowHeader);
        errorWindow.appendChild(errorWindowText);
        errorWindow.appendChild(closeButton);
        document.body.appendChild(errorWindow);
    }

}

async function get_text_from_model(){
    var thesis = document.getElementById("thesis_text").value;

    var result = await eel.get_answer(thesis)();

     document.getElementById("thesis_text").value = result
}