import {View, Text} from "react-native";
import ExpenseOverview from "../ExpenseOutput/ExpenseOverview";
import ExpenseContext from "../store/ExpenseContext";
import { useContext, useState } from "react/cjs/react.development";
import mockData from "../data/mockdata";
import { returnMilli } from "../utils/date";
import { useEffect } from "react/cjs/react.development";
import { fetchExpense } from "../utils/http";
import Loading from "../UI/Loading";
import Error from "../UI/Error";

function RecentExpenses() {

  // let {expenses} = useContext(ExpenseContext);

  let {expenses, setExpenses} = useContext(ExpenseContext);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();

  useEffect(() => {
    async function getExpense () {
      
      setIsLoading(true);

      try { 

        let expenses = await fetchExpense();

        setExpenses(expenses);


      }  catch (error) {
        setError("Fail to fetch. Please fetch again!");
      };

      setIsLoading(false);
    };

    getExpense();
  },[]);
  

  

  let recentExpenses = expenses.filter((expense) => {
      let today = new Date();

      let date7daysAgo = returnMilli(today, 7);

      return (expense.date >= date7daysAgo) && (expense.date <= today);
  });

  const handleError = () => {
    setError(null);
  };

  if (error && isLoading === false) {
    return <Error message={error} onConfirm={handleError}/>
  }


  if (isLoading) {
    return <Loading />
  }
  

  
  return (
    <ExpenseOverview expenses={recentExpenses} expensePeriod={"Last 7 days"} fallBackText={"No registered expenses for 7 days!"}/>
  )
}

export default RecentExpenses