import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChartBar as BarChart3, Package, ShoppingBag, Users } from 'lucide-react-native';
import { Link } from 'expo-router';

export default function AdminDashboard() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#1B4965', '#5FA8D3']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}>
        <Text style={styles.headerTitle}>Admin Dashboard</Text>
        <Text style={styles.headerSubtitle}>Welcome back, Admin</Text>
      </LinearGradient>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <ShoppingBag size={24} color="#1B4965" />
          <Text style={styles.statNumber}>156</Text>
          <Text style={styles.statLabel}>Total Orders</Text>
        </View>

        <View style={styles.statCard}>
          <Users size={24} color="#1B4965" />
          <Text style={styles.statNumber}>1,234</Text>
          <Text style={styles.statLabel}>Customers</Text>
        </View>

        <View style={styles.statCard}>
          <Package size={24} color="#1B4965" />
          <Text style={styles.statNumber}>45</Text>
          <Text style={styles.statLabel}>Products</Text>
        </View>

        <View style={styles.statCard}>
          <BarChart3 size={24} color="#1B4965" />
          <Text style={styles.statNumber}>€8.5k</Text>
          <Text style={styles.statLabel}>Revenue</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionGrid}>
          <Link href="/admin/orders" asChild>
            <TouchableOpacity style={styles.actionCard}>
              <LinearGradient
                colors={['#FF9F1C', '#F17105']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.actionGradient}>
                <ShoppingBag size={24} color="#fff" />
                <Text style={styles.actionText}>Manage Orders</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Link>

          <Link href="/admin/products" asChild>
            <TouchableOpacity style={styles.actionCard}>
              <LinearGradient
                colors={['#1B4965', '#5FA8D3']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.actionGradient}>
                <Package size={24} color="#fff" />
                <Text style={styles.actionText}>Manage Products</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Orders</Text>
        {[1, 2, 3].map((order) => (
          <View key={order} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderNumber}>Order #{order}23456</Text>
              <Text style={styles.orderStatus}>Processing</Text>
            </View>
            <Text style={styles.orderCustomer}>John Doe</Text>
            <Text style={styles.orderAmount}>€24.99</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  headerTitle: {
    fontFamily: 'Pacifico_400Regular',
    fontSize: 32,
    color: '#fff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    marginTop: -30,
  },
  statCard: {
    width: '45%',
    backgroundColor: '#fff',
    padding: 15,
    margin: '2.5%',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#1B4965',
    marginTop: 8,
  },
  statLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#1B4965',
    marginBottom: 15,
  },
  actionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    height: 120,
    borderRadius: 15,
    overflow: 'hidden',
  },
  actionGradient: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  orderCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderNumber: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#1B4965',
  },
  orderStatus: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#FF9F1C',
  },
  orderCustomer: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  orderAmount: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#5FA8D3',
  },
});
