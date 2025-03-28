import { Tabs } from 'expo-router';
import { Chrome as Home, ShoppingBag, User, Map, ShoppingCart } from 'lucide-react-native';
import { useCart } from '@/context/CartContext';
import { Text, View } from 'react-native';

const OCEAN_BLUE = '#1B4965';

function CartIcon({ color, size }: { color: string; size: number }) {
  const { state } = useCart();
  
  return (
    <View>
      <ShoppingCart size={size} color={color} />
      {state.items.length > 0 && (
        <View style={{
          position: 'absolute',
          right: -6,
          top: -6,
          backgroundColor: '#FF9F1C',
          borderRadius: 10,
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{
            color: '#fff',
            fontSize: 12,
            fontFamily: 'Poppins_600SemiBold',
          }}>
            {state.items.length}
          </Text>
        </View>
      )}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: OCEAN_BLUE,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 10,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, size }) => <ShoppingBag size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => <CartIcon color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          title: 'Track',
          tabBarIcon: ({ color, size }) => <Map size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
