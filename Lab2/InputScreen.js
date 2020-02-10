import React from 'react';
import {Text, TextInput, Button, View, Linking} from 'react-native';
class InputScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;

    return (
        <View style={{alignItems: 'center'}}>
        <Text style={{marginTop: 20}}>
        Github Username
        </Text>
        <TextInput
        style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1, color: 'black' }}
          onChangeText={text =>
            this.setState({
              username: text,
            })
          }
        />
        <Button
          title="Continue"
          onPress={() =>
            navigate('Open', {username: this.state.username})
          }
        />
        </View>
    );
  }
}
export default InputScreen;
