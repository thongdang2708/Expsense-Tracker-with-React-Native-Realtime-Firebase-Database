
import axios from "axios";

const BACKEND_URL = "https://react-native-course-4922d-default-rtdb.firebaseio.com";

//Add Expense

export const postExpense = async (expenseData) => {

    let response = await axios.post(BACKEND_URL + "/expenses.json", expenseData);

    let id = response.data.name;

    return id;
};

//Fetch expenses

export const fetchExpense = async () => {

    let response = await axios.get(BACKEND_URL + "/expenses.json");

    let data = response.data;

    let expenses = [];

    for (const key in data) {
        let newObj = {
            id: key,
            amount: data[key].amount,
            date: new Date(data[key].date),
            description: data[key].description
        }

        expenses.push(newObj);
    };

    return expenses;
    
};

//Update expense

export const putExpense = (id, expenseData) => {
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

//Delete expense

export const removeExpense = (id) => {

    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}