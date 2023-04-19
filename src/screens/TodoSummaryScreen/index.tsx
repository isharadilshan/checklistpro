import React, {useState, useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Button, View, Text, HStack, Select} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import ListEmptySkeleton from '../../components/organisms/ListEmptySkeleton';
import {TODO_CATEGORIES, TODO_STATUS} from '../../utils/constants';
import {isEmpty} from '../../utils/helper/Validator';
import createStyle from './styles';
import {fetchTodoList} from '../../redux/actions/todo';
import TodoListItem from '../../components/molecules/TodoListItem';
import {ToDo} from '../../shared/models';

const TodoSummaryScreen: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [filteredTodos, setFilteredTodos] = useState<ToDo[]>([]);
  const todoList = useSelector<any, []>(({todo}) => todo.todoList);
  const isFetchingTodos = useSelector<any, boolean>(
    ({todo}) => todo.isFetchingTodos,
  );
  const dispatch = useDispatch();
  const styles = createStyle();

  const refreshList = () => {
    //@ts-ignore
    dispatch(fetchTodoList);
  };

  const onPressClear = () => {
    setCategory('');
    setStatus('');
  };

  const filterTodos = useCallback(() => {
    if (!isEmpty(status) && !isEmpty(category)) {
      const filteredArray = todoList.filter((todo: ToDo) => {
        return todo.status === status && todo.category === category;
      });
      setFilteredTodos(filteredArray);
    } else if (!isEmpty(status)) {
      const filteredArray = todoList.filter((todo: ToDo) => {
        return todo.status === status;
      });
      setFilteredTodos(filteredArray);
    } else if (!isEmpty(category)) {
      const filteredArray = todoList.filter((todo: ToDo) => {
        return todo.category === category;
      });
      setFilteredTodos(filteredArray);
    } else {
      setFilteredTodos(todoList);
    }
  }, [todoList, status, category]);

  useEffect(() => {
    filterTodos();
  }, [filterTodos]);

  const renderEmptyList = () => {
    if (isFetchingTodos) {
      return <ListEmptySkeleton />;
    }
    return (
      <View style={styles.emptyText}>
        <Text color={'coolGray.200'}>{'No ToDo Data Available'}</Text>
      </View>
    );
  };

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
          {TODO_CATEGORIES.map((category) => {
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
          selectedValue={status}
          accessibilityLabel="Status"
          placeholder="Status"
          _selectedItem={{
            bg: 'tertiary.500',
          }}
          color={'coolGray.200'}
          onValueChange={(value) => setStatus(value)}
        >
          {TODO_STATUS.map((status) => {
            return (
              <Select.Item
                key={status.key}
                label={status.label}
                value={status.value}
              />
            );
          })}
        </Select>
        <Button onPress={onPressClear} colorScheme="warning">
          Clear
        </Button>
      </HStack>
      <FlatList
        data={filteredTodos}
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
              hideButtons={true}
              onPressDelete={() => {}}
              onPressEdit={() => {}}
            />
          );
        }}
        refreshing={isFetchingTodos}
        onRefresh={refreshList}
        keyExtractor={(item) => item._id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
      />
    </ScreenWrapper>
  );
};

export default TodoSummaryScreen;
