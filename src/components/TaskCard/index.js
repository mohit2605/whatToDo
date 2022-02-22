import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './style';
import idx from 'idx';
import {commonStyles} from '../../themes/commonStyles';
import {SvgXml} from 'react-native-svg';
import * as Icons from '../../constants/svg';
import DefaultProps from '../../constants/DefaultProps';
import PropTypes from 'prop-types';
import * as Colors from '../../themes/colors';
import CheckBox from '@react-native-community/checkbox';

const TaskCard = props => {
  const {data, onEdit, onDelete, onMarkComplete} = props;
  const name = idx(data, _ => _.name) || '';
  const isTaskCompleted = idx(data, _ => _.isCompleted) || false;

  const renderTitle = () => {
    return (
      <View style={styles.titleMainContainer}>
        <View style={styles.titleContainer}>
          <CheckBox
            style={styles.checkBoxStyle}
            tintColors={{
              true: Colors.BLACK,
              false: Colors.RED_ACTIVE,
            }}
            onValueChange={() => onMarkComplete(data)}
            value={isTaskCompleted}
          />
          <Text style={[commonStyles.SEMI_BOLD_16_BLACK, styles.extraTitle]}>
            {name}
          </Text>
        </View>
        <View style={styles.editContainer}>
          <TouchableOpacity
            disabled={isTaskCompleted}
            onPress={() => onEdit(data)}>
            <SvgXml
              fill={Colors.BLACK}
              width={22}
              height={22}
              xml={Icons.EDIT_PEN}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDelete(data)}>
            <SvgXml
              fill={Colors.BLACK}
              width={24}
              height={24}
              xml={Icons.TRASH}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return <View style={styles.container(isTaskCompleted)}>{renderTitle()}</View>;
};

TaskCard.defaultProps = {
  data: DefaultProps.EMPTY_OBJECT,
  onEdit: DefaultProps.noop,
  onMarkComplete: DefaultProps.noop,
  onDelete: DefaultProps.noop,
};

TaskCard.propTypes = {
  data: PropTypes.object,
  onEdit: PropTypes.func,
  onMarkComplete: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TaskCard;
