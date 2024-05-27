import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { data as chartData } from '../db';
import { Box ,Flex, Heading, Stack} from '@chakra-ui/react'
const BarChart = () => {
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const colorPalette = ['#f44336', '#2196f3', '#9e9e9e'];
 const limtedData = chartData.slice(0, 3);
  const datasets = limtedData.map((item,index )=> ({
    label: item.Overhead,
    data: months.map(month => item[month]),
    backgroundColor: colorPalette[index % colorPalette.length],
    borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
    borderWidth: 1
  }));

  const data = {
    labels: months,
    datasets: datasets
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <Box w="full"   borderRadius="lg" p={4}> 
    <Stack spacing={4}>
      <Flex  > 
        <Bar  data={data} options={options} />
      </Flex>
    </Stack>
  </Box>
  
);
};

export default BarChart;
