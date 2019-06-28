import React, { Component } from 'react';
import { FlatList,
    StyleSheet} from 'react-native';


class WorkCenter extends Component {
    constructor(props){
        super(props);
        this.state = {
            info: []
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch('/api/realtime/' + this.props.machine);
            let resText = await res.text();
            this.setState({
                info: resText.map(item = ({
                    center: item.WORK_CENTER,
                    itemno: item.ITEMNO,
                    descrip: item.DESCRIPTION,
                    workorder: item.WORKORDER_ID,
                    partstogo: item.PARTSTOGO,
                    hours: item.HOURS_LEFT,
                    stdcycle: item.STD_CYCLE,
                    avgcycle: item.AVG_CYCLE,
                    lastcycle: item.LAST_CYCLE,
                    actcav: item.ACTCAV,
                    stdcav: item.STDCAV,
                    shiftup: item.SHIFT_UP,
                    shiftdwn: item.SHIFT_DWN,
                    down: item.DOWN_CODE,
                    downdescrip: item.DOWN_DESCRIP,
                    orderno: item.ORDERNO
                }))
            });
        } catch(err) {
            console.error(err);
        }
    }

    render () {
        return (
            <FlatList
                horizontal={true}
                data={this.state.info}
                renderItem={({ item }) => {
                     <Text style={styles.element}>{item.center} {item.itemno} {item.descrip} {item.workorder}~{"\n"}
                            {item.partstogo} {item.stdcycle} {item.avgcycle} {item.lastcycle}</Text>     
                }}
                keyExtractor={(item,index) => item.id}

            />
        );
    }
}

const styles = StyleSheet.create({
   element: {
       color: 'black',
       backgroundColor: 'yellow'
   }
});

export default WorkCenter;
