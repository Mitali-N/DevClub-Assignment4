console.log("Loaded script.js");

let request= new XMLHttpRequest();
request.open("GET","https://api.covid19api.com/total/dayone/country/india/status/confirmed",false);
request.send();
let parsed=JSON.parse(request.responseText);
		
let array=[];
for (let i=parsed.length-30; i<parsed.length; i++){
	array.push(parsed[i]);
}

console.log(array);

let labels=[];
array.forEach(c => labels.push(c['Date'].split("T")[0]));

console.log(labels);

let cases=[];
array.forEach(m => cases.push(m['Cases']));

console.log(cases);



const data = {
	labels: labels,
	datasets: [{
		label: 'Daily Total Case Count',
		backgroundColor: 'rgb(82, 139, 209)',
		borderColor: 'rgb(82, 139, 209)',
		data: cases,
	}]
};

const config = {
	type: 'line',
	data: data,
	options: {
        plugins: {
            title: {
                display: true,
                text: 'INDIA: Total Covid-19 Cases for past 30 days'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                    padding: 10
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Cases',
                    padding: 10
                }
            }
        }
    }
};

const myChart = new Chart(
	document.getElementById('myChart'),
	config
);