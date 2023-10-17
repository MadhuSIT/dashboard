const slideBtn = document.getElementById('slideId')
const mainContainer = document.getElementById('mainId')
const headerId = document.getElementById('headerId')
const innerId = document.getElementById('detailsInner')


slideBtn.addEventListener("click", function(){
    headerId.classList.toggle('after-click')
    mainContainer.classList.toggle('after-click')
    mainContainer.classList.toggle('after-main-click');
    innerId.classList.toggle('details-inner-container');
})


const daughnut_data = {
    labels: energy_labels,
    datasets: [{
        label: 'Energy Consumption',
        data: [300, 50, 100],
        backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config_doughnut = {
    type: 'doughnut',
    data: daughnut_data,
    
    options: {
        legend: {display: false},
        plugins: {
            title: {
                display: true,
                text: 'Power Consumption Graph',
            },
            legend: {
                labels: {
                usePointStyle: true,
                },
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed) {
                        const value = context.parsed ; // Convert to percentage
                        label += value.toFixed(2) + '%'; // Format as percentage with two decimal places
                    }
                    return label;
                }
                }
            }
        }
    }
};

new Chart(document.getElementById('myDoughnut'),config_doughnut);