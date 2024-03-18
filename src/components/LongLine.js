import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    LayoutAnimation,
    NativeModules,
} from 'react-native';

// Android
NativeModules.setLayoutAnimationEnabledExperimental && NativeModules.setLayoutAnimationEnabledExperimental(true);

export default class LongLine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        }
    }

    toggleIsExpanded() {
        const { isExpanded } = this.state;
        this.setState({
            isExpanded: !isExpanded
        })
    }

    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        const { label = "", content = "-" } = this.props;
        const { isExpanded } = this.state;

        return (
            <View style={styles.line}>
                <Text style={[
                    styles.cell,
                    styles.label, 
                ]}>{ label } </Text>
                <Text 
                    style={[
                        styles.cell,
                        styles.content,
                        isExpanded ? styles.expanded : styles.collapsed
                ]}>{ content } </Text>
                <TouchableWithoutFeedback onPress={() => this.toggleIsExpanded()}>
                    <View style={styles.arrowContainer}>
                        <Text style={styles.arrow}>{isExpanded ? `↑` : `↓`}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    line: {
        paddingTop: 3,
        paddingBottom: 3,
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5,
        paddingRight: 5,
    },
    label: {
        color: 'white',
        fontWeight: 'bold',
        flex: 1,
        paddingBottom: 8
    },
    content: {
        color: 'white',
        flex: 3,
        textAlign: 'justify', //IOS
    },
    collapsed: {
        maxHeight: 84
    },
    expanded: {
        flex: 1
    },
    arrowContainer:{
        width: 25,
        height: 25, // Ajuste conforme necessário
        margin: 20,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 12,
        alignSelf: 'flex-end',
    },  
    arrow: {
        color: 'white',
        fontSize: 26,
        marginTop: -10,
        textAlign: 'center',
        textAlignVertical: 'center'
    }

});
