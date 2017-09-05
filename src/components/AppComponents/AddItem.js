import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker'
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card, H2, Label, Form } from 'native-base';
import {AppActions} from '../../store/actions/AppActions';

class AddItem extends Component {
    constructor(Props) {
        super(Props);

        this.state = { name: '', place: '', date: new Date() };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleSubmit = () => {
        console.log("hit")
        // e.preventDefault();
        let date = this.state.date.getDate() + "." + this.state.date.getMonth() + "." + this.state.date.getFullYear();
        let name = this.state.name.toLowerCase();
        let place = this.state.place
        let userObj = {
            name: name,
            place: place,
            date: date
        }
        console.log("itemADD", userObj);
        this.props.addItem(userObj)
    }

    render() {
        return (
            <Container style={styles.container} >
                <Content>
                    <H2 style={{ textAlign: 'center', marginTop: 50 }} >Item Information</H2>
                    <Form style={styles.cardItem} >
                        <Item floatingLabel>
                            <Label>Item Name</Label>
                            <Input
                                required
                                name='name'
                                ref='name'
                                value={this.state.value}
                                onChangeText={(name) => this.setState({ name })}

                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Item Place</Label>
                            <Input
                                required
                                name='place'
                                ref='place'
                                value={this.state.value}

                                onChangeText={(place) => this.setState({ place })}

                            />
                        </Item>
                        <DatePicker
                            style={{ width: 350, marginTop: 20 }}
                            date={this.state.date}
                            mode="date"


                            placeholder="select date"
                            format="YYYY.DD.MM"
                            minDate={new Date()}
                            maxDate={new Date()}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            value={this.state.value}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />


                        <Button block success onPress={() => this.handleSubmit()} >
                            <Text>Add To Remember </Text>
                        </Button>
                    </Form>


                </Content>
            </Container>
        );


    }
}
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
    }
});

function mapStateToProps(state) {
    return {
        app: state.app
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addItem: (data) => dispatch(AppActions.addItem(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddItem);

