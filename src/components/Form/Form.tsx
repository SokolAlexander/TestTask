import React, {useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getGender} from '../../store/names/actions';
import {
  selectGender,
  selectName,
  selectRequestError,
  selectRequestStatus,
} from '../../store/names/selectors';
import {REQUEST_STATUS} from '../../store/names/types';
import {formStyles} from './Form.styles';

export const Form = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const gender = useSelector(selectGender);
  const error = useSelector(selectRequestError);
  const status = useSelector(selectRequestStatus);

  const [value, setValue] = useState('');

  const handlePress = () => {
    dispatch(getGender(value));
    setValue('');
  };

  const btnDisabled = status === REQUEST_STATUS.PENDING || !value;

  return (
    <>
      {!!name && (
        <View style={formStyles.infoWrapper}>
          <Text style={formStyles.infoText}>
            {name}: {gender}
          </Text>
        </View>
      )}
      <TextInput
        style={formStyles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Enter a name"
      />
      <View style={formStyles.statusWrapper}>
        {!!error && <Text style={formStyles.error}>{error}</Text>}
        {status === REQUEST_STATUS.PENDING && (
          <ActivityIndicator color="black" />
        )}
      </View>
      <TouchableOpacity
        disabled={btnDisabled}
        style={[formStyles.button, btnDisabled && formStyles.buttonDisabled]}
        onPress={handlePress}>
        <Text style={formStyles.btnText}>Get Gender</Text>
      </TouchableOpacity>
    </>
  );
};
