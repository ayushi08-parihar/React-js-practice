import React from "react";
import ReactDOM from "react-dom/client";
/*function Greeting(){
    //return <h1>Hello World</h1>;
    return <h2 id="greeting"
    className="greeting" ></h2>;
}*/

//CREATEELEMNT
/*function Greeting() {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}*/


//CREATEELEMENT USE DIV
/*const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "hello world"),
  );
};*/
//FORMATTING ,CLASSNAME
/*function Greeting() {
  return (
    <>
      <div className="HII">
        <h3>hello people</h3>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <input type=' text' name='' id='' />
    </>
  );
}*/


//NEXT COMPONENT
/*function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};*/
function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
    alt="Interesting Facts For Curious Minds"
  />
);
const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>;
};
const Author = () => <h4>Jordan Moore </h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
