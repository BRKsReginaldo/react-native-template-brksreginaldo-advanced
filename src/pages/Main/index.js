import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/ducks/count';
import {
  Button, Buttons, Container, Count, CountContainer, Input, InputContainer, Title,
} from './styles';

function Main({
  count, increment, decrement, setCount, navigation,
}) {
  return (
    <Container>
      <Title>
        Thank you for using our basic template
      </Title>
      <CountContainer>
        <Count>
          {count}
        </Count>
      </CountContainer>
      <Buttons>
        <Button
          onPress={() => increment()}
        >
          <Icon name="add" color="#000" size={30} />
        </Button>
        <Button
          onPress={() => decrement()}
        >
          <Icon name="remove" color="#000" size={30} />
        </Button>
      </Buttons>
      <InputContainer>
        <Input
          keyboardType="number-pad"
          value={count.toString()}
          onChangeText={value => setCount(Number.isNaN(parseInt(value, 10)) ? 0 : parseInt(value, 10))}
        />
      </InputContainer>
      <Button
        style={{
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('About')}
      >
        <Text>Go To About View</Text>
      </Button>
    </Container>
  );
}

Main.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  setCount: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = ({ count }) => ({
  count: count.count,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setCount: actionCreators.setCount,
  increment: actionCreators.increment,
  decrement: actionCreators.decrement,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
