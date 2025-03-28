import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  withRepeat, 
  withTiming,
  withSequence,
  useSharedValue, 
  withDelay
} from 'react-native-reanimated';
import { useEffect } from 'react';

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width * 0.1;

export default function LoadingSpinner() {
  const circles = Array(3).fill(0);
  const animations = circles.map(() => useSharedValue(0));

  useEffect(() => {
    circles.forEach((_, index) => {
      animations[index].value = withRepeat(
        withSequence(
          withDelay(
            index * 400,
            withTiming(1, { duration: 600 })
          ),
          withTiming(0, { duration: 600 })
        ),
        -1,
        true
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      {circles.map((_, index) => {
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [
            { scale: animations[index].value },
          ],
          opacity: withTiming(1 - animations[index].value, { duration: 600 }),
        }));

        return (
          <Animated.View
            key={index}
            style={[styles.circle, animatedStyle]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: '#FF4B8C',
  },
});
