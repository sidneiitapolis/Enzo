import react from "react";
import Alert from "react-bootstrap/Alert";
  
const App = () => {
  return (
    <div>
      
  
      <Alert variant="danger" >
        <Alert.Heading>
          Esse contato já existe, ou algum campo está em branco
        </Alert.Heading>
      </Alert>
  
    </div>
  );
};
  
export default App;