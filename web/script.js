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

     document.getElementById("thesis_text").value = result;
}

async function thesis_set_params(){

    var popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#f7f7f7";
    popup.style.padding = "30px";
    popup.style.borderRadius = "20px";
    popup.style.border = "1px solid #ddd";
    popup.style.width = "350px";
    popup.style.height = "400px";
    popup.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
    popup.style.zIndex = "1000";
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    popup.style.flexDirection = "column";
    popup.style.alignContent = "center";

    var table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";

    var tr1 = document.createElement("tr");
    var td11 = document.createElement("td");
    td11.style.fontWeight = "bold";
    td11.style.textAlign = "center";
    td11.textContent = "Параметры:";

    var td12 = document.createElement("td");
    td12.style.fontWeight = "bold";
    td12.style.textAlign = "center";
    td12.textContent = "Значения:";

    tr1.appendChild(td11);
    tr1.appendChild(td12);

    var tr2 = document.createElement("tr");
    var td21 = document.createElement("td");
    td21.textContent = "Max. Length";

    var length = await eel.get_max_length()();

    var td22 = document.createElement("td");
    var inputLength = document.createElement("input");
    inputLength.type = "text";
    inputLength.style.width = "100%";
    inputLength.style.padding = "10px";
    inputLength.style.border = "1px solid #ccc";
    inputLength.style.borderRadius = "5px";
    inputLength.placeholder = "...";
    inputLength.value = length;
    td22.appendChild(inputLength);

    tr2.appendChild(td21);
    tr2.appendChild(td22);

    var tr3 = document.createElement("tr");
    var td31 = document.createElement("td");
    td31.textContent = "Repetition";

    var repetition = await eel.get_repetition()();

    var td32 = document.createElement("td");
    var inputRepetition = document.createElement("input");
    inputRepetition.type = "text";
    inputRepetition.style.width = "100%";
    inputRepetition.style.padding = "10px";
    inputRepetition.style.border = "1px solid #ccc";
    inputRepetition.style.borderRadius = "5px";
    inputRepetition.placeholder = "...";
    inputRepetition.value = repetition;
    td32.appendChild(inputRepetition);

    tr3.appendChild(td31);
    tr3.appendChild(td32);

    var tr4 = document.createElement("tr");
    var td41 = document.createElement("td");
    td41.textContent = "Top-K";

    var top_k = await eel.get_top_k()();

    var td42 = document.createElement("td");
    var inputK = document.createElement("input");
    inputK.type = "text";
    inputK.style.width = "100%";
    inputK.style.padding = "10px";
    inputK.style.border = "1px solid #ccc";
    inputK.style.borderRadius = "5px";
    inputK.placeholder = "...";
    inputK.value = top_k;
    td42.appendChild(inputK);

    tr4.appendChild(td41);
    tr4.appendChild(td42);

    var tr5 = document.createElement("tr");
    var td51 = document.createElement("td");
    td51.textContent = "Top-P";

    var top_p = await eel.get_top_p()();

    var td52 = document.createElement("td");
    var inputP = document.createElement("input");
    inputP.type = "text";
    inputP.style.width = "100%";
    inputP.style.padding = "10px";
    inputP.style.border = "1px solid #ccc";
    inputP.style.borderRadius = "5px";
    inputP.placeholder = "...";
    inputP.value = top_p;
    td52.appendChild(inputP);

    tr5.appendChild(td51);
    tr5.appendChild(td52);

    var tr6 = document.createElement("tr");
    var td61 = document.createElement("td");
    td61.textContent = "Temperature";

    var temperature = await eel.get_temperature()();

    var td62 = document.createElement("td");
    var inputTemp = document.createElement("input");
    inputTemp.type = "text";
    inputTemp.style.width = "100%";
    inputTemp.style.padding = "10px";
    inputTemp.style.border = "1px solid #ccc";
    inputTemp.style.borderRadius = "5px";
    inputTemp.placeholder = "...";
    inputTemp.value = temperature;
    td62.appendChild(inputTemp);

    tr6.appendChild(td61);
    tr6.appendChild(td62);

    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);

    popup.appendChild(table);

    var buttonCancel = document.createElement("button");
    buttonCancel.style.margin = "0";
    buttonCancel.style.padding = "0";
    buttonCancel.style.border = "none";
    buttonCancel.style.background = "transparent";
    buttonCancel.style.fontSize = "16px";
    buttonCancel.style.fontFamily = "Arial";
    buttonCancel.style.cursor = "pointer";
    buttonCancel.style.width = "100px";
    buttonCancel.style.height = "30px";
    buttonCancel.style.borderRadius = "10px";
    buttonCancel.style.background = "#FF6666";
    buttonCancel.style.color = "#fff";
    buttonCancel.style.marginTop = "10px";
    buttonCancel.textContent = "Отмена";
    buttonCancel.onclick = function() {
        popup.remove();
    };
    popup.appendChild(buttonCancel);

    var buttonSave = document.createElement("button");
    buttonSave.style.margin = "0";
    buttonSave.style.padding = "0";
    buttonSave.style.border = "none";
    buttonSave.style.background = "transparent";
    buttonSave.style.fontSize = "16px";
    buttonSave.style.fontFamily = "Arial";
    buttonSave.style.cursor = "pointer";
    buttonSave.style.width = "100px";
    buttonSave.style.height = "30px";
    buttonSave.style.borderRadius = "10px";
    buttonSave.style.background = "#4CAF50";
    buttonSave.style.color = "#fff";
    buttonSave.style.marginTop = "10px";
    buttonSave.textContent = "Сохранить";
    buttonSave.onclick = function() {
        eel.set_max_length(inputLength.value)();
        eel.set_repetition(inputRepetition.value)();
        eel.set_top_k(inputK.value)();
        eel.set_top_p(inputP.value)();
        eel.set_temperature(inputTemp.value)();
        popup.remove();
    };
    popup.appendChild(buttonSave);

    document.body.appendChild(popup);

}

