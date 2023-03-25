import React, {useState, useCallback} from 'react';
import {FlatList} from 'react-native';
import {View, Text, HStack, Select} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import {useDispatch, useSelector} from 'react-redux';
import ExpenseListItem from '../../components/molecules/ExpenseListItem';
import {fetchExpenseList} from '../../redux/actions/expense';
import ExprenseSkeleton from '../../components/organisms/ExpenseSkeleton';
import {EXPENSE_CATEGORIES, MONTHS} from '../../utils/constants';

const SummaryScreen: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const expenseList = useSelector<any, []>(({expense}) => expense.expenseList);
  const isFetchingExpenses = useSelector<any, boolean>(
    ({expense}) => expense.isFetchingExpenses,
  );
  const dispatch = useDispatch();

  const refreshList = () => {
    //@ts-ignore
    dispatch(fetchExpenseList());
  };

  const filterExpensesByMonth = useCallback(() => {}, [
    expenseList,
    category,
    month,
  ]);

  return (
    <ScreenWrapper noPaddings={false}>
      <HStack justifyContent={'space-between'} mb={4}>
        <Select
          minWidth="150"
          size={'xl'}
          selectedValue={category}
          accessibilityLabel="Category"
          placeholder="Category"
          _selectedItem={{
            bg: 'teal.600',
          }}
          _text={{
            color: '#fff',
          }}
          onValueChange={(value) => setCategory(value)}
        >
          {EXPENSE_CATEGORIES.map((month) => {
            return (
              <Select.Item
                key={month.key}
                label={month.label}
                value={month.value}
              />
            );
          })}
        </Select>
        <Select
          minWidth="150"
          size={'xl'}
          selectedValue={month}
          accessibilityLabel="Month"
          placeholder="Month"
          _selectedItem={{
            bg: 'teal.600',
            color: '#fff',
          }}
          onValueChange={(value) => setMonth(value)}
        >
          {MONTHS.map((month) => {
            return (
              <Select.Item
                key={month.key}
                label={month.label}
                value={month.value}
              />
            );
          })}
        </Select>
      </HStack>
      <FlatList
        data={expenseList}
        renderItem={({item}: any) => {
          return (
            <ExpenseListItem
              id={item?._id}
              title={item?.title}
              description={item?.description}
              amount={item?.amount}
              category={item?.category}
              createdDate={item?.createdDate}
              hideButtons={true}
              onPressDelete={(id) => {}}
              onPressEdit={(id) => {}}
            />
          );
        }}
        refreshing={isFetchingExpenses}
        onRefresh={refreshList}
        keyExtractor={(item) => item._id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          if (isFetchingExpenses) {
            return <ExprenseSkeleton />;
          }
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>{'No Expenses Data Available'}</Text>
            </View>
          );
        }}
      />
    </ScreenWrapper>
  );
};

export default SummaryScreen;
