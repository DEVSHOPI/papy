import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, CircleCheck as CheckCircle2, Truck } from 'lucide-react-native';

const orders = [
  {
    id: '1',
    status: 'en-cours',
    items: ['Coupe Fraise Melba x2', 'Chocolat Liégeois x1'],
    total: 25.70,
    date: '2024-01-20 14:30',
  },
  {
    id: '2',
    status: 'livraison',
    items: ['Sorbet Citron x3'],
    total: 20.70,
    date: '2024-01-20 15:00',
  },
  {
    id: '3',
    status: 'termine',
    items: ['Coupe Fraise Melba x1'],
    total: 8.90,
    date: '2024-01-19 18:45',
  },
];

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Mes Commandes</Text>
        </View>

        <View style={styles.ordersContainer}>
          {orders.map((order) => (
            <TouchableOpacity key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <View style={styles.statusContainer}>
                  {order.status === 'en-cours' && (
                    <Clock size={20} color="#FF4B8C" />
                  )}
                  {order.status === 'livraison' && (
                    <Truck size={20} color="#4B9DFF" />
                  )}
                  {order.status === 'termine' && (
                    <CheckCircle2 size={20} color="#4BC85E" />
                  )}
                  <Text style={[
                    styles.statusText,
                    order.status === 'en-cours' && styles.statusPending,
                    order.status === 'livraison' && styles.statusDelivery,
                    order.status === 'termine' && styles.statusCompleted,
                  ]}>
                    {order.status === 'en-cours' && 'En préparation'}
                    {order.status === 'livraison' && 'En livraison'}
                    {order.status === 'termine' && 'Terminée'}
                  </Text>
                </View>
                <Text style={styles.orderDate}>{order.date}</Text>
              </View>
              
              <View style={styles.orderItems}>
                {order.items.map((item, index) => (
                  <Text key={index} style={styles.itemText}>{item}</Text>
                ))}
              </View>
              
              <View style={styles.orderFooter}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalAmount}>{order.total.toFixed(2)} €</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  ordersContainer: {
    padding: 20,
    gap: 16,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  statusPending: {
    color: '#FF4B8C',
  },
  statusDelivery: {
    color: '#4B9DFF',
  },
  statusCompleted: {
    color: '#4BC85E',
  },
  orderDate: {
    fontSize: 12,
    color: '#666',
  },
  orderItems: {
    gap: 4,
  },
  itemText: {
    fontSize: 14,
    color: '#333',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    paddingTop: 16,
  },
  totalLabel: {
    fontSize: 14,
    color: '#666',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
