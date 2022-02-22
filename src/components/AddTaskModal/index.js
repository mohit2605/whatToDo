import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Modal, View, Text, ScrollView} from 'react-native';
import {styles} from './style';
import {SvgXml} from 'react-native-svg';
import * as Icons from '../../constants/svg';
import {commonStyles} from '../../themes/commonStyles';
import {TextInput} from '../TextInput';
import {responsiveWidth} from '../../utils/scalingUtils';
import {Button} from '../Button';
import PropTypes from 'prop-types';
import DefaultProps from '../../constants/DefaultProps';
import idx from 'idx';
import * as Colors from '../../themes/colors';

export const AddTaskModal = props => {
  const {
    onRequestClose,
    isVisible,
    onDismiss,
    onSubmit,
    onUpdate,
    isLoading,
    isEditMode,
    selectedCategory,
  } = props;
  const [task, setTask] = useState('');

  useEffect(() => {
    const categoryName = idx(selectedCategory, _ => _.name) || '';
    setTask(categoryName);
  }, [selectedCategory]);

  const renderHeader = () => {
    return (
      <View style={commonStyles.FLEX_ROW_SPACE_BETWEEN}>
        <Text style={commonStyles.SEMI_BOLD_16_BLACK}>{'ADD TASK'}</Text>
        <TouchableOpacity onPress={() => onRequestClose()}>
          <SvgXml
            fill={Colors.BLACK}
            width={22}
            height={22}
            xml={Icons.CROSS}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal
      visible={isVisible}
      onDismiss={onDismiss}
      onRequestClose={() => onRequestClose()}
      transparent>
      <TouchableOpacity
        onPress={() => {
          isLoading ? null : onRequestClose();
        }}
        style={styles.container}
        activeOpacity={1}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          <TouchableOpacity activeOpacity={1} style={styles.innerContainer}>
            <View>
              {renderHeader()}
              <View style={styles.contentContainer}>
                <TextInput
                  title={''}
                  isLightMode
                  wrapperStyle={{width: responsiveWidth(82)}}
                  textInputProps={{
                    value: task,
                    onChangeText: text => setTask(text),
                    multiline: true,
                    placeholder: 'Enter your task here...',
                  }}
                />
                <Button
                  isLoading={isLoading}
                  disabled={!task}
                  onPress={() =>
                    isEditMode
                      ? onUpdate({_id: selectedCategory._id, name: task})
                      : onSubmit(task)
                  }
                  title={isEditMode ? 'UPDATE' : 'SAVE'}
                  wrapperStyle={styles.saveButton}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </TouchableOpacity>
    </Modal>
  );
};

AddTaskModal.defaultProps = {
  onRequestClose: DefaultProps.noop,
  onDismiss: DefaultProps.noop,
  onSubmit: DefaultProps.noop,
  onUpdate: DefaultProps.noop,
  isVisible: false,
  isLoading: false,
  isEditMode: false,
  selectedCategory: DefaultProps.EMPTY_OBJECT,
};

AddTaskModal.propTypes = {
  onRequestClose: PropTypes.func,
  onDismiss: PropTypes.func,
  onSubmit: PropTypes.func,
  onUpdate: PropTypes.func,
  isVisible: PropTypes.bool,
  isLoading: PropTypes.bool,
  isEditMode: PropTypes.bool,
  selectedCategory: PropTypes.object,
};
