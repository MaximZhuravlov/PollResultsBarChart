Chart.defaults.global.defaultFontFamily = '"Comic Sans MS", cursive, sans-serif';

const pollForm = document.getElementById("poll-form");

pollForm.addEventListener("submit", function (event) {	
	event.preventDefault();
	const pollFormInput = this.querySelector("input[name='pollOption']:checked");
	if (pollFormInput) {
		const pollFormInputValue = pollFormInput.value;
		pollChartData.find(function (item) {
			return item.option === pollFormInputValue;
		}).votes++;
		pollChart.data.datasets[0].data = pollChartData.map(function (item) {
			return item.votes;
		});
		pollChart.update();
	}
});

const pollChartData = [
	{
		option: "Spider-Man",
		votes: 11,
		color: "rgb(255, 99, 132)"
	},
	{
		option: "Super-Man",
		votes: 8,
		color: "rgb(54, 162, 235)"
	},
	{
		option: "Batman",
		votes: 11,
		color: "rgb(36, 36, 36)"
	},
	{
		option: "Son Goku",
		votes: 5,
		color: "rgb(255, 159, 64)"
	},
	{
		option: "Hulk",
		votes: 3,
		color: "rgb(75, 192, 192)"
	},
	{
		option: "Wolverine",
		votes: 8,
		color: "rgb(255, 206, 86)"
	},
	{
		option: "Others",
		votes: 10,
		color: "rgb(153, 102, 255)"
	}
];

const context = document.getElementById('poll').getContext('2d');
const pollChart = new Chart(context, {
	type: 'bar',
	data: {
		labels: pollChartData.map(function (item) {
			return item.option;
		}),
		datasets: [{
			data: pollChartData.map(function (item) {
				return item.votes;
			}),
			backgroundColor: pollChartData.map(function (item) {
				return item.color;
			}),
			borderWidth: [1, 2, 3, 1, 2, 3],
			hoverBackgroundColor: 'lime'
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
		legend: {
			display: false
		},
		title: {
			display: true,
			text: "Poll results",
			fontSize: 20,
			fontColor: "#333"
		}
	}
});