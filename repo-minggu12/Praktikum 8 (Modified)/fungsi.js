var dataMahasiswa = [
	];

var nimMahasiswa = [
];

var ipkMahasiswa = [
];

var showMhs = () => {
 	var listMhs = document.getElementById("list-mhs");
 	listMhs.innerHTML = "";
 	for(let i = 0; i < dataMahasiswa.length; i++){
 		var btnEdit = "<a href='#' onclick='editNamaMhs("+i+"),editNimMhs("+i+"),editIpkMhs("+i+")'>Edit</a>";
 		var btnHapus = "<a href='#' onclick='delMhs("+i+")'>Hapus</a>";
 		listMhs.innerHTML += "<li>" + dataMahasiswa[i] + " - " + nimMahasiswa[i] + " - " + ipkMahasiswa[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>"; 
 	}
}

var addMhs = () => {
 	var input = document.querySelector("input[name=mhs]");
 	var input2 = document.querySelector("input[name=nim]");
 	var input3 = document.querySelector("input[name=ipk]");
 	dataMahasiswa.push(input.value);
 	nimMahasiswa.push(input2.value);
 	ipkMahasiswa.push(input3.value);
 	showMhs();
}

var editNamaMhs = (id) => {
 	var newNamaMhs = prompt("Nama baru", dataMahasiswa[id]);
 	dataMahasiswa[id] = newNamaMhs;
 	showMhs();
}

var editNimMhs = (id) => {
 	var newNimMhs = prompt("NIM", nimMahasiswa[id]);
 	nimMahasiswa[id] = newNimMhs;
 	showMhs();
}

var editIpkMhs = (id) => {
 	var newIpkMhs = prompt("IPK", ipkMahasiswa[id]);
 	ipkMahasiswa[id] = newIpkMhs;
 	showMhs();
}

var delMhs = (id) => {
 	dataMahasiswa.splice(id, 1);
 	nimMahasiswa.splice(id, 1);
 	ipkMahasiswa.splice(id,1);
 	showMhs();
}

showMhs();
