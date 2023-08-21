import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import TabsDemo from './components/TabsDemo';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Table /> */}
      <TabsDemo />
      <Footer />
    </div>
  );
}
export default App;


