import {Button, Linking, Text, TextInput, View} from 'react-native';
import React from 'react';
class OpenInSafari extends React.Component {
  static navigationOptions = {
    title: 'Open Site',
  };
  render() {
    const navigate = this.props.navigation;

    return (
      <View style={{alignItems: 'center'}}>
  <Text style={{marginTop: 20}}>
    {`Click to visit ${navigate.getParam('username', '')}'s page`}
     </Text>
        <Button
          title="Continue"
          onPress={() =>
            Linking.openURL(`https://github.com/${navigate.getParam('username', '')}`)
          }
        />
      </View>
    );
  }
}
export default OpenInSafari;
