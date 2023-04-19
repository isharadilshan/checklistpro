import React, {useEffect, useState} from 'react';
import {FlatList, Platform, PermissionsAndroid} from 'react-native';
import {Fab, Input, Text, View, useToast} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Geolocation from 'react-native-geolocation-service';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import ExprenseCreateModal from '../../components/organisms/ExpenseCreateModal';
import ExpenseListItem from '../../components/molecules/ExpenseListItem';
import {deleteExpense} from '../../services/expenses';
import DeleteConfirmModal from '../../components/organisms/DeleteConfirmModal';
import {fetchExpenseList} from '../../redux/actions/expense';
import AlertToast from '../../components/molecules/AlertToast';
import ExprenseEditModal from '../../components/organisms/ExpenseEditModal';
import ListEmptySkeleton from '../../components/organisms/ListEmptySkeleton';
import createStyle from './styles';
import {Expense} from '../../shared/models';

const ExpenseScreen: React.FC = () => {
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [dCModalVisible, setDCModalVisible] = useState<boolean>(false);
  const [selectedExpense, setSelectedExpense] = useState<any | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const expenseList = useSelector<any, []>(({expense}) => expense.expenseList);
  const isFetchingExpenses = useSelector<any, boolean>(
    ({expense}) => expense.isFetchingExpenses,
  );
  const dispatch = useDispatch();
  const toast = useToast();
  const styles = createStyle();

  const filterExpenses = () => {
    if (!searchText) {
      return expenseList;
    }

    const items = expenseList.filter((expense: Expense) => {
      if (expense?.title.toLowerCase().includes(searchText.toLowerCase())) {
        return expense;
      }
    });

    return items;
  };

  const onPressEdit = (item) => {
    setEditModalVisible(true);
    setSelectedExpense(item);
  };

  const onPressDelete = async (item) => {
    setDCModalVisible(true);
    setSelectedExpense(item);
  };

  const onPressConfirmDelete = async () => {
    try {
      await deleteExpense(selectedExpense?.id);
      setDCModalVisible(false);
      //@ts-ignore
      dispatch(fetchExpenseList());
      toast.show({
        render: () => {
          return (
            <AlertToast
              title="Successfully deleted expense"
              description={''}
              variant="top-accent"
              status="success"
            />
          );
        },
      });
    } catch (err) {
      toast.show({
        render: () => {
          return (
            <AlertToast
              title="Something went wrong"
              description={`${err}`}
              variant="top-accent"
              status="error"
            />
          );
        },
      });
    }
  };

  const refreshList = () => {
    //@ts-ignore
    dispatch(fetchExpenseList());
  };

  const requestLocationPermissions = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse');
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  };

  const renderEmptyList = () => {
    if (isFetchingExpenses) {
      return <ListEmptySkeleton />;
    }
    return (
      <View style={styles.emptyText}>
        <Text color={'coolGray.200'}>{'No Expense Data Available'}</Text>
      </View>
    );
  };

  useEffect(() => {
    requestLocationPermissions;
  }, []);

  return (
    <ScreenWrapper noPaddings={false}>
      <Input
        mt={4}
        mb={4}
        size={'xl'}
        style={styles.searchInput}
        placeholder="Search Expenses"
        onChangeText={(value) => setSearchText(value)}
        InputLeftElement={
          <Icon size={20} style={styles.searchIcon} name="search" />
        }
      />
      <FlatList
        data={filterExpenses()}
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
              onPressDelete={(item) => onPressDelete(item)}
              onPressEdit={(item) => onPressEdit(item)}
            />
          );
        }}
        refreshing={isFetchingExpenses}
        onRefresh={refreshList}
        keyExtractor={(item: Expense) => item._id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
      />
      <Fab
        mb={6}
        shadow={2}
        size="sm"
        icon={<Icon style={styles.fabIcon} name="plus" />}
        label="Create New"
        onPress={() => setCreateModalVisible(true)}
      />
      <ExprenseCreateModal
        modalVisible={createModalVisible}
        closeModal={() => setCreateModalVisible(false)}
      />
      <ExprenseEditModal
        modalVisible={editModalVisible}
        closeModal={() => setEditModalVisible(false)}
        //@ts-ignore
        selectedExpense={selectedExpense}
      />
      <DeleteConfirmModal
        modalVisible={dCModalVisible}
        closeModal={() => setDCModalVisible(false)}
        onDeleteConfirm={onPressConfirmDelete}
      />
    </ScreenWrapper>
  );
};

export default ExpenseScreen;
