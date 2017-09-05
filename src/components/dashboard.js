import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, DrawerLayoutAndroid, View, TouchableHighlight, Image, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card, H2 } from 'native-base';

class Dashboard extends Component {
    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
    }
    closeDrawer = () => {
        this.refs['myDrawer'].closeDrawer();
    }
    render() {
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#ecf0f1' }} >
                <Image source={{ uri: 'https://knockedoverbyafeather.files.wordpress.com/2017/03/rm-logo.gif' }}
                    style={{ width: 250, height: 250, marginLeft: 20 }} />
                <Button block success style={{ margin: 5 }} onPress={() => Actions.patientForm()} >
                    <Text>Home</Text>
                </Button>
                <Button block success style={{ margin: 5 }} onPress={() => Actions.addPatient()} >
                    <Text>Add</Text>
                </Button>
                <Button block success style={{ margin: 5 }} onPress={() => Actions.searchPatient()} >
                    <Text>Add</Text>
                </Button>
                {/* <Button block success style={{ margin: 5 }} onPress={() => Actions.checkout()} >
                    <Text>check out</Text>
                </Button> */}
            </View>
        );
        return (
            <Container style={styles.containerStyle}>
                <DrawerLayoutAndroid
                    ref="myDrawer"
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}
                >
                    <Header style={styles.headerStyle}>
                        <Left>
                            <Button success style={styles.homebuttonStyle} onPress={this.openDrawer}  >
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{ marginLeft: -30 }}>Remember My Stuff</Title>
                        </Body>
                    </Header >
                    <View>
                        <TouchableHighlight onPress={this.openDrawer}>
                            <Text>
                            </Text>
                        </TouchableHighlight>

                    </View>
                    <ScrollView>
                        <Card style={styles.cardStyle} >
                            <CardItem style={styles.cardStyle}>
                                <Image source={{ uri: 'http://www.nowlookhear.co.uk/wp-content/uploads/Remember-Logo-march-08.jpg' }}
                                    style={styles.imageStyle} />
                            </CardItem>
                            <CardItem style={styles.cardStyle}>
                                <Button block success style={styles.buttonStyle} onPress={() => Actions.addPatient()} >
                                    <Text> Add item </Text>
                                </Button>

                                <Button block success style={styles.buttonStyle} onPress={() => Actions.patientList()} >
                                    <Text> find item </Text>
                                </Button>

                                <Button block success style={styles.buttonStyle} onPress={() => Actions.searchPatient()} >
                                    <Text> Remove Item </Text>
                                </Button>



                            </CardItem>
                        </Card>
                    </ScrollView>

                </DrawerLayoutAndroid >
            </Container >

        );
    };
}
const styles = StyleSheet.create({
    containerStyle: {
        marginTop: -65
    },
    headerStyle: {
        backgroundColor: '#4BB543',
    },
    homebuttonStyle: {
        width: 40,
    },
    cardStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageStyle: {
        flex: 1, width: 450, height: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        width: 300,
        margin: 5
    },

});


export default Dashboard;