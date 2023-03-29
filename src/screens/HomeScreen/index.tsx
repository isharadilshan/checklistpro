import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {Center} from 'native-base';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import ContentCard from '../../components/molecules/ContentCard';
import createStyle from './styles';
import {
  CALENDAR,
  CHART,
  EXPENSE,
  EXPENSE_SUMMARY,
  TODOS,
  TODO_SUMMARY,
} from '../../routes/route-paths';
import {fetchExpenseList} from '../../redux/actions/expense';
import {fetchTodoList} from '../../redux/actions/todo';

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

  const fetchInitialData = useCallback(async () => {
    //@ts-ignore
    dispatch(fetchExpenseList());
    //@ts-ignore
    dispatch(fetchTodoList());
  }, [dispatch]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

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
