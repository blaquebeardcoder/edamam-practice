import './App.css';
import Header from "./components/Header";
import Book from "./components/Book";
import Footer from "./components/Footer";

function App() {
  const book1 = {
    title: "Algorithms",
    image: "Sample Image",
    description: "This is a description",
  };
  const book2 = {
    title: "Mathematics",
    image: "Sample Image2",
    description: "This is a description",
  };
  return (
    <div className="App">
      <Header />
      <Book
        name="The Power of Now"
        image="https://images-na.ssl-images-amazon.com/images/I/41cbPheOxmL._SX323_BO1,204,203,200_.jpg"
        description="Chocolate dessert topping candy sugar plum cupcake macaroon croissant oat cake. Wafer liquorice halvah muffin I love oat cake. Muffin marzipan marzipan. Marshmallow croissant cheesecake gingerbread cheesecake. I love candy canes macaroon halvah chocolate I love caramels jelly-o."
      />

      <Book 
        name="The Alchemist"
        image="https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL.jpg"
        description="Cupcake ipsum dolor sit amet muffin I love. Wafer chocolate powder sesame snaps candy canes dragée soufflé I love bear claw. Lollipop pastry I love. Sweet roll cotton candy cake caramels jelly lemon drops. Biscuit jujubes macaroon powder sugar plum I love dragée. Bear claw croissant chocolate bar bear claw danish marzipan macaroon. Chupa chups I love bonbon I love cupcake tootsie roll." 
        />
      <Footer />
    </div>
  );
}

export default App;
