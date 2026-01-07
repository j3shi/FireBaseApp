import { useEffect, useState } from "react"
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native"
import { collection, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/config"
import { Item } from "../types/Item"
import ItemRow from "../components/ItemRow"

export default function ShoppingListScreen() {
    const [items, setItems] = useState<Item[]>([])
    const [text, setText] = useState("")

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "items"), snapshot => {
            setItems(snapshot.docs.map(d => ({ id: d.id, ...(d.data() as Omit<Item, "id">)})))
        })
        return () => unsubscribe()
    }, [])

    const addItem = async () => {
        if (!text.trim()) return
        await addDoc(collection(db, "items"), { name: text })
        setText("")
    }

    const deleteItem = async (id: string) => {
        await deleteDoc(doc(db, "items", id))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shopping List</Text>

            <TextInput
                style={styles.input}
                placeholder="Add new item"
                value={text}
                onChangeText={setText}
            />
            <Button title="Add" onPress={addItem}/>

            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemRow item={item} onDelete={deleteItem} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 50,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
})