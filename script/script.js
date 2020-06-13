const topBlock = document.querySelector('.top-block');
const area = document.querySelector('.area');
const editBlock = document.querySelector('.edit-block');
const styleBlock = document.querySelector('.style-block');
const mainBlock = document.querySelector('.main-block');
const addBlock = document.querySelector('.add-block');
const formCreateTable = document.querySelector('.formCreateTable');
const formCreateList = document.querySelector('.formCreateList');
const border = document.querySelector('.border');

function editBtn() {                       //Функція вдікриває styleBlock
    area.value = topBlock.innerHTML;
    editBlock.classList.remove('hidden');
    styleBlock.classList.add('hidden');
}

function saveBtn() {                          //Функція зберігає  і переносить значення з  area в topBlock
    topBlock.innerHTML = area.value;
    editBlock.classList.add('hidden');
}

function styleBtn() {                           //Відкриває блок зі стилізацією  для topBlock
    editBlock.classList.add('hidden');
    styleBlock.classList.remove('hidden');
}

function addBtn() {
    mainBlock.classList.add('hidden');            // Відкриває блок для створення таблиць і списків 
    addBlock.classList.remove('hidden');
}

function backBtn() {
    mainBlock.classList.remove('hidden');
    addBlock.classList.add('hidden');
}

function fontSize() {                            // Міняє  розмір текста
    topBlock.style.fontSize = event.target.value;
}

function fontFamily() {                        // Міняє  тип шрифта 
    topBlock.style.fontFamily = event.target.value;
}

function fontWeight() {
    topBlock.style.fontWeight = event.target.checked ? 'bold' : 'normal'; // Міняє жирність текста 
}

function fontStyle() {
    event.target.checked ? topBlock.classList.add('style') : topBlock.classList.remove('style');
}

function colorText() {
    let colorTxt = document.querySelector(`.colorText`);            // міняє колір текста
    colorTxt.style.display = `flex`;
    document.querySelector('.backgroundColor').style.display = 'none';
    let colorsTxt = document.querySelectorAll('.colorsTxt');
    for (let i = 0; i < colorsTxt.length; i++) {
        colorsTxt[i].onclick = function () {
            topBlock.style.color = colorsTxt[i].style.background;
        }
    }
}

function colorBg() {                                               // міняє колір фона topBlock
    let colorTxt = document.querySelector(`.backgroundColor`);
    colorTxt.style.display = `flex`;
    document.querySelector('.colorText').style.display = 'none';
    let colorsBg = document.querySelectorAll('.colorsBg');
    for (let i = 0; i < colorsBg.length; i++) {
        colorsBg[i].onclick = function () {
            topBlock.style.background = colorsBg[i].style.background;
        }
    }
}

function chooseBtn() {                                            //  переключає міш списками і таблицею 
    if (event.target.dataset.create === 'table') {
        formCreateTable.classList.remove('hidden');
        formCreateList.classList.add('hidden');
    }
    else if (event.target.dataset.create === 'list') {
        formCreateTable.classList.add('hidden');
        formCreateList.classList.remove('hidden');
    }
}

function createTable() {                                              //  створює таблицю
    let form = document.forms['formCreateTable'];
    let formborder = document.forms['border'];
    let countTr = form.countTr.value;
    let countTd = form.countTd.value;
    let countWidth = form.WidthOfTd.value;
    let countHeight = form.HeightOfTd.value;
    let countB = form.WidthOfBorder.value + "px";
    let countTypeOfBorder = formborder.typeOfBorder.value;
    let countcolorOfBorder = form.ColorOfBorder.value;

    area.value += `<table border="1">`;
    for (let i = 1; i <= countTr; i++) {
        area.value += `<tr>`;
        for (let j = 1; j <= countTd; j++) {
            area.value += `<td style= "width:${countWidth}px; 
                    height:${countHeight}px;
                    border-width:${countB};
                    border-style:${countTypeOfBorder};                   
                    border-color:${countcolorOfBorder}"; > TD </td>`
        }
        area.value += `</tr>`;
    }
    area.value += `</table>`;
    form.classList.add('hidden');
    backBtn();
}

function createList() {                                                 //  створює списки
    let formList = document.forms["formCreateList"];
    let countLi = formList.countLi.value;
    let typeList = formList.typeList.value;
    area.value += `<ul>`;
    for (let i = 1; i <= countLi; i++) {
        area.value += `<li style= "list-style:${typeList};">item ${i}</li>`
    }
    area.value += `</ul>`;
    console.log(1)
    formList.classList.add('hidden');
    backBtn();
}


