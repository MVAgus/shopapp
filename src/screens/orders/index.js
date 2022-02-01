import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { ORDERS } from '../../utils/data/orders';
import OrderItem from "../../components/order-item";
import React from "react";
import styles from "./styles";

const Orders = () => {
    const items = ORDERS;


    const renderItems = (data) => (
        <OrderItem item={data.item} />
    )
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Orders;