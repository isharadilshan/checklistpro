import React, {useState} from 'react';
import {Alert, Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from 'react-native-calendars';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import createStyle from './style';

interface State {
  items?: AgendaSchedule;
}

const CalendarScreen: React.FC = () => {
  const styles = createStyle();
  const [items, setItems] = useState<State>({items: undefined});
  const expenseList = useSelector<any, []>(({expense}) => expense.expenseList);

  const loadItems = (day: DateData) => {
    const tempItems = items.items || {};

    expenseList.forEach((expense) => {
      const strTime = timeToString(expense.createdDate);
      if (!tempItems[strTime]) {
        tempItems[strTime] = [];

        tempItems[strTime].push({
          name: expense.title,
          height: Math.max(50, Math.floor(Math.random() * 150)),
          day: strTime,
        });
      }
    });

    const newItems: AgendaSchedule = {};
    Object.keys(tempItems).forEach((key) => {
      newItems[key] = tempItems[key];
    });
    setItems({items: newItems});
  };

  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <TouchableOpacity
        style={[styles.item, {height: reservation.height}]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{fontSize, color}}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  return (
    <ScreenWrapper noPaddings>
      <Agenda
        items={items.items}
        loadItemsForMonth={loadItems}
        // selected={'2023-03-16'}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        showClosingKnob={true}
        theme={{calendarBackground: '#141E30', agendaKnobColor: 'green'}}
        style={{backgroundColor: '#141E30'}}
        // hideExtraDays={false}
        // showOnlySelectedDayItems
        // reservationsKeyExtractor={this.reservationsKeyExtractor}
      />
    </ScreenWrapper>
  );
};

export default CalendarScreen;
