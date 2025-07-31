/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { currencyByRupee } from './constans';
import Snackbar from 'react-native-snackbar';
// import curreyButton from './Components/CurrencyButton';
import CurrencyButton from './Components/CurrencyButton';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [inputValue, setInputValue] = React.useState<string>('');
  const [resultValue, setResultValue] = React.useState<string>('0');
  const [targetCurrency, setTargetCurrency] = React.useState<string>('USD');

  const buttonPressed = (targetValue: currency) => {
    if(!inputValue) {
      return Snackbar.show({
        text: 'Please enter an amount',
        duration: Snackbar.LENGTH_SHORT,
      });
      return;
    }
    const inputAmount = parseFloat(inputValue);
    if(!isNaN(inputAmount)) {  
      const convertedValue = (inputAmount * targetValue.value).toFixed(2);
      const result = `${targetValue.symbol} ${convertedValue}`
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    }
    else{
      return Snackbar.show({
        text: 'NAN',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }
  
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style = {styles.rupee}> # </Text>
            <TextInput 
              maxLength={14}
              value={inputValue}
              clearButtonMode='always'
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='ENTER AMOUNT IN RUPEES'
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>{resultValue}</Text>
          )}
        </View>
          <View>
            <FlatList 
              numColumns={3}
              data= {currencyByRupee}
              keyExtractor={item => item.name}
              renderItem={({item})=>(
                <Pressable style={[styles.button, targetCurrency===item.name&& styles.selected]}
                onPress={()=>buttonPressed(item)}
                >
                  <CurrencyButton {...item} />
                </Pressable>
              )}
            />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;