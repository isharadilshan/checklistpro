import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {Center, useToast} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import BackgroundTimer from 'react-native-background-timer';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import ContentCard from '../../components/molecules/ContentCard';
import {
  CALENDAR,
  CHART,
  EXPENSE,
  EXPENSE_SUMMARY,
  TODOS,
  TODO_SUMMARY,
} from '../../routes/route-paths';
import {fetchExpenseList, getExpenses} from '../../redux/actions/expense';
import {fetchTodoList} from '../../redux/actions/todo';
import AlertToast from '../../components/molecules/AlertToast';
import createStyle from './styles';
import {ToDo} from '../../shared/models';

type CardItem = {
  id: string;
  imgUrl: string;
  title: string;
  onPress: () => void;
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const styles = createStyle();
  const dispatch = useDispatch();
  const toast = useToast();
  const todoList = useSelector<any, []>(({todo}) => todo?.todoList);

  const fetchInitialData = useCallback(async () => {
    //@ts-ignore
    dispatch(fetchExpenseList());
    //@ts-ignore
    dispatch(fetchTodoList());
  }, [dispatch]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  useEffect(() => {
    const intervalId = BackgroundTimer.setInterval(() => {
      checkTodosDueDates();
    }, 100000);
    return () => BackgroundTimer.clearInterval(intervalId);
  }, [todoList]);

  const checkTodosDueDates = useCallback(() => {
    todoList.forEach((todo: ToDo) => {
      if (moment(todo.updatedDate).isSame(moment(), 'd')) {
        toast.show({
          render: () => {
            return (
              <AlertToast
                title={`Todo due within a day @${moment(
                  todo.updatedDate,
                ).format('LLLL')}`}
                description={`${todo.title} ${todo.description}`}
                variant="top-accent"
                status="info"
              />
            );
          },
        });
      }
    });
  }, [todoList]);

  const firstRow: CardItem[] = [
    {
      id: 'TODOS',
      title: 'TODOS',
      imgUrl: 'https://picsum.photos/id/175/200/300',
      onPress: () => navigation.navigate(TODOS as never),
    },
    {
      id: 'EXPENSES',
      title: 'EXPENSES',
      imgUrl: 'https://picsum.photos/id/60/200/300',
      onPress: () => navigation.navigate(EXPENSE as never),
    },
  ];

  const secondRow: CardItem[] = [
    {
      id: 'CALENDAR',
      title: 'CALENDAR',
      imgUrl: 'https://picsum.photos/id/180/200/300',
      onPress: () => navigation.navigate(CALENDAR as never),
    },
    {
      id: 'CHARTS',
      title: 'CHARTS',
      imgUrl: 'https://picsum.photos/id/20/200/300',
      onPress: () => navigation.navigate(CHART as never),
    },
  ];

  const thirdRow: CardItem[] = [
    {
      id: 'TODO_SUMMARY',
      title: 'TODO_SUMMARY',
      imgUrl: 'https://picsum.photos/id/48/200/300',
      onPress: () => navigation.navigate(TODO_SUMMARY as never),
    },
    {
      id: 'EXPENSE_SUMMARY',
      title: 'EXPENSE_SUMMARY',
      imgUrl: 'https://picsum.photos/id/96/200/300',
      onPress: () => navigation.navigate(EXPENSE_SUMMARY as never),
    },
  ];

  return (
    <ScreenWrapper noPaddings={false}>
      <View style={styles.contentWrapper}>
        <Center style={styles.cardWrapper}>
          {firstRow.map(({id, title, imgUrl, onPress}: CardItem) => (
            <ContentCard
              key={id}
              title={title}
              imgUrl={imgUrl}
              onPress={onPress}
            />
          ))}
        </Center>
        <Center style={styles.cardWrapper}>
          {secondRow.map(({id, title, imgUrl, onPress}: CardItem) => (
            <ContentCard
              key={id}
              title={title}
              imgUrl={imgUrl}
              onPress={onPress}
            />
          ))}
        </Center>
        <Center style={styles.cardWrapper}>
          {thirdRow.map(({id, title, imgUrl, onPress}: CardItem) => (
            <ContentCard
              key={id}
              title={title}
              imgUrl={imgUrl}
              onPress={onPress}
            />
          ))}
        </Center>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
