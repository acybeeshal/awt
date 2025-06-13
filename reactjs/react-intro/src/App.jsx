// const Greet = (props) => {
//   const { name } = props;
//   console.log("hel")
//   return <h1>Hello,{props.name} </h1>
// };
// const obj = {
//   name :"string"
// }
// const {name}=obj

// const Quote = (props)=>{
//   return(
//     <div>
//       <h1>{props.quotes}</h1>
//       <p>{props.author}</p>

//     </div>
//   )
// }


// const App = () => {

//   function Quotes()
//   const[quotes,setQuotes]=useState([
//     "stay hungry"
//   ]
//   )
//   return (
//   <>   
//     <Greet name="he" ></Greet>
//     <Quote quotes ="this is a quotes" author="this is a author
//     "> </Quote>
//      </>
//   )
// };

// const quotes =[firstQuote];
// function displayQuote(quote){
//   return <h2 key={quote.id}>{quote.quote}</h2>;
// }

// function QuotesApp(){
//   return(
//     <div>
//       <h1>Quotes</h1>
//       {quotes.map(displayQuote)}
//     </div>
//   )
// };

import { useState } from "react";

function QuotesApp() {
  const [quotes,setQuotes]=useState([]);
  return (
    <div>
      <h1>Quotes</h1>
      <form onSubmit={(event)=>{
        event.preventDefault();

        const formData=new FormData(event.target);
        const quote={
          id:quotes.length +1,
          quote:formData.get('quote'),
        };
        setQuotes([...quotes,quote]);
      }}>
        
        <input type="text" placeholder="Add a quote" />
        <button type="submit">Add Quote</button>
      </form>
    </div>
  )
}
export default QuotesAppero
hero
;