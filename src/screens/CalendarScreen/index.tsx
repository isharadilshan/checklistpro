import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from 'react-native-calendars';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import createStyle from './styles';
import {ToDo} from '../../shared/models';
import TodoAgendaItem from '../../components/molecules/TodoAgendaItem';
import {Colors} from '../../theme/colors';
import {timestampToString} from '../../utils/helper/Date';

const CalendarScreen: React.FC = () => {
  const styles = createStyle();
  const [todoAgendaItems, setTodoAgendaItems] = useState<AgendaSchedule>({});
  const todoList = useSelector<any, []>(({todo}) => todo.todoList);

  const loadItems = (day: DateData) => {
    const agenda = todoList.reduce((groups: any, todo: ToDo) => {
      const date = timestampToString(todo.createdDate);
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push({
        name: `${todo.title}@${todo.description}@${todo.category}@${todo.status}`,
        height: 120,
        day: date,
      });
      return groups;
    }, {});
    setTodoAgendaItems(agenda);
  };

  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    return (
      <TodoAgendaItem data={reservation.name} height={reservation.height} />
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text style={styles.emptyDataText}>No todo data for the date!</Text>
      </View>
    );
  };

  const renderEmptyData = () => {
    return (
      <View style={styles.emptyDataWrapper}>
        <Text style={styles.emptyDataText}>No data found!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  return (
    <ScreenWrapper noPaddings>
      <Agenda
        items={todoAgendaItems}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
        rowHasChanged={rowHasChanged}
        showClosingKnob={true}
        renderEmptyData={renderEmptyData}
        renderEmptyDate={renderEmptyDate}
        theme={{
          calendarBackground: Colors.primary,
          agendaKnobColor: Colors.highlightGreen,
          //@ts-ignore
          reservationsBackgroundColor: Colors.coolGray,
        }}
      />
    </ScreenWrapper>
  );
};

export default CalendarScreen;
