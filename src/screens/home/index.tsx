import { Text, TextInput, View, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Todos from "../../components/ToDos";


export default function Home() {
    interface Task {
        name: string;
        complete: boolean;
    }

    const [tasks, setTasks] = useState<Task[]>([])
    const [taskName, setTaskName] = useState('')


    function handleTaskAdd() {
        const newTask = {
            name: taskName,
            complete: false
        } 
        setTasks(prevStatus => [...prevStatus, newTask])
        setTaskName('')
    }

    function handleTaskComplete(item: Task) {
        item.complete = true
    }

    function handleTaskSkipped(item: Task) {
        item.complete = false
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Text style={{color: '#4EA8DE'}}>To</Text> 
                <Text style={{color: '#5E60CE'}}>do</Text> 
            </Text>
            
            <View style={styles.form}>
                <TextInput
                    style={styles.input} 
                    placeholder="Nome da tarefa"
                    placeholderTextColor={'#6b6b6b'}
                    onChangeText={setTaskName}
                    value={taskName}
                />

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => handleTaskAdd()}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.statistic}>
                <Text style={styles.statisticText}>
                    <Text style={{color: '#4EA8DE'}}>
                        Criadas {tasks.length}
                    </Text>
                </Text>

                <Text style={styles.statisticText}>
                    <Text style={{color: '#8284FA'}}>
                        Concluidas {tasks.reduce((acc, item) => acc + (item.complete ? 1 : 0), 0)}
                    </Text>
                </Text>
            </View>


            <FlatList
                data={tasks} 
                keyExtractor={(item) => item.name} 
                renderItem={({ item }) => (
                    <Todos
                    key={item.name} 
                    item={item} 
                    onComplete={() => item.complete ? handleTaskSkipped(item) : handleTaskComplete(item)}
                />
            )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.line}>
                        <Text style={styles.textEmptyComponent}> 
                            <Text style={{fontWeight: 'bold'}}>Você ainda não tem tarefas cadastradas.{'\n'}</Text> 
                            <Text style={{opacity: 0.5}}>Crie tarefas e organize seus itens a fazer!</Text> 
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}