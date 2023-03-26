import React from 'react';
import {Badge, View, Text} from 'native-base';
import createStyle from './styles';

type TodoAgendaItemProps = {
  data: string;
  height: number;
};

const TodoAgendaItem: React.FC<TodoAgendaItemProps> = ({data, height}) => {
  const styles = createStyle();
  return (
    <View style={styles.agendaItemWrapper}>
      <Text color={'blueGray.400'} fontSize="xl">
        {data.split('@')[0]}
      </Text>
      <Text color={'blueGray.400'}>{data.split('@')[1]}</Text>
      <Badge mt={4} width={100} variant={'solid'} colorScheme="success">
        {data.split('@')[2]}
      </Badge>
    </View>
  );
};

export default TodoAgendaItem;
