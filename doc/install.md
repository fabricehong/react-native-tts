# Native base fonts with expo
NativeBase use some custom fonts that can be loaded using loadAsync function. Check out this expo link. 

Syntax 

async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
}
Copy

Check out the NativeBase KitchenSink with CRNA for an example of NativeBase components implementation. Here's the source code for NativeBase KitchenSink.