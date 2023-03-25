import React from 'react';
import {Text, Center} from 'native-base';
import {BarChart} from 'react-native-chart-kit';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';

const ChartScreen: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  return (
    <ScreenWrapper noPaddings={false}>
      <Center>
        <BarChart
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          data={data}
          width={300}
          height={500}
          yAxisLabel={'yaxis'}
          yAxisSuffix={'$'}
          chartConfig={{
            backgroundColor: '#141E30',
            backgroundGradientFrom: '#141E30',
            backgroundGradientTo: '#141E30',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          verticalLabelRotation={30}
        />
      </Center>
    </ScreenWrapper>
  );
};

export default ChartScreen;
