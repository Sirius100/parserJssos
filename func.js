// JavaScript Document
function Save(){
//	Set fso = CreateObject("Scripting.FileSystemObject");
//	Set f1 = fso.CreateTextFile("d:project\parsersosed\AimCreate.txt", True);
	document.getElementById("divin1").innerHTML = "ты нажал кнопку сохранить файл";
	//реализоапть позже на nodejs
}
function Load(){
//реализоапть позже на nodejs
}

function Output(){
	document.getElementById("divin1").innerHTML = "hello я тут";
}

//записывает данные из полей в массив
function filter_input(){
	var arr = new Array(5); //создаю массив из пяти строк
	var cicle = 1;
	for (var i = 0; i<5;i++)
	{
		arr[i] = new Array(3);//в каждой строке  три столбца
		for (var j = 0; j<3;j++)
			{
			var inpout  = "in" + cicle;
			arr[i][j] = document.getElementById(inpout).value;
			cicle++;
			}
	}
	console.log(arr);
}



// 1 - написать функцию для подключения к сайту букмекера
// 2 - написать функцию для парсинга данных сайта
