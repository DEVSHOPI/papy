import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, CircleCheck as CheckCircle2, Truck, TrendingUp, Users, ShoppingBag } from 'lucide-react-native';

const orders = [
  {
    id: '1',
    status: 'nouvelle',
    customer: 'Jean Dupont',
    items: ['Coupe Fraise Melba x2', 'Chocolat Liégeois x1'],
    total: 25.70,
    date: '2024-01-20 14:30',
  },
  {
    id: '2',
    status: 'en-cours',
    customer: 'Marie Martin',
    items: ['Sorbet Citron x3'],
    total: 20.70,
    date: '2024-01-20 15:00',
  },
  {
    id: '3',
    status: 'termine',
    customer: 'Pierre Durand',
    items: ['Coupe Fraise Melba x1'],
    total: 8.90,
    date: '2024-01-19 18:45',
  },
];

export default function AdminScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard Admin</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: '#FFE8F7' }]}>
              <TrendingUp size={24} color="#FF4B8C" />
            </View>
            <Text style={styles.statValue}>2,450 €</Text>
            <Text style={styles.statLabel}>Ventes du jour</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: '#E8F4FF' }]}>
              <ShoppingBag size={24} color="#4B9DFF" />
            </View>
            <Text style={styles.statValue}>28</Text>
            <Text style={styles.statLabel}>Commandes</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: '#E8FFF0' }]}>
              <Users size={24} color="#4BC85E" />
            </View>
            <Text style={styles.statValue}>156</Text>
            <Text style={styles.statLabel}>Clients</Text>
          </View>
        </View>

        <View style={styles.ordersSection}>
          <Text style={styles.sectionTitle}>Commandes récentes</Text>
          
          <View style={styles.ordersContainer}>
            {orders.map((order) => (
              <TouchableOpacity key={order.id} style={styles.orderCard}>
                <View style={styles.orderHeader}>
                  <View style={styles.statusContainer}>
                    {order.status === 'nouvelle' && (
                      <Clock size={20} color="#FF4B8C" />
                    )}
                    {order.status === 'en-cours' && (
                      <Truck size={20} color="#4B9DFF" />
                    )}
                    {order.status === 'termine' && (
                      <CheckCircle2 size={20} color="#4BC85E" />
                    )}
                    <Text style={[
                      styles.statusText,
                      order.status === 'nouvelle' && styles.statusNew,
                      order.status === 'en-cours' && styles.statusPending,
                      order.status === 'termine' && styles.statusCompleted,
                    ]}>
                      {order.status === 'nouvelle' && 'Nouvelle'}
                      {order.status === 'en-cours' && 'En préparation'}
                      {order.status === 'termine' && 'Terminée'}
                    </Text>
                  </View>
                  <Text style={styles.orderDate}>{order.date}</Text>
                </View>

                <Text style={styles.customerName}>{order.customer}</Text>
                
                <View style={styles.orderItems}>
                  {order.items.map((item, index) => (
                    <Text key={index} style={styles.itemText}>{item}</Text>
                  ))}
                </View>
                
                <View style={styles.orderFooter}>
                  <View style={styles.actionButtons}>
                    {order.status === 'nouvelle' && (
                      <TouchableOpacity style={styles.acceptButton}>
                        <Text style={styles.buttonText}>Accepter</Text>
                      </TouchableOpacity>
                    )}
                    {order.status === 'en-cours' && (
                      <TouchableOpacity style={styles.completeButton}>
                        <Text style={styles.buttonText}>Terminer</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  <Text style={styles.totalAmount}>{order.total.toFixed(2)} €</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  ordersSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  ordersContainer: {
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
  statusNew: {
    color: '#FF4B8C',
  },
  statusPending: {
    color: '#4B9DFF',
  },
  statusCompleted: {
    color: '#4BC85E',
  },
  orderDate: {
    fontSize: 12,
    color: '#666',
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  orderItems: {
    gap: 4,
  },
  itemText: {
    fontSize: 14,
    color: '#666',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    paddingTop: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  acceptButton: {
    backgroundColor: '#FF4B8C',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  completeButton: {
    backgroundColor: '#4BC85E',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
