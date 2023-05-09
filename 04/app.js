let chartData;
const ctx = document.getElementById("myChart").getContext('2d');

const fetchData = async () => {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();

        chartData = data.map(item => ({ x: item.day, y: item.amount }));

        const myChart = new Chart(ctx.canvas, {
            type: 'bar',
            data: {
                datasets: [{
                    data: chartData,
                    backgroundColor: ["#ec755d", "#ec755d", "#76b5bc", "#ec755d", "#ec755d", "#ec755d"],
                    borderRadius: 5,
                    borderSkipped: false,
                    hoverBackgroundColor: ["#ec755dCC", "#ec755dCC", "#76b5bcCC", "#ec755dCC", "#ec755dCC", "#ec755dCC"],
                }]
            },
            options: {
                plugins: {
                    legend: { display: false, },
                    tooltip: {
                        yAlign: 'bottom', xAlign: 'center', backgroundColor: 'black', displayColors: false, callbacks: {

                            title: function () { return ''; },
                            label: function (context) {
                                return `$${context.parsed.y}`
                            }
                        }
                    },
                },
                scales: {
                    x: { grid: { display: false, }, border: { display: false }, ticks: { color: '#a39f96' } },
                    y: { grid: { display: false }, border: { display: false }, ticks: { display: false } },
                },
            }
        });

    } catch (error) {
        console.error(error);
    }
};

fetchData();