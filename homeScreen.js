// Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import logo from './TextToSpeechIcon.png';
import Icon from 'react-native-vector-icons/Entypo';

export default class HomeScreen extends React.Component {
  state = {
    name: '',
    IconColor: 'red',
  };

  speak = (Value) => {
    if (Value === '') {
      Speech.speak('Please Write Your Name inside the Input');
    } else {
      Speech.speak(`The Text Written Is : ${Value}`);
    }
  };

  render() {
    return (
      <View style={styles.textContainer1}>
        <Header
          backgroundColor={'#9CE47C'}
          centerComponent={{
            text: 'Text To Speech App',
            style: { color: 'black', fontSize: 20, fontWeight: 700 },
          }}
        />

        <Image style={styles.imageIcon} source={logo} />

        <Text
          style={{
            textAlign: 'center',
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 25,
          }}>
          Enter The Word
        </Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.text}
        />

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.speak(this.state.name);
              this.setState({
                IconColor: 'purple',
              });
            }}>
            <Text style={styles.text2}>
              Tap To Hear Speak
              {<Icon name="sound" size={25} color={this.state.IconColor} />}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 40,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 4,
    fontSize: 17,
    fontWeight: 'bold',
    outline: 'none',
  },

  textContainer1: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },

  text2: {
    color: 'black',
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#9CE47C',
    marginTop: 80,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    height: 80,
  },
  imageIcon: {
    marginTop: 20,
    width: 150,
    height: 150,
    marginLeft: 110,
  },
});
