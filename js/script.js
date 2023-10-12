// Mengambil elemen yang diperlukan sekali saat halaman dimuat
const konversiButton = document.getElementById("konversiButton");
const resetButton = document.getElementById("resetButton");
const reverseButton = document.getElementById("reverseButton");
const resultTable = document.getElementById("result-table");
const calculationTable = document.getElementById("calculation-table");
const inputField = document.getElementById("input-field");

// Menambahkan event listener ke elemen yang diperlukan
konversiButton.addEventListener("click", konversiKeFahrenheit);
resetButton.addEventListener("click", resetField);
reverseButton.addEventListener("click", reverseField);

function konversiKeFahrenheit() {
    const inputValue = parseFloat(inputField.value);

    if (!isNaN(inputValue)) {
        const fahrenheit = (inputValue * 9/5) + 32;

        // Menambahkan hasil konversi ke tabel hasil
        const newRow = resultTable.insertRow();
        const cell1 = newRow.insertCell(0);
        cell1.textContent = fahrenheit + " °F";

        // Menambahkan rumus kalkulasi ke tabel kalkulasi
        const calculation = `${inputValue} °C * (9/5) + 32 = ${fahrenheit} °F`;
        const newCalculationRow = calculationTable.insertRow();
        const calculationCell1 = newCalculationRow.insertCell(0);
        calculationCell1.textContent = calculation;
    } else {
        alert("Masukkan suhu dalam bentuk angka.");
    }
}

function resetField() {
    inputField.value = "";
    resultTable.innerHTML = "";
    calculationTable.innerHTML = "";
}

function reverseField() {
    const reversedValue = inputField.value.split("").reverse().join("");
    inputField.value = reversedValue;
}

