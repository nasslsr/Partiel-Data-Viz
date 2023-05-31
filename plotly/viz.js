fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {

   sortByCountryPopulation(data);
   const top30Countries = data.slice(-30);
   const countries = top30Countries.map((item) => item.country);
   const populations = top30Countries.map((item) => item.population);

  
   const axesBarchart = {
       x: countries,
       y: populations,
       type: 'bar'
   };

   const infoBarchart = {
       title: 'Top 30 des pays par population',
       xaxis: { title: 'Pays' },
       yaxis: { title: 'Population' }
   };

   Plotly.newPlot('data-viz', [axesBarchart], infoBarchart);
}

function sortByCountryPopulation(data) {
    data.sort((a, b) => a.population - b.population);
}



