import React, {useState, useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Button, View, Text, HStack, Select} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import ExpenseListItem from '../../components/molecules/ExpenseListItem';
import {fetchExpenseList} from '../../redux/actions/expense';
import ListEmptySkeleton from '../../components/organisms/ListEmptySkeleton';
import {EXPENSE_CATEGORIES, MONTHS} from '../../utils/constants';
import {getDateName} from '../../utils/helper/Date';
import {isEmpty} from '../../utils/helper/Validator';
import {Expense} from '../../shared/models';
import createStyle from './styles';

const ExpenseSummaryScreen: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);
  const expenseList = useSelector<any, []>(({expense}) => expense.expenseList);
  const isFetchingExpenses = useSelector<any, boolean>(
    ({expense}) => expense.isFetchingExpenses,
  );
  const dispatch = useDispatch();
  const styles = createStyle();

  const refreshList = () => {
    //@ts-ignore
    dispatch(fetchExpenseList());
  };

  const onPressClear = () => {
    setCategory('');
    setMonth('');
  };

  const filterExpenses = useCallback(() => {
    if (!isEmpty(month) && !isEmpty(category)) {
      const filteredArray = expenseList.filter((expense: Expense) => {
        return (
          getDateName(expense.createdDate).split('-')[1] === month &&
          expense.category === category
        );
      });
      setFilteredExpenses(filteredArray);
    } else if (!isEmpty(month)) {
      const filteredArray = expenseList.filter((expense: Expense) => {
        return getDateName(expense.createdDate).split('-')[1] === month;
      });
      setFilteredExpenses(filteredArray);
    } else if (!isEmpty(category)) {
      const filteredArray = expenseList.filter((expense: Expense) => {
        return expense.category === category;
      });
      setFilteredExpenses(filteredArray);
    } else {
      setFilteredExpenses(expenseList);
    }
  }, [expenseList, month, category]);

  useEffect(() => {
    filterExpenses();
  }, [filterExpenses]);

  return (
    <ScreenWrapper noPaddings={false}>
      <HStack justifyContent={'space-between'} mb={4} mt={4}>
        <Select
          minWidth="130"
          size={'xl'}
          selectedValue={category}
          accessibilityLabel="Category"
          placeholder="Category"
          _selectedItem={{
            bg: 'tertiary.500',
          }}
          color={'coolGray.200'}
          onValueChange={(value) => setCategory(value)}
        >
          {EXPENSE_CATEGORIES.map((category) => {
            return (
              <Select.Item
                key={category.key}
                label={category.label}
                value={category.value}
              />
            );
          })}
        </Select>
        <Select
          minWidth="130"
          size={'xl'}
          selectedValue={month}
          accessibilityLabel="Month"
          placeholder="Month"
          _selectedItem={{
            bg: 'tertiary.500',
          }}
          color={'coolGray.200'}
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
        <Button onPress={onPressClear} colorScheme="warning">
          Clear
        </Button>
      </HStack>
      <FlatList
        data={filteredExpenses}
        renderItem={({item}: {item: Expense}) => {
          return (
            <ExpenseListItem
              id={item?._id}
              title={item?.title}
              description={item?.description}
              amount={item?.amount}
              category={item?.category}
              createdDate={item?.createdDate}
              updatedDate={item?.updatedDate}
              latitude={item?.latitude}
              longitude={item?.longitude}
              hideButtons={true}
              onPressDelete={() => {}}
              onPressEdit={() => {}}
            />
          );
        }}
        refreshing={isFetchingExpenses}
        onRefresh={refreshList}
        keyExtractor={(item) => item._id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          if (isFetchingExpenses) {
            return <ListEmptySkeleton />;
          }
          return (
            <View style={styles.emptyText}>
              <Text color={'coolGray.200'}>{'No Expense Data Available'}</Text>
            </View>
          );
        }}
      />
    </ScreenWrapper>
  );
};

export default ExpenseSummaryScreen;
