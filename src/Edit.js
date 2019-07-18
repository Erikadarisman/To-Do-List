import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Picker,
  Form,
  Icon,
  Button,
  Thumbnail,
  Content,
  Input,
  Textarea,
  Label
} from "native-base";

import fire from "./Fire";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.state.params.id,
      title: this.props.navigation.state.params.title,
      desc: this.props.navigation.state.params.desc,
      category: this.props.navigation.state.params.category
    };
    console.log(this.state);
    console.log(this.props.navigation.state.params);
  }

  edit = () => {
    let data = {
      id : this.props.navigation.state.params.id,
      title : this.state.title,
      desc : this.state.desc,
      category : this.state.category,
    }
    fire.shared.edit(data);

  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#ffffff" }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" style={{ color: "#000000" }} />
            </Button>
          </Left>

          <Body style={{ flex: 1, alignItems: "center" }}>
            <Title style={{ color: "#000000" }}>Edit Note</Title>
          </Body>

          <Right style={{ flex: 1 }}>
           <Button
              transparent
              onPress={() => {
                this.edit();
                this.props.navigation.navigate("Home");
              }}
            >
              <Icon name="md-checkmark" style={{ color: "#000000" }} />
            </Button>
          </Right>
        </Header>

        <Content>
          <Form>
            <Input
              onChangeText={text => this.setState({ title: text })}
              placeholder="ADD TITLE..."
              placeholderIconColor="#ecf0f1"
              style={styles.textStyle}
            >
              {this.props.navigation.state.params.title}
            </Input>
            <Textarea
              rowSpan={12}
              placeholder="ADD DESCRIPTION..."
              style={styles.textAreaStyle}
              value={this.state.desc}
              onChangeText={desc => this.setState({ desc: desc })}
            />
            <Input
              onChangeText={category => this.setState({ category: category })}
              placeholder="ADD CATEGORY..."
              placeholderIconColor="#ecf0f1"
              style={styles.textStyle}
            >
              {this.props.navigation.state.params.category}
            </Input>
            {/* <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={styles.pickerStyle}
              selectedValue={this.state.idCategory}
              onValueChange={hasil =>
                this.setState({
                  idCategory: hasil
                })
              }
            >
              {this.props.categories.data.map(item => (
                <Picker.Item key={item.id} label={item.name} value={item.id} />
              ))}
            </Picker> */}
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    width: "80%",
    paddingLeft: 15,
    marginLeft: "10%",
    fontSize: 20,
    lineHeight: 27,
    marginTop: 10
  },
  textAreaStyle: {
    width: "80%",
    paddingLeft: 15,
    marginLeft: "10%",
    fontSize: 20,
    lineHeight: 27,
    marginTop: 10
  },
  pickerStyle: {
    width: "50%",
    marginLeft: "10%"
  },
  labelstyle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#000000",
    marginLeft: "10%",
    marginTop: 10
  }
});
