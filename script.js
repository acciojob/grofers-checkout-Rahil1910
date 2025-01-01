const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let sum1=0;
    const prices = document.querySelectorAll('.price');
	prices.forEach(function(price) {
		sum1 += parseFloat(price.textContent); 
	});

	const table = document.querySelector('table');
	const row = document.createElement('tr');
	
	const cell1 = document.createElement('td');
	cell1.id = 'ans';
	cell1.textContent = 'Total Price';
	row.appendChild(cell1);
	
	const cell2 = document.createElement('td');
	cell2.id = 'ans';
	cell2.textContent = sum1;
	row.appendChild(cell2);

	table.appendChild(row);
};
getSumBtn.addEventListener("click", getSum);

