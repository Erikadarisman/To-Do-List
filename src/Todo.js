import React from "react";
import { StyleSheet, Alert } from "react-native";
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

// import dummycategory from '../Asset/Items';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      category: ""
    };
  }

  handleChange = key => val => {
    this.setState({ [key]: val });
  };

  insert = () => {
    let data = {
      title: this.state.title,
      desc: this.state.desc,
      category: this.state.category
    };
    fire.shared.create(data);
  };

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
            <Title style={{ color: "#000000" }}>Add Todo</Title>
          </Body>

          <Right style={{ flex: 1 }}>
            <Button
              transparent
              onPress={() => {
                this.insert();
                this.props.navigation.navigate("Home");
              }}
            >
              <Icon name="md-add" style={{ color: "#000000" }} />
            </Button>
          </Right>
        </Header>

        <Content>
          <Form>
            <Input
              value={this.state.title}
              onChangeText={this.handleChange("title")}
              placeholder="ADD TITLE..."
              placeholderIconColor="#ecf0f1"
              style={styles.textStyle}
            />
            <Textarea
              value={this.state.desc}
              onChangeText={this.handleChange("desc")}
              rowSpan={12}
              placeholder="ADD DESCRIPTION..."
              style={styles.textAreaStyle}
            />
            <Input
              value={this.state.category}
              onChangeText={this.handleChange("category")}
              placeholder="ADD CATEGORY..."
              placeholderIconColor="#ecf0f1"
              style={styles.textStyle}
            />
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
