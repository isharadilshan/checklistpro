import React from 'react';
import {Badge, View, Text} from 'native-base';
import createStyle from './styles';

type TodoAgendaItemProps = {
  data: string;
  height: number;
};

const TodoAgendaItem: React.FC<TodoAgendaItemProps> = ({data, height}) => {
  const styles = createStyle();

  const renderBadge = (colorScheme: string, status: string) => {
    return (
      <Badge mt={4} width={100} variant={'subtle'} colorScheme={colorScheme}>
        {status}
      </Badge>
    );
  };

  const renderStatusBadge = (todoStatus) => {
    switch (todoStatus) {
      case 'TODO':
        return renderBadge('coolGray', todoStatus);
      case 'INPROGRESS':
        return renderBadge('warning', todoStatus);
      case 'HOLD':
        return renderBadge('error', todoStatus);
      case 'DONE':
        return renderBadge('info', todoStatus);
      default:
        return null;
    }
  };

  return (
    <View style={styles.agendaItemWrapper}>
      <Text color={'blueGray.400'} fontSize="xl">
        {data.split('@')[0]}
      </Text>
      <Text color={'blueGray.400'}>{data.split('@')[1]}</Text>
      <View style={styles.tagWrapper}>
        <Badge mt={4} width={100} variant={'solid'} colorScheme="success">
          {data.split('@')[2]}
        </Badge>
        {renderStatusBadge(data.split('@')[3])}
      </View>
    </View>
  );
};

export default TodoAgendaItem;
