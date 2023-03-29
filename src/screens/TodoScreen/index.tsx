import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Fab, Input, Text, View, useToast} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import {useDispatch, useSelector} from 'react-redux';
import DeleteConfirmModal from '../../components/organisms/DeleteConfirmModal';
import AlertToast from '../../components/molecules/AlertToast';
import TodoCreateModal from '../../components/organisms/TodoCreateModal';
import {deleteTodo} from '../../services/todos';
import {fetchTodoList} from '../../redux/actions/todo';
import TodoListItem from '../../components/molecules/TodoListItem';
import createStyle from './styles';
import {ToDo} from '../../shared/models';
import TodoEditModal from '../../components/organisms/TodoEditModal';
import ListEmptySkeleton from '../../components/organisms/ListEmptySkeleton';

const TodoScreen: React.FC = () => {
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [dCModalVisible, setDCModalVisible] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<any | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const todoList = useSelector<any, []>(({todo}) => todo.todoList);
  const isFetchingTodos = useSelector<any, boolean>(
    ({todo}) => todo.isFetchingTodos,
  );
  const dispatch = useDispatch();
  const toast = useToast();
  const styles = createStyle();

  const filterTodos = () => {
    if (!searchText) {
      return todoList;
    }

    const items = todoList.filter((todo: ToDo) => {
      if (todo?.title.toLowerCase().includes(searchText.toLowerCase())) {
        return todo;
      }
    });

    return items;
  };

  const onPressEdit = (item) => {
    setEditModalVisible(true);
    setSelectedTodo(item);
  };

  const onPressDelete = async (item) => {
    setDCModalVisible(true);
    setSelectedTodo(item);
  };

  const onPressConfirmDelete = async () => {
    try {
      await deleteTodo(selectedTodo?.id);
      setDCModalVisible(false);
      //@ts-ignore
      dispatch(fetchTodoList());
      toast.show({
        render: () => {
          return (
            <AlertToast
              title="Successfully deleted todo"
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
    dispatch(fetchTodoList());
  };

  return (
    <ScreenWrapper noPaddings={false}>
      <Input
        p={3}
        mt={4}
        mb={4}
        size={'xl'}
        style={styles.searchInput}
        placeholder="Search Todos"
        onChangeText={(value) => setSearchText(value)}
        InputLeftElement={
          <Icon size={30} style={styles.searchIcon} name="search" />
        }
      />
      <FlatList
        data={filterTodos()}
        renderItem={({item}: {item: ToDo}) => {
          return (
            <TodoListItem
              id={item?._id}
              title={item?.title}
              description={item?.description}
              category={item?.category}
              status={item?.status}
              createdDate={item?.createdDate}
              updatedDate={item?.updatedDate}
              hideButtons={false}
              onPressDelete={(id) => onPressDelete(id)}
              onPressEdit={(id) => onPressEdit(id)}
            />
          );
        }}
        refreshing={isFetchingTodos}
        onRefresh={refreshList}
        keyExtractor={(item: ToDo) => item._id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          if (isFetchingTodos) {
            return <ListEmptySkeleton />;
          }
          return (
            <View style={styles.emptyText}>
              <Text color={'coolGray.200'}>{'No ToDo Data Available'}</Text>
            </View>
          );
        }}
      />
      <Fab
        mb={6}
        shadow={2}
        size="sm"
        icon={<Icon style={styles.fabIcon} name="plus" />}
        label="Create New"
        onPress={() => setCreateModalVisible(true)}
      />
      <TodoCreateModal
        modalVisible={createModalVisible}
        closeModal={() => setCreateModalVisible(false)}
      />
      <TodoEditModal
        modalVisible={editModalVisible}
        closeModal={() => setEditModalVisible(false)}
        //@ts-ignore
        selectedTodo={selectedTodo}
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
