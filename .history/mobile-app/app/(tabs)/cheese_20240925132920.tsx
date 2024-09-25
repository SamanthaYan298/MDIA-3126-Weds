import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View className='m-2'>
        <Text style={makeItPretty.titleName}>This page is a Page about cheese. 🐭 🧀</Text>
        <Link href="/" asChild>
            <Pressable>
                <Text className='makeItPretty, titleName'>Index 🍓</Text>
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