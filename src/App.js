import './App.css';
import React,{useState} from 'react';

function App() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount!");
    }else{
      var options = {
        key: "rzp_test_60IfVARzkVt9iN",
        key_secret:"nPoyzM57wo1KGIUERbIQgEjJ",
        amount:100* amount,
        currency:"INR",
        name:"Task Project",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"ujjwal rai",
          email:"raiujjwal2003@gmail.com",
          contact:"9570580514"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <>
     <h2>Razorpay Payment Integration Gateway</h2>
  
    <div className="App">
     <br/>
     
     <input type="number" placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} className='input-field' />
     <br/><br/>
     <button onClick={handleSubmit} className='pay-btn'>Pay now</button>
    </div>

    </>
  );
}

export default App;