import Home from "../home/Home";
import MyExpenses from "../expense/MyExpenses";
import NewExpense from "../expense/NewExpense";

export const routes = [
  {path: '/', component: Home},
  {path: '/expenses/my', component: MyExpenses},
  {path: '/expenses/new', component: NewExpense}
];
