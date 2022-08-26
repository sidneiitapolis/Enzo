import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Rodape() {
  return (
    <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>--------------------------</Card.Title>
        <Card.Text>
          Lista de Contatos para fins de treinamento em React
        </Card.Text>
        <a href="https://www.youtube.com/watch?v=G1KKcs7KUHA"><Button variant="primary" >ACDC Rock</Button></a>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}

export default Rodape;