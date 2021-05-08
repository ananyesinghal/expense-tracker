import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransationList from './components/TransationList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransationList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
