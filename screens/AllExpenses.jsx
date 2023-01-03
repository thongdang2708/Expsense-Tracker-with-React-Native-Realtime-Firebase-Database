import {View, Text} from "react-native";
import ExpenseOverview from "../ExpenseOutput/ExpenseOverview";
import mockData from "../data/mockdata";
import ExpenseContext from "../store/ExpenseContext";
import { useContext } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.development";
import { fetchExpense } from "../utils/http";

function AllExpenses() {

  let {expenses, setExpenses} = useContext(ExpenseContext);
  
  useEffect(() => {
    async function getExpense () {
      
      let expenses = await fetchExpense();

      setExpenses(expenses);

    }
    
    getExpense();
  },[]);


  return (<ExpenseOverview expenses={expenses} expensePeriod={"Total"} fallBackText={"No registered expenses!"}/>)

}

export default AllExpenses