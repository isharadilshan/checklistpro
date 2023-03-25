import React, {useState, useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Fab, Input, useToast} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import {useDispatch, useSelector} from 'react-redux';
import DeleteConfirmModal from '../../components/organisms/DeleteConfirmModal';
import AlertToast from '../../components/molecules/AlertBanner';
import ExprenseEditModal from '../../components/organisms/ExpenseEditModal';
import TodoCreateModal from '../../components/organisms/TodoCreateModal';
import {deleteTodo} from '../../services/todos';
import {fetchTodoList} from '../../redux/actions/todo';
import TodoListItem from '../../components/molecules/TodoListItem';

const TodoScreen: React.FC = () => {
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [dCModalVisible, setDCModalVisible] = useState<boolean>(false);
  const [selectedExpenseId, setSelectedExpenseId] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [expenses, setExpenses] = useState<any>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const todoList = useSelector<any, []>(({todo}) => todo.todoList);
  const dispatch = useDispatch();
  const toast = useToast();

  const fetchTodos = useCallback(async () => {
    try {
      setIsFetching(true);
      // const response = await getProductList(type);

      // if (response.data) {
      //   setProducts(response.data);
      // }
      // setIsFetching(false);
      // setIsRefreshing(false);
    } catch (e) {
      // error
      setIsFetching(false);
      setIsRefreshing(false);
    }
  }, []);

  const filterTodos = () => {
    if (!searchText) {
      return expenses;
    }

    const items = expenses.filter((expense) => {
      if (
        expense?.title.toLowerCase().includes(searchText.toLowerCase()) ||
        expense?.description
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase())
      ) {
        return expense;
      }
    });

    return items;
  };

  const onPressEdit = (id) => {
    setEditModalVisible(true);
    setSelectedExpenseId(id);
  };

  const onPressDelete = async (id) => {
    setDCModalVisible(true);
    setSelectedExpenseId(id);
  };

  const onPressConfirmDelete = async () => {
    try {
      await deleteTodo(selectedExpenseId);
      //@ts-ignore
      await dispatch(fetchTodoList());
      setDCModalVisible(false);
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
    setIsRefreshing(true);
    setExpenses([]);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <ScreenWrapper noPaddings={false}>
      <Input
        w={'100%'}
        alignSelf="center"
        placeholder="Search Todos"
        width="100%"
        p={3}
        mt={4}
        mb={4}
        style={{color: 'white'}}
        onChangeText={(value) => setSearchText(value)}
        InputLeftElement={
          <Icon color="gray" size={30} style={{marginLeft: 10}} name="search" />
        }
      />
      <FlatList
        data={todoList}
        renderItem={({item}: any) => {
          return (
            <TodoListItem
              id={item?._id}
              title={item?.title}
              description={item?.description}
              category={item?.category}
              createdDate={item?.createdDate}
              updatedDate={item?.updatedDate}
              onPressDelete={(id) => onPressDelete(id)}
              onPressEdit={(id) => onPressEdit(id)}
            />
          );
        }}
        refreshing={isRefreshing}
        onRefresh={refreshList}
        keyExtractor={(item) => item._id.toString()}
        showsVerticalScrollIndicator={false}
        // ListEmptyComponent={() => {
        //   if (isRefreshing || isFetching) {
        //     return <ProductListPlaceholder />;
        //   }
        //   return (
        //     <View
        //       style={{
        //         flex: 1,
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //       }}
        //     >
        //       <Title style={[styles.text, {color: colors.primary}]}>
        //         {i18n.t('noProductsFound')}
        //       </Title>
        //     </View>
        //   );
        // }}
      />
      <Fab
        mb={6}
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<Icon color="white" name="plus" />}
        label="Create New"
        onPress={() => setCreateModalVisible(true)}
      />
      <TodoCreateModal
        modalVisible={createModalVisible}
        closeModal={() => setCreateModalVisible(false)}
      />
      <ExprenseEditModal
        modalVisible={editModalVisible}
        closeModal={() => setEditModalVisible(false)}
      />
      <DeleteConfirmModal
        modalVisible={dCModalVisible}
        closeModal={() => setDCModalVisible(false)}
        onDeleteConfirm={onPressConfirmDelete}
      />
    </ScreenWrapper>
  );
};

export default TodoScreen;
