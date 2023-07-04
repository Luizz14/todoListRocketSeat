import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Trash from "../Trash";

interface Task {
    name: string,
    complete: boolean
}

type Props = {
    item: Task,
    onComplete: () => void
}

export default function Todos({ item, onComplete }: Props) {
    return(
        <View style={ item.complete ? styles.containerComplete : styles.container }>
            <TouchableOpacity 
                style={ item.complete ? styles.circleComplete : styles.circle }
                onPress={onComplete}
            >
            </TouchableOpacity>
            <Text style={ item.complete ? styles.taskCompleteText : styles.text }>{item.name}</Text>
            <Trash />
        </View>
    )
}