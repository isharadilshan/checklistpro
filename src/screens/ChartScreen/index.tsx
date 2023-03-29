import React, {useState, useCallback, useEffect} from 'react';
import {View} from 'native-base';
import {useSelector} from 'react-redux';
import {BarChart} from 'react-native-chart-kit';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import createStyle from './styles';
import {Expense} from '../../shared/models';
import {Colors} from '../../theme/colors';

type AmountObjectProps = {
  amount: number;
  category: string;
};

const ChartScreen: React.FC = () => {
  const [chartLabels, setChartLabels] = useState<string[]>([]);
  const [chartData, setChartData] = useState<number[]>([]);
  const expenseList = useSelector<any, []>(({expense}) => expense.expenseList);
  const styles = createStyle();

  const procesExpenseData = useCallback(() => {
    let result: AmountObjectProps[] = [];
    expenseList.reduce((res: Object, value: Expense) => {
      if (!res[value.category]) {
        res[value.category] = {category: value.category, amount: 0};
        result.push(res[value.category]);
      }
      res[value.category].amount += value.amount;
      return res;
    }, {});
    setChartLabels(result.map((item) => item.category));
    setChartData(result.map((item) => item.amount));
  }, [expenseList]);

  useEffect(() => {
    procesExpenseData();
  }, [procesExpenseData]);

  return (
    <ScreenWrapper noPaddings={false}>
      <View style={styles.chartWrapper}>
        <BarChart
          data={{
            labels: chartLabels,
            datasets: [{data: chartData}],
          }}
          width={300}
          height={600}
          fromZero
          showValuesOnTopOfBars
          yAxisLabel={''}
          yAxisSuffix={' $'}
          verticalLabelRotation={30}
          chartConfig={{
            backgroundColor: Colors.primary,
            backgroundGradientFrom: Colors.primary,
            backgroundGradientTo: Colors.primary,
            color: () => Colors.highlightBlue,
            labelColor: () => Colors.highlightGreen,
            paddingTop: 20,
            propsForLabels: {
              translateY: -5,
            },
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ChartScreen;
