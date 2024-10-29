/* eslint-disable react/prop-types */
import "./ChartTodo.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartTodo( { countCompletedTodo, countTotalTodo, countOldTodo } ) {

    const data = {
        labels: ["Completed", "Total", "Old Todo"],
        datasets: [
            {
                label: ' count',
                data: [countCompletedTodo, countTotalTodo, countOldTodo],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(153, 102, 255, 0.3)',
                    'rgba(255, 159, 64, 0.3)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div
            className="container-chartTodo">
            <Doughnut data={data} />
        </div>
    )
}