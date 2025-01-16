The solution uses the `useEffect` hook and `LayoutAnimation` to solve the problem:

```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, LayoutAnimation, UIManager, View, Text } from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const MyComponent = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setDimensions({ width: window.width, height: window.height });
    });

    const getInitialDimensions = () => {
      const { width, height } = Dimensions.get('window');
      if (width && height) { 
        setDimensions({ width, height });
      }
    };
    getInitialDimensions();
    return () => subscription.remove();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default MyComponent;
```

This solution ensures that `Dimensions.get('window')` is called only after the component layout is ready, avoiding the `undefined` issue.