import React, { Component } from 'react';
import { FlatList,
        TouchableOpacity,
        Text,
        View,
        StyleSheet} from 'react-native';


class WorkCenter extends Component {
    _isMounted = false;

    constructor(props){
        super(props);
        this.state = {
            info: []
        }
    }

    componentDidMount() {
        this._isMounted = true;
        setInterval(() => this.getData(), 3000);  
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async getData() {
        try {
            let res = await fetch('http://10.0.2.2:3000/api/realtime/');
            let resText = await res.json();
            if (this._isMounted) {
                this.setState({
                    info: resText
                });
            }
        } catch(err) {
            console.error(err);
        }
    }

    FlatListItemSeparator() {
        return (
            <View style={{
                height: 2.5,
                width: '100%',
                backgroundColor: 'black'    
            }}
            />
        )
    }

    renderItem(data) {
        const txtVar = data.item.LAST_CYCLE == null ? styles.txt : 
            (parseFloat(data.item.AVG_CYCLE) < (0.95*parseFloat(data.item.STD_CYCLE)) ? styles.yellowTxt : styles.whiteTxt)
        return (
            <TouchableOpacity>
                <View style={
                    data.item.LAST_CYCLE == null ? styles.element : 
                    (parseFloat(data.item.AVG_CYCLE) > (1.015*parseFloat(data.item.STD_CYCLE)) ? styles.redElement :  
                    (parseFloat(data.item.AVG_CYCLE) < (0.95*parseFloat(data.item.STD_CYCLE)) ? styles.blackElement : styles.greenElement))
                }>
                    <Text style={[txtVar, { textAlign: 'center', fontWeight: 'bold', fontSize: 30 }]}>{data.item.WORK_CENTRE}</Text>
                    <Text style={txtVar}>
                        <Text style={styles.label}>Item Number:</Text>  {data.item.ITEMNO}{"\n"}
                        <Text style={styles.label}>Description:</Text>  {data.item.DESCRIPTION}{"\n"}
                        <Text style={styles.label}>Workorder Number:</Text>  {data.item.WORKORDER_ID}{"\n"}
                        <Text style={styles.label}>Parts to go:</Text>  {data.item.PARTSTOGO}{"\n"}
                        <Text style={styles.label}>Hours to go:</Text>  {data.item.HOURS_LEFT}{"\n"}
                        <Text style={styles.label}>Standard Cycle:</Text>  {data.item.STD_CYCLE}{"\n"}        
                        <Text style={styles.label}>Average Cycle:</Text>  {data.item.AVG_CYCLE}{"\n"}  
                        <Text style={styles.label}>Last Cycle:</Text>  {data.item.LAST_CYCLE}{"\n"} 
                        <Text style={styles.label}>Active Cavities:</Text>  {data.item.ACTCAV}{"\n"}
                        <Text style={styles.label}>Standard Cavities:</Text>  {data.item.STDCAV}{"\n"}
                        <Text style={styles.label}>Shift Up (hours):</Text>  {data.item.SHIFT_UP}{"\n"}               
                        <Text style={styles.label}>Shift Down (hours):</Text>  {data.item.SHIFT_DWN}{"\n"}
                        <Text style={styles.label}>Down Code:</Text>  {data.item.DOWN_CODE}{"\n"}
                        <Text style={styles.label}>Down Description:</Text>  {data.item.DOWN_DESCRIP}{"\n"}
                        <Text style={styles.label}>Order Number:</Text>  {data.item.ORDERNO}{"\n"}
                        <Text style={styles.label}>Priority Note:</Text>  {data.item.PRIORITY_NOTE}{"\n"}
                        <Text style={styles.label}>Machine Description:</Text>  {data.item.CNTR_DESC}{"\n"}
                    </Text>
                </View>
            </TouchableOpacity>      
        );
    }

    render () {
        return (
            <FlatList
                horizontal={false}
                data={this.state.info}
                initialNumToRender={2}
                removeClippedSubviews={false}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={item => this.renderItem(item)}
                keyExtractor={(item,index) => { 
                    return index.toString();
                }}
            />
            
        );
    }
}

const styles = StyleSheet.create({
   element: {
       backgroundColor: 'yellow'
   },
   redElement: {
       color: 'white',
       backgroundColor: 'red'
   },
   blackElement: {
       color: 'yellow',
       backgroundColor: 'black'
   },
   greenElement: {
       color: 'white',
       backgroundColor: 'green'
   },
   txt: {
       color: 'black',
       fontSize: 20
   },
   yellowTxt: {
       color: 'yellow',
       fontSize: 20
   },
   whiteTxt: {
       color: 'white',
       fontSize: 20
   },
   label: {
       fontWeight: 'bold',
       textDecorationLine: 'underline'
   }
});

export default WorkCenter;
