import "./css/Book.css"

function Book(props) {
    return (
       <main className="app-view">
            <h1 className="book-title">{props.title}</h1> 
            <img src={props.image} alt=""/>
            <p>{props.description}</p>
        </main>
    );
}

export default Book;