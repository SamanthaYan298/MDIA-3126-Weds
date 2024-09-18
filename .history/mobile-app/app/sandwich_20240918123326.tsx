import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
        <Text>This page is a Page about sandwiches. </Text>
        <Link href="/">My Index Page!</Link>
        <Link href="/cheese">My Cheese Page!</Link>
    </View>
    
  )
}
