import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {selectCountFemale, selectHistory} from '../../store/names/selectors';
import {getMostPopular} from '../../utils/getMostPopular';
import {statStyle} from './Statistics.styles';

export const Statistics = () => {
  const history = useSelector(selectHistory);
  const countFemale = useSelector(selectCountFemale);

  const total = Object.keys(history).length;
  const femalePercent = total && +((countFemale / total) * 100).toFixed(3);

  const [mostPopularName, mostPopularCount] = useMemo(
    () => getMostPopular(history),
    [history],
  );

  return (
    <View style={statStyle.wrapper}>
      <View style={statStyle.line}>
        <Text style={statStyle.text}>Total names checked: {total}</Text>
      </View>
      {!!total && (
        <>
          <View style={[statStyle.line, statStyle.subParag]}>
            <Text style={statStyle.text}>Female: </Text>
            <Text style={[statStyle.text, statStyle.bold]}>
              {femalePercent}%
            </Text>
          </View>
          <View style={[statStyle.line, statStyle.subParag]}>
            <Text style={statStyle.text}>Male: </Text>
            <Text style={[statStyle.text, statStyle.bold]}>
              {100 - femalePercent}%
            </Text>
          </View>
          <View style={statStyle.line}>
            <Text style={statStyle.text}>Most popular: </Text>
            <Text style={[statStyle.text, statStyle.bold]}>
              {mostPopularName} ({mostPopularCount})
            </Text>
          </View>
        </>
      )}
    </View>
  );
};
