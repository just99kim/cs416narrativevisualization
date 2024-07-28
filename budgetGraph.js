document.addEventListener('DOMContentLoaded', function() {

    const datasets = {
        btn1: [
            {year: 2007, value: 26720},
            {year: 2008, value: 28250},
            {year: 2009, value: 29170},
            {year: 2010, value: 30700},
            {year: 2011, value: 31690},
            {year: 2012, value: 33190},
            {year: 2013, value: 34690},
            {year: 2014, value: 36390},
            {year: 2015, value: 37920},
            {year: 2016, value: 38940},
            {year: 2017, value: 40060},
            {year: 2018, value: 41100},
            {year: 2019, value: 42170},
            {year: 2020, value: 43140},
            {year: 2021, value: 40970},
            {year: 2022, value: 38970},
            {year: 2023, value: 37650},
        ],
        btn2: [
            {year: 2007, value: 45730},
            {year: 2008, value: 49220},
            {year: 2009, value: 48630},
            {year: 2010, value: 48290},
            {year: 2011, value: 51170},
            {year: 2012, value: 44260},
            {year: 2013, value: 45330},
            {year: 2014, value: 48130},
            {year: 2015, value: 50220},
            {year: 2016, value: 49530},
            {year: 2017, value: 50250},
            {year: 2018, value: 51030},
            {year: 2019, value: 54490},
            {year: 2020, value: 56580},
            {year: 2021, value: 58860},
            {year: 2022, value: 60934},
            {year: 2023, value: 61088},
        ],
        btn3: [
            {year: 2007, value: 40},
            {year: 2008, value: 39},
            {year: 2009, value: 42},
            {year: 2010, value: 45},
            {year: 2011, value: 45},
            {year: 2012, value: 56},
            {year: 2013, value: 58},
            {year: 2014, value: 58},
            {year: 2015, value: 58},
            {year: 2016, value: 62},
            {year: 2017, value: 64},
            {year: 2018, value: 66},
            {year: 2019, value: 65},
            {year: 2020, value: 65},
            {year: 2021, value: 63},
            {year: 2022, value: 64},
            {year: 2023, value: 62},
        ],
        btn4: [
            {year: 2007, value: 14043},
            {year: 2008, value: 13578},
            {year: 2009, value: 13138},
            {year: 2010, value: 13213},
            {year: 2011, value: 13260},
            {year: 2012, value: 14090},
            {year: 2013, value: 13594},
            {year: 2014, value: 13318},
            {year: 2015, value: 14043},
            {year: 2016, value: 13820},
            {year: 2017, value: 14571},
            {year: 2018, value: 14033},
            {year: 2019, value: 15668},
            {year: 2020, value: 14268},
            {year: 2021, value: 12459},
            {year: 2022, value: 12740},
            {year: 2023, value: 12900},
        ],
        btn5: [
            {year: 2007, value: 31},
            {year: 2008, value: 28},
            {year: 2009, value: 27},
            {year: 2010, value: 27},
            {year: 2011, value: 26},
            {year: 2012, value: 32},
            {year: 2013, value: 30},
            {year: 2014, value: 28},
            {year: 2015, value: 28},
            {year: 2016, value: 28},
            {year: 2017, value: 29},
            {year: 2018, value: 27},
            {year: 2019, value: 29},
            {year: 2020, value: 25},
            {year: 2021, value: 21},
            {year: 2022, value: 21},
            {year: 2023, value: 21},
        ],
        btn6: [
            {year: 2007, value: 89},
            {year: 2008, value: 85},
            {year: 2009, value: 87},
            {year: 2010, value: 91},
            {year: 2011, value: 88},
            {year: 2012, value: 107},
            {year: 2013, value: 107},
            {year: 2014, value: 103},
            {year: 2015, value: 103},
            {year: 2016, value: 107},
            {year: 2017, value: 109},
            {year: 2018, value: 108},
            {year: 2019, value: 106},
            {year: 2020, value: 101},
            {year: 2021, value: 91},
            {year: 2022, value: 85},
            {year: 2023, value: 83},
        ],

    };
    
    const annotations = {
        btn1: [
            {
                note: {
                    label: "2008 Financial Crisis",
                    title: "Debt Increase"
                },
                x: new Date(2008, 0),
                y: 28250,
                dy: -50,
                dx: 50
            },
            {
                note: {
                    label: "COVID-19 Pandemic",
                    title: "Peak Debt"
                },
                x: new Date(2020, 0),
                y: 43140,
                dy: 50,
                dx: -50
            }
        ],
        btn2: [
            {
                note: {
                    label: "Post-Recession Recovery",
                    title: "Highest Salary Growth"
                },
                x: new Date(2011, 0),
                y: 51170,
                dy: 50,
                dx: -50
            },
            {
                note: {
                    label: "Recent High",
                    title: "Salary Peak"
                },
                x: new Date(2023, 0),
                y: 61088,
                dy: 50,
                dx: -50
            }
        ],
        btn3: [
            {
                note: {
                    label: "Debt-to-Income Ratio",
                    title: "Highest Growth"
                },
                x: new Date(2012, 0),
                y: 56,
                dy: -30,
                dx: 30
            },
            {
                note: {
                    label: "Debt-to-Income Ratio",
                    title: "Peak"
                },
                x: new Date(2018, 0),
                y: 66,
                dy: 50,
                dx: -50
            }
        ],
        btn4: [
            {
                note: {
                    label: "Economic downturn impact",
                    title: "2008 Financial Crisis"
                },
                x: new Date(2008, 0),
                y: 13578,
                dy: -30,
                dx: 30
            },
            {
                note: {
                    label: "Highest expenditure before pandemic",
                    title: "Peak Spending"
                },
                x: new Date(2019, 0),
                y: 15668,
                dy: 90,
                dx: -90
                }
        ],
        btn5: [
            {
                note: {
                    label: "Expenses-to-Income Ratio",
                    title: "Highest Growth"
                },
                x: new Date(2012, 0),
                y: 32,
                dy: 100,
                dx: -100
            }
           
        ],

        btn6: [
            {
                note: {
                    label: "Ratio exceeds 100%",
                    title: "Financial Strain Point"
                    },
                    x: new Date(2012, 0),
                    y: 107,
                    dy: 120,
                    dx: -120
            },]


    };
    const margin = {top: 50, right: 70, bottom: 50, left: 120};
    const width = 1000 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const svg = d3.select('#budget-graph')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Set up scales
    const x = d3.scaleTime()
    .range([0, width]);

    const y = d3.scaleLinear()
        .range([height, 0]);

    // Create line
    const line = d3.line()
        .x(d => x(new Date(d.year, 0)))
        .y(d => y(d.value));

    // Add X axis
    const xAxis = svg.append('g')
        .attr('transform', `translate(0,${height})`);

    // Add Y axis
    const yAxis = svg.append('g');

    // Add X axis label
    svg.append('text')
        .attr('transform', `translate(${width/2},${height + 40})`)
        .style('text-anchor', 'middle')
        .text('Year');

    // Add Y axis label
    const yAxisLabel = svg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', -90)
    .attr('x', -height / 2)
    .attr('dy', '1em')


    const title = svg.append('text')
        .attr('x', width / 2)
        .attr('y', -margin.top / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '20px')
        .style('font-weight', 'bold');

    // Function to update the graph
    function updateGraph(data, yLabel, graphTitle, buttonId) {

        x.domain(d3.extent(data, d => new Date(d.year, 0)));
        y.domain([0, d3.max(data, d => d.value)]);
    
        // Update X axis
        xAxis.transition().duration(1000)
            .call(d3.axisBottom(x)
                .tickFormat(d3.timeFormat("%Y"))
                .ticks(d3.timeYear.every(2))); 
    
        // Update Y axis
        yAxis.transition().duration(1000)
        .call(d3.axisLeft(y)
            .tickFormat(d => {
                if (buttonId === 'btn3' | buttonId == 'btn5'| buttonId == 'btn6') {
                    return d3.format('.0f')(d) + '%';
                } else {
                    return `$${d3.format(",")(d)}`;
                }
            }));        

        svg.selectAll('.annotation-group').remove();
        const path = svg.selectAll('.line')
            .data([data]);
    
        path.enter()
            .append('path')
            .attr('class', 'line')
            .merge(path)
            .transition()
            .duration(1000)
            .attr('d', line)
            .attr('fill', 'none')
            .attr('stroke', () => {
                switch(buttonId) {
                    case 'btn1': return 'red';
                    case 'btn2': return 'green';
                    case 'btn3': return 'blue';
                    case 'btn4': return 'orange';
                    case 'btn5': return 'blue';
                    case 'btn6': return 'blue';



                }
            })            
            .attr('stroke-width', 2);
    
        path.exit().remove();
        if (annotations[buttonId]) {
        const makeAnnotations = d3.annotation()
            .type(d3.annotationLabel)
            .annotations(annotations[buttonId].map(a => ({
                ...a,
                x: x(a.x),
                y: y(a.y)
            })));

        svg.append('g')
            .attr('class', 'annotation-group')
            .call(makeAnnotations);
    }
    
        // Update Y axis label
        yAxisLabel.text(yLabel);
    
        // Update title
        title.text(graphTitle);
    }
    
    // Event listeners for buttons
    document.getElementById('btn1').addEventListener('click', () => updateGraph(datasets.btn1, "Student Loan Debt ($)", "Average Bachelor's Degree Student Loan Debt at Graduation", 'btn1'));
    document.getElementById('btn2').addEventListener('click', () => updateGraph(datasets.btn2, "Salary ($)", "Average Bachelor's Degree Graduate Starting Salary (Pretax)", 'btn2'));
    document.getElementById('btn3').addEventListener('click', () => updateGraph(datasets.btn3, "Percent (%)", "Average Bachelor's Degree Graduate Debt-to-Income Ratio", 'btn3'));
    document.getElementById('btn4').addEventListener('click', () => updateGraph(datasets.btn4, "Annual Expenditures", "Average Annual Expenditures For Adults Under 25", 'btn4'));
    document.getElementById('btn5').addEventListener('click', () => updateGraph(datasets.btn5, "Percent (%)", "Average Bachelor's Degree Graduate Expenses-to-Income Ratio", 'btn5'));
    document.getElementById('btn6').addEventListener('click', () => updateGraph(datasets.btn6, "Percent (%)", "Average Bachelor's Degree Graduate Debt-Plus-Expenses-to-Income Ratio", 'btn6'));

    // Initial graph
    updateGraph(datasets.btn1, "Student Loan Debt ($)", "Average Bachelor's Degree Student Loan Debt at Graduation");
});