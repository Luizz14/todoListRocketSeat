import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        width: '100%',
        height: 64,
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: '#333333'
    },
    text: {
        maxWidth: 260,
        color: '#F2F2F2',
        fontSize: 14,
        margin: 4,
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 100,
        margin: 4,
        borderColor: '#4EA8DE',
        borderWidth: 3,
    },


    taskCompleteText: {
        maxWidth: 260,
        color: '#F2F2F2',
        fontSize: 14,
        margin: 4,
        textDecorationLine: 'line-through',
    },
    circleComplete: {
        width: 24,
        height: 24,
        borderRadius: 100,
        margin: 4,
        backgroundColor: '#5E60CE'
    },
    containerComplete: {
        backgroundColor: '#262626',
        width: '100%',
        height: 64,
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        opacity: 0.5
    },
})