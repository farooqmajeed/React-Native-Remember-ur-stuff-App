import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker'
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card, H2, Label, Form, List, ListItem } from 'native-base';
import { AppActions } from '../../store/actions/AppActions';

class VeiwItems extends Component {

    componentDidMount() {
        this.props.viewItems();
        console.log("available PROps", this.props.viewItems());
    }

    onButtonPress() {
        this.props.removeItems();
    }
    render() {
        var arrayObject = []
        const data = this.props && this.props.app && this.props.app.viewItem ? this.props.app.viewItem : [];
        console.log("DATA", data)
        arrayObject = Object.values(data);
        // const helper = data[0];
        // for (var key in helper) {
        //     console.log(helper[key])
        //     arrayObject.push(helper[key])
        //     console.log("array Obect", arrayObject);
        // }

        return (
            <Container style={styles.container} >
                <Content>
                    {/* <H2 style={{ textAlign: 'center', marginTop: 50 }} >Item Information</H2> */}
                    {
                        arrayObject.map((item, i) => {
                            return (
                                <ScrollView>
                                    <Card key={i} style={{ flex: 1 }}>
                                        <CardItem >
                                            <List >
                                                <ListItem style={styles.list} >
                                                    <Text style={{ color: '#88FF00' }} >Name:</Text><Text>{item.name}</Text>
                                                </ListItem>
                                                <ListItem style={styles.list}>
                                                    <Text style={{ color: '#88FF00' }}>Place:</Text><Text>{item.place}</Text>
                                                </ListItem>
                                                <ListItem style={styles.list}>
                                                    <Text style={{ color: '#88FF00' }}>Date:</Text><Text>{item.date}</Text>
                                                </ListItem>
                                            </List>
                                            <Button block success onPress={this.onButtonPress.bind(this)}><Text> Remove Item</Text></Button>
                                        </CardItem>
                                    </Card>

                                </ScrollView>
                            )
                        })
                    }

                </Content>
            </Container>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardItem: {
        flex: 1,
        width: 350,
        height: 'auto'
    },
    list: {
        width: 350,
        padding: 15,
        color: '#88FF00'
    }

});
function mapStateToProps(state) {
    return {
        app: state.app
    }
}
function mapDispatchToProps(dispatch) {
    return {
        viewItems: (data) => dispatch(AppActions.viewItems(data)),
        removeItems: (data) => dispatch(AppActions.RemoveItems(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VeiwItems);
// export default VeiwItems;