import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { status: 'Initialize' };
    this.styles = this.componentGetsStyle();
  }


  componentGetsStyle() {
    return StyleSheet.create({
      // add CSS here...
      container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF'
      }
    })
  }

  componentDidMount() {
    this.setState({ status: 'Ready' });
  }

  onPress(value) {
    this.props.navigation.navigate(value);
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Button
          onPress={() => { this.onPress('Home') }}
          title="The Good Place"
          accessibilityLabel="Go to homepage."
          color="#FF6E14"
        />
        <Button
          onPress={() => { this.onPress('SignIn') }}
          title="Sign in"
          accessibilityLabel="Go to sign in form."
          color="#FF6E14"
        />
      </View>
    )
  }
}