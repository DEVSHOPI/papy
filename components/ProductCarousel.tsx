import { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  useSharedValue,
  runOnJS,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const CARD_HEIGHT = SCREEN_HEIGHT * 0.4;
const CARD_WIDTH = SCREEN_WIDTH * 0.8;

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd((event) => {
      if (Math.abs(event.velocityY) > 400) {
        if (event.velocityY > 0) {
          // Swipe down
          if (currentIndex > 0) {
            translateY.value = withSpring(CARD_HEIGHT);
            runOnJS(setCurrentIndex)(currentIndex - 1);
          } else {
            translateY.value = withSpring(0);
          }
        } else {
          // Swipe up
          if (currentIndex < products.length - 1) {
            translateY.value = withSpring(-CARD_HEIGHT);
            runOnJS(setCurrentIndex)(currentIndex + 1);
          } else {
            translateY.value = withSpring(0);
          }
        }
      } else {
        translateY.value = withSpring(0);
      }
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
      ],
    };
  });

  const nextCard = useAnimatedStyle(() => {
    const scale = interpolate(
      translateY.value,
      [-CARD_HEIGHT, 0],
      [1, 0.9]
    );

    const opacity = interpolate(
      translateY.value,
      [-CARD_HEIGHT, 0],
      [1, 0]
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  const prevCard = useAnimatedStyle(() => {
    const scale = interpolate(
      translateY.value,
      [0, CARD_HEIGHT],
      [0.9, 1]
    );

    const opacity = interpolate(
      translateY.value,
      [0, CARD_HEIGHT],
      [0, 1]
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.carouselContainer}>
        {currentIndex > 0 && (
          <Animated.View style={[styles.card, styles.cardAbsolute, prevCard]}>
            <ProductCard product={products[currentIndex - 1]} />
          </Animated.View>
        )}
        
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.card, rStyle]}>
            <ProductCard product={products[currentIndex]} />
          </Animated.View>
        </GestureDetector>

        {currentIndex < products.length - 1 && (
          <Animated.View style={[styles.card, styles.cardAbsolute, nextCard]}>
            <ProductCard product={products[currentIndex + 1]} />
          </Animated.View>
        )}
      </View>
    </GestureHandlerRootView>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <View style={styles.cardContent}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price.toFixed(2)} €</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Commander</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    height: CARD_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardAbsolute: {
    position: 'absolute',
  },
  cardContent: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF4B8C',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#FF4B8C',
    padding: 12,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
