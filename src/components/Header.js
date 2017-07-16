import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.2,


  }

};

export default Header;
