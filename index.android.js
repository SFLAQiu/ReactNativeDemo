/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

class MyView extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View>
        <text>sb....</text>
      </View>
    );
  }
}

class ReactNativeDemo extends Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      responseStr:"test",
      datas:ds.cloneWithRows([{"Id":60,"Title":"南极人儿童保暖男女内衣","NowPrice":49.00,"OldPrice":80.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902454143)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i4/2213067352/TB27YSegXXXXXbuXpXXXXXXXXXX_!!2213067352.jpg_60x60q90.jpg","IsToday":false,"Discount":6.10,"BuyUrl":"http://s.click.taobao.com/KAkgagx","IsHot":true,"Status":0},{"Id":62,"Title":"小牛奔奔宝宝睡袋秋冬款","NowPrice":88.00,"OldPrice":198.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902454143)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i3/TB1avLeJpXXXXaoXXXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg","IsToday":false,"Discount":4.40,"BuyUrl":"http://s.click.taobao.com/HT1KQgx","IsHot":true,"Status":0},{"Id":65,"Title":"月宝宝松口男童女童中筒袜子","NowPrice":12.80,"OldPrice":60.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902808103)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i2/2153335544/TB2reXUfVXXXXcgXXXXXXXXXXXX_!!2153335544.jpg_60x60q90.jpg","IsToday":false,"Discount":2.10,"BuyUrl":"http://s.click.taobao.com/BSKJQgx","IsHot":true,"Status":0},{"Id":66,"Title":"婴儿帽子秋冬新生儿胎帽","NowPrice":13.00,"OldPrice":69.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902454143)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/bao/uploaded/i2/TB1oi08KFXXXXXjXFXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg","IsToday":false,"Discount":1.90,"BuyUrl":"http://s.click.taobao.com/4zpIQgx","IsHot":true,"Status":0},{"Id":67,"Title":"HappyPrince韩国秋冬款韩版","NowPrice":56.00,"OldPrice":112.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902805997)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i1/1656919210/TB2UkjpXVXXXXbhXXXXXXXXXXXX_!!1656919210.jpg_60x60q90.jpg","IsToday":false,"Discount":5.0,"BuyUrl":"http://s.click.taobao.com/afYIQgx","IsHot":true,"Status":0},{"Id":76,"Title":"婴儿连体衣冬季新款夹棉衣服","NowPrice":89.00,"OldPrice":288.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902454143)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i2/1812891837/TB2Y515epXXXXbtXXXXXXXXXXXX_!!1812891837.jpg_60x60q90.jpg","IsToday":false,"Discount":3.10,"BuyUrl":"http://s.click.taobao.com/RgJDQgx","IsHot":true,"Status":0},{"Id":77,"Title":"韩版宝宝婴儿冬天男童女童护耳帽","NowPrice":16.80,"OldPrice":52.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902454143)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i4/TB1fG6zGFXXXXXDXXXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg","IsToday":false,"Discount":3.20,"BuyUrl":"http://s.click.taobao.com/A5jCQgx","IsHot":true,"Status":0},{"Id":78,"Title":"初生婴儿棉衣服秋冬季连体","NowPrice":79.00,"OldPrice":159.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902454143)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/bao/uploaded/i3/TB1Cq.mKpXXXXbiXXXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg","IsToday":false,"Discount":5.00,"BuyUrl":"http://s.click.taobao.com/xmaCQgx","IsHot":true,"Status":0},{"Id":79,"Title":"冬季珊瑚绒男婴儿冬装","NowPrice":79.00,"OldPrice":259.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902454143)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i3/1611608519/TB2_RzVeFXXXXaEXXXXXXXXXXXX_!!1611608519.jpg_60x60q90.jpg","IsToday":false,"Discount":3.10,"BuyUrl":"http://s.click.taobao.com/mHJCQgx","IsHot":true,"Status":0},{"Id":82,"Title":"婴尚男童女宝宝婴儿衣服","NowPrice":29.80,"OldPrice":98.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902454143)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/bao/uploaded/i4/TB1ek2EKpXXXXceXpXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg","IsToday":false,"Discount":3.00,"BuyUrl":"http://s.click.taobao.com/hDBBQgx","IsHot":true,"Status":0},{"Id":98,"Title":"齐齐熊2015新款婴儿衣服秋冬童装","NowPrice":49.00,"OldPrice":168.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902803560)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i1/1793684315/TB2jzgzeFXXXXcBXXXXXXXXXXXX_!!1793684315.jpg_60x60q90.jpg","IsToday":false,"Discount":2.90,"BuyUrl":"http://s.click.taobao.com/M3V7Qgx","IsHot":true,"Status":0},{"Id":99,"Title":"齐齐熊 婴儿衣服宝宝纯棉秋","NowPrice":55.00,"OldPrice":156.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1448902810030)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i2/1793684315/TB2nZx2eVXXXXXDXXXXXXXXXXXX_!!1793684315.jpg_60x60q90.jpg","IsToday":false,"Discount":3.50,"BuyUrl":"http://s.click.taobao.com/1tR7Qgx","IsHot":true,"Status":0},{"Id":139,"Title":"男童宝宝棉衣秋冬装棒球服","NowPrice":138.00,"OldPrice":588.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1449069108293)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i5/TB1vbVRJFXXXXbaXFXXYXGcGpXX_M2.SS2_60x60q90.jpg","IsToday":false,"Discount":2.30,"BuyUrl":"http://s.click.taobao.com/MLByGgx","IsHot":true,"Status":0},{"Id":140,"Title":"齐齐熊 新款冬季装婴儿套装","NowPrice":69.00,"OldPrice":207.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1449069241407)\/","GoodId":0,"ImgUrl":"http://gaitaobao3.alicdn.com/tfscom/i3/1793684315/TB2C_1rgXXXXXXaXXXXXXXXXXXX_!!1793684315.jpg_60x60.jpg","IsToday":false,"Discount":3.30,"BuyUrl":"http://s.click.taobao.com/KSnxGgx","IsHot":true,"Status":0},{"Id":141,"Title":"南极人儿童保暖内衣套装","NowPrice":59.90,"OldPrice":189.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1449069294557)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i3/1645554846/TB2670EgpXXXXbeXXXXXXXXXXXX_!!1645554846.jpg_60x60q90.jpg","IsToday":false,"Discount":3.20,"BuyUrl":"http://s.click.taobao.com/p4exGgx","IsHot":true,"Status":0},{"Id":142,"Title":"南极人童装秋冬装婴儿内衣套","NowPrice":55.00,"OldPrice":158.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1449069359170)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i1/11491028289283784/T1BOJ_FXxdXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg","IsToday":false,"Discount":3.50,"BuyUrl":"http://s.click.taobao.com/0wTxGgx","IsHot":true,"Status":0},{"Id":143,"Title":"南极人婴儿内衣加厚套装","NowPrice":55.00,"OldPrice":199.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1449069455560)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i2/585567071/TB2XiPWfXXXXXbfXXXXXXXXXXXX_!!585567071.jpg_60x60q90.jpg","IsToday":false,"Discount":2.80,"BuyUrl":"http://s.click.taobao.com/HpExGgx","IsHot":true,"Status":0},{"Id":144,"Title":"优奇婴儿内衣加厚套装保暖衣","NowPrice":49.00,"OldPrice":145.00,"Type":1,"SourceMall":2,"AddDateTime":"\/Date(1449069505250)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i3/735147176/TB2NfnpdFXXXXbMXXXXXXXXXXXX_!!735147176.jpg_60x60q90.jpg","IsToday":false,"Discount":3.40,"BuyUrl":"http://s.click.taobao.com/BNDxGgx","IsHot":true,"Status":0},{"Id":145,"Title":"婴儿帽子春秋冬款0-6-18个月新生幼儿","NowPrice":5.80,"OldPrice":17.00,"Type":1,"SourceMall":1,"AddDateTime":"\/Date(1449242496630)\/","GoodId":0,"ImgUrl":"https://gd3.alicdn.com/bao/uploaded/i3/TB1mkxWJVXXXXbiXpXXXXXXXXXX_!!0-item_pic.jpg_60x60.jpg_.webp","IsToday":false,"Discount":3.40,"BuyUrl":"http://s.click.taobao.com/p8X18gx","IsHot":true,"Status":0},{"Id":101,"Title":"好奇银装干爽舒适婴儿纸尿裤","NowPrice":139.00,"OldPrice":199.00,"Type":2,"SourceMall":2,"AddDateTime":"\/Date(1448902454143)\/","GoodId":0,"ImgUrl":"https://img.alicdn.com/imgextra/i4/685092642/TB24FytgFXXXXapXXXXXXXXXXXX_!!685092642.jpg_60x60q90.jpg","IsToday":false,"Discount":7.00,"BuyUrl":"http://s.click.taobao.com/2vU6Qgx","IsHot":true,"Status":0}]),
    };
  }
  myListView(rowData){
    //<Text>{rowData.Id+":"+rowData.Title}</Text>;
    return (
      <View style={{flexDirection: 'row',marginTop:5}}>
          <View style={styles.list_left}>
            <Image
              style={{width: 120,height: 80,}}
              source={{uri: rowData.ImgUrl}}
            />
          </View>
          <View style={styles.list_right}>
            <Text>{rowData.Id+":"+rowData.Title}</Text>
          </View>
        </View>
      );
  }
  componentWillMount(){
      var t=this;
      // fetch("",{
      //    method: 'GET',
      // }).then(function(respon) {
      //     t.setState({responseStr:respon.status});
      // });  
      // fetch('http://www.fanhuan.com/')
      // .then((response) => response.text())
      // .then((responseText) => {
      //   //console.log(responseText);
      //   t.setState({responseStr:responseText});
      // })
      // .catch((error) => {
      //    t.setState({responseStr:error});
      // });
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.responseStr}</Text>
        <ListView
          dataSource={this.state.datas}
          renderRow={(rowData) => this.myListView(rowData)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  list_left:{
    flex:1
  },
  list_right:{
    flex:2
  },
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
