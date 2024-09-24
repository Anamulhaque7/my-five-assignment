
// Function call

function getInputValueById(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value;
}



// card 1
const donetNow = document.getElementById('donate-now-btn');
donetNow.addEventListener('click', function (event) {
    event.preventDefault();

    const inputValue = getInputValueById('input-amount')

    const totalBalance = parseFloat(document.getElementById('total-balance').innerText);

    const donataionAmountBalance = parseFloat(document.getElementById('donataion-amount-value').innerText);


    if (inputValue <= 0 || inputValue > totalBalance || isNaN(inputValue)) {
        return alert('Invaild Donation amount');
    }
    const newBalance = totalBalance - inputValue;
    const donateNewBalance = donataionAmountBalance + inputValue;

    document.getElementById('total-balance').innerText = newBalance;

    document.getElementById('donataion-amount-value').innerText = donateNewBalance;

    document.getElementById('my_modal_1').showModal();

    const history = document.createElement('div');
    history.className = 'bg-white p-3 h-[120px] mx-7 b rounded border  boder-blue-500';
    history.innerHTML = `
    <p class ="text-lg text-gray-500 font-extrabold "> ${inputValue} Taka  Donation for Flood at Noakhli,Bangladesh
    The recent floods in Noakhali have caused</P>
     <p class = "text-md text-gray-500">Date: ${new Date().toLocaleString()}</p>
    `;


    const hisToryContainrt = document.getElementById('history-section');
    hisToryContainrt.append(history)



});



// card 2
const donetNow2 = document.getElementById('donate-now-btn-2');

donetNow2.addEventListener('click', function (event) {
    event.preventDefault();

    const inputValue = getInputValueById('input-amount-2');

    const totalBalance2 = parseFloat(document.getElementById('total-balance').innerText);

    const donataionAmountBalance2 = parseFloat(document.getElementById('donataion-amount-value-2').innerText);


    if (inputValue <= 0 || inputValue > totalBalance2 || isNaN(inputValue)) {
        return alert('Invaild Donation amount');
    }

    const newBalance2 = totalBalance2 - inputValue;

    const donateNewBalance2 = donataionAmountBalance2 + inputValue;

    document.getElementById('total-balance').innerText = newBalance2;

    document.getElementById('donataion-amount-value-2').innerText = donateNewBalance2;

    document.getElementById('my_modal_1').showModal();

    const history = document.createElement('div');
    history.className = 'bg-white p-3 h-[120px] mx-7 b rounded border  boder-blue-500';
    history.innerHTML = `
    <p class ="text-lg text-gray-500 font-extrabold "> ${inputValue} Taka  Donate for Flood Relief in Feni,Bangladesh
    The recent floods in  Feni have caused</P>
     <p class = "text-md text-gray-500">Date: ${new Date().toLocaleString()}</p>
    `;


    const hisToryContainrt = document.getElementById('history-section');
    hisToryContainrt.append(history)



});



// card 3 

const donetNow3 = document.getElementById('donate-now-btn-3');

donetNow3.addEventListener('click', function (event) {
    event.preventDefault();

    const inputValue = getInputValueById('input-amount-3');

    const totalBalance3 = parseFloat(document.getElementById('total-balance').innerText);

    const donataionAmountBalance3 = parseFloat(document.getElementById('donataion-amount-value-3').innerText);


    if (inputValue <= 0 || inputValue > totalBalance3 || isNaN(inputValue)) {
        return alert('Invaild Donation amount');
    }

    const newBalance3 = totalBalance3 - inputValue;

    const donateNewBalance3 = donataionAmountBalance3 + inputValue;

    document.getElementById('total-balance').innerText = newBalance3;

    document.getElementById('donataion-amount-value-3').innerText = donateNewBalance3;

    document.getElementById('my_modal_1').showModal();

    const history = document.createElement('div');
    history.className = 'bg-white p-3 h-[120px] mx-7 b rounded border  boder-blue-500';
    history.innerHTML = `
    <p class ="text-lg text-gray-500 font-extrabold "> ${inputValue} Taka Aid for Injured in the Quota Movement,
    The recent floods in Bangladesh have caused</P>
     <p class = "text-md text-gray-500">Date: ${new Date().toLocaleString()}</p>
    `;


    const hisToryContainrt = document.getElementById('history-section');
    hisToryContainrt.append(history)



});



// Donation and History button
const dontionButton = document.getElementById('dontion-btn');
const hisToryButton = document.getElementById('history-btn');

dontionButton.addEventListener('click', function () {


    dontionButton.classList.add('bg-gray-200')
    hisToryButton.classList.remove('bg-lime-500');
    dontionButton.classList.add('bg-lime-500')
    document.getElementById('section-contaent').classList.remove('hidden')
    document.getElementById('section-contaent-2').classList.remove('hidden')
    document.getElementById('section-contaent-3').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')

});





hisToryButton.addEventListener('click', function () {

    dontionButton.classList.add('bg-gray-200')
    hisToryButton.classList.add('bg-lime-500');
    dontionButton.classList.remove('bg-lime-500')

    document.getElementById('section-contaent').classList.add('hidden')
    document.getElementById('section-contaent-2').classList.add('hidden')
    document.getElementById('section-contaent-3').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')



});

document.getElementById('blog-btn').onclick = function () {
    window.location.href = 'blog.html';
}