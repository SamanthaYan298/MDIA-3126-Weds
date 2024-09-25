import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View className='m-2'>
        <Text className='border-red-700, border-2'>This page is a Page about cheese. 🐭 🧀</Text>
        <Link href="/" asChild>
            <Pressable>
                <Text className='titleName'>Index 🍓</Text>
            </Pressable>
        </Link>
    </View>
    )
}

const makeItPretty = StyleSheet.create({
    titleName: {
        borderColor: "yellow",
        borderWidth: 5,
        borderStyle: "solid",
    }
})