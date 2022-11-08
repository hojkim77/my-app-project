import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, TextInput, TouchableOpacity, View, Button, Modal, FlatList, TouchableHighlight } from 'react-native';
import React, {useState, Component} from 'react';
import appstyles from "./appstyles";
import modalstyles from "./modalstyle";
import Item from './Item';

class Description extends Component {
  constructor (props) {
    super(props)
    this.props.num;
    this.inputRef = null;
  }

  render () {
    return (
      <View>
        
        <TextInput
          ref={(ref) => this.inputRef = ref}
        />
      </View>
    )
  }
}

export default function App() {
  const [visibleMoal, setVisibleModal] = useState(false);
  const [menu, setMenu] = useState(0);
  const common = () => {
    setMenu(0);
    console.log(0);
  }
  const korean = () => {
    setMenu(1);
    console.log(1);
  };
  const Japanese = () => {
    setMenu(2);
    console.log(2);
  };

  return (
    <View style={appstyles.container}>
      <Modal animationType="slide"
          transparent={true}
          visible={visibleMoal}>
          <View style={modalstyles.container}>
            <View style={modalstyles.modalcontainer}>
              <View style={appstyles.modalheader}>
              <TouchableOpacity onPress={common}>
                <Text style={{...modalstyles.menutext, backgroundColor: menu == 0 ? "grey":"white"}}>공통의미</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={korean}>
                <Text style={{...modalstyles.menutext, backgroundColor: menu == 1 ? "grey":"white"}}>한국의미</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={Japanese}>
                <Text style={{...modalstyles.menutext, backgroundColor: menu == 2 ? "grey":"white"}}>일본의미</Text>
              </TouchableOpacity>
              </View>
              <View>
                {
                  menu == 0 ? (<View>
                  <Text >
                    1.  입으로 씹어 하여 뱃속으로 들여보내다.{"\n"}
                        예: 오늘도 학교에서 점식을 먹는다.{"\n"}
                            今日も学校でランチを食べる。{"\n"}{"\n"}
                    2.  식사로 때우다.{"\n"}
                    .{"\n"}
                    .{"\n"}
                    .{"\n"}{"\n"}
                    7.  배신당하여 뒤통수를 맞다{"\n"}
                  </Text>
                  </View>):
                  menu == 1 ? (
                  <View>
                    <Text>
                      1. 일본어로는 ‘마시다(飲む)’의 의미로 사용되는 경우{"\n"}
                          예:  어제도 그만 술을 먹고 말았다.{"\n"}
                              昨日もついお酒を飲んでしまった。(O){"\n"}
                              昨日もついお酒を食べてしまった。(X){"\n"}
                    </Text>
                  </View>
                  ):
                  
                  (<View>
                    <Text>
                      1.  한국어로는 ‘生きていく(살아가다)/生活する(생활하다)’의 의미로 사용되는 경우{"\n"}
                          예:  こんな安月給じゃ食べていけない。{"\n"}
                                  이런 박봉으로는 살아갈 수 없다. (O){"\n"}
                                이런 박봉으로는 먹을 수 없다.   (X){"\n"}
                    </Text>
                    </View>
                  )
                }
              </View>
              <Button title='닫기' onPress={() => setVisibleModal(false)}/>
            </View>
          </View>
      </Modal>
      <StatusBar style="auto" />
      <View style={appstyles.header}>
        <Text style={appstyles.headertext}>Korean & Japanese</Text>
      </View>
      <View >
        <TextInput
          style={appstyles.input}
          placeholder="search words"
        />
        <TouchableOpacity style={appstyles.inputtext}>
        </TouchableOpacity>
      </View>
      <ScrollView style={appstyles.scrollstyle}>
        <TouchableOpacity style={appstyles.list} onPress={() => setVisibleModal(true)}>
          <Text style={appstyles.listtext}> 먹다</Text>
          <Text style={appstyles.listtext}> 食べる</Text>
        </TouchableOpacity>
        <TouchableOpacity style={appstyles.list} onPress={() => setVisibleModal(true)}>
          <Text style={appstyles.listtext}> 먹다</Text>
          <Text style={appstyles.listtext}> 食べる</Text>
        </TouchableOpacity>
        <TouchableOpacity style={appstyles.list} onPress={() => setVisibleModal(true)}>
          <Text style={appstyles.listtext}> 먹다</Text>
          <Text style={appstyles.listtext}> 食べる</Text>
        </TouchableOpacity>
        <TouchableOpacity style={appstyles.list} onPress={() => setVisibleModal(true)}>
          <Text style={appstyles.listtext}> 먹다</Text>
          <Text style={appstyles.listtext}> 食べる</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    );
}

