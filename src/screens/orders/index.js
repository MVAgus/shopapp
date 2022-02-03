import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { deleteOrder, getOrders } from "../../store/actions/order.action";
import { useDispatch, useSelector } from "react-redux";

import OrderItem from "../../components/order-item";
import styles from "./styles";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    const handleDeleteOrder = (id) => {
        console.warn(id)
        dispatch(deleteOrder(id));
    }
    const renderItems = (data) => (
        <OrderItem item={data.item} onDelete={handleDeleteOrder}/>
    )
    useEffect(() => {
        dispatch(getOrders());
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={orders}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Orders;