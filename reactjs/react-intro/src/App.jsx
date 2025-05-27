const Greet = (props) => {
  const { name } = props;
  console.log("hel")
  return <h1>Hello,{props.name} </h1>
};
const obj = {
  name :"string"
}
const {name}=obj

const Quote = (props)=>{
  return(
    <div>
      <h1>{props.quotes}</h1>
      <p>{props.author}</p>

    </div>
  )
}

const App = () => {

  function Quotes()
  const[quotes,setQuotes]=useState([
    "stay hungry"
  ]
  )
  return (
  <>   
    <Greet name="he" ></Greet>
    <Quote quotes ="this is a qutoes" author="this is a author
    "> </Quote>
     </>
  )
};

export default App;