import {View, Text, FlatList} from "react-native";
import SingleExpense from "./SingleExpense";
import { useNavigation } from "@react-navigation/native";


function ExpenseList({expense}) {

    let navigation = useNavigation();

    const renderItems = (itemData) => {

        const allVariables = {
            id: itemData.item.id,
            description: itemData.item.description,
            amount: itemData.item.amount,
            date: itemData.item.date
        };

        const handleChangeView = () => {
            navigation.navigate("ManageExpenses", {
                expenseId: itemData.item.id
            });
        }


        return <SingleExpense {...allVariables} onPress={handleChangeView}/>

    };


  return (
        <View> 
           <FlatList data={expense} renderItem={renderItems} keyExtractor={(item, index) => {
               return item.id;
           }}/>
        </View>
  )
}

export default ExpenseList