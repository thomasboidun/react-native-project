import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = { status: 'Initialize' };

    this.styles = this.componentGetsStyles()
  }

  componentGetsStyles() {
    return StyleSheet.create({
      // add CSS here...
      container: {

      }
    })
  }

  componentDidMount() {
    this.setState({ status: 'Ready' });
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Text>SignInComponent works!</Text>
      </View>
    )
  }
}