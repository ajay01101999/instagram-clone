import './App.css';
import ContentArea from './Components/ContentArea';
import Header from './Components/Header';
import UploadFiles from './Components/UploadFiles';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentArea />
      <UploadFiles />
    </div>
  );
}

export default App;
