import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

function About({ navigation }) {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Main')}
        title="Go Back to Main View"
      />
    </View>
  );
}

About.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default About;