async function link_set_params(){

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

    var header = document.createElement("h2");
    header.style.margin = "0";
    header.style.padding = "0";
    header.style.color = "#333";
    header.style.fontSize = "24px";
    header.style.fontFamily = "Arial";
    header.style.textAlign = "center";
    header.textContent = "Настройки парсинга";
    popup.appendChild(header);

    var form = document.createElement("form");
    form.style.textAlign = "center";
    popup.appendChild(form);

    var label = document.createElement("label");
    label.style.margin = "0";
    label.style.padding = "0";
    label.style.color = "#333";
    label.style.fontSize = "24px";
    label.style.fontFamily = "Arial";
    label.style.textAlign = "center";
    label.textContent = "Кол-во постов:";
    form.appendChild(label);

    var posts = await eel.get_num_posts()();

    var input = document.createElement("input");
    input.type = "text";
    input.style.marginTop = "20px";
    input.style.width = "100%";
    input.style.padding = "10px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "5px";
    input.placeholder = "Введите кол-во постов...";
    input.value = posts;
    form.appendChild(input);

    var buttonCancel = document.createElement("button");
    buttonCancel.style.margin = "0";
    buttonCancel.style.padding = "0";
    buttonCancel.style.border = "none";
    buttonCancel.style.background = "transparent";
    buttonCancel.style.fontSize = "16px";
    buttonCancel.style.fontFamily = "Arial";
    buttonCancel.style.cursor = "pointer";
    buttonCancel.style.width = "100px";
    buttonCancel.style.height = "30px";
    buttonCancel.style.borderRadius = "10px";
    buttonCancel.style.background = "#FF6666";
    buttonCancel.style.color = "#fff";
    buttonCancel.style.marginTop = "10px";
    buttonCancel.textContent = "Отмена";
    buttonCancel.onclick = function() {
        popup.remove();
    };
    popup.appendChild(buttonCancel);

    var buttonSave = document.createElement("button");
    buttonSave.style.margin = "0";
    buttonSave.style.padding = "0";
    buttonSave.style.border = "none";
    buttonSave.style.background = "transparent";
    buttonSave.style.fontSize = "16px";
    buttonSave.style.fontFamily = "Arial";
    buttonSave.style.cursor = "pointer";
    buttonSave.style.width = "100px";
    buttonSave.style.height = "30px";
    buttonSave.style.borderRadius = "10px";
    buttonSave.style.background = "#4CAF50";
    buttonSave.style.color = "#fff";
    buttonSave.style.marginTop = "10px";
    buttonSave.textContent = "Сохранить";
    buttonSave.onclick = function() {
        eel.set_num_posts(input.value)();
        popup.remove();
    };
    popup.appendChild(buttonSave);

    document.body.appendChild(popup);

}



