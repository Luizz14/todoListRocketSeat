import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#1A1A1A',
    },
    form: {
        marginTop: 50,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        width: 271,
        height: 54,
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#262626',
        borderRadius: 6,
        marginRight: 10,
        color: 'white',
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 40,
        color: 'white',
        fontWeight: 'bold'
    },
    textEmptyComponent: {
        marginTop: 100,
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonText: {
        color: '#F2F2F2',
        fontSize: 24,
    },
    button: {
        width: 54,
        height: 54,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        borderTopColor: '#FFF',
    },
    statistic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    statisticText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
})