import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Item } from '../types/Item';

interface Props {
    item: Item
    onDelete: (id: string) => void
}

export default function ItemRow({ item, onDelete }: Props) {
    return (
        <TouchableOpacity style={styles.row} onPress={() => onDelete(item.id)}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        padding: 15,
        borderBottomWidth: 1,
        backgroundColor: "#eee",
        marginTop: 8,
    }
})