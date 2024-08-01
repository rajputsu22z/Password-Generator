import { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { LC, NC, SC, UC } from "./Data/Passchar";

function App() {
   let [upercase, setUperCase] = useState(false);
   let [lowercase, setLowercase] = useState(false);
   let [numbers, setNumbers] = useState(false);
   let [symbols, setSymbols] = useState(false);
   let [plength, setPlength] = useState(10);
   let [password, setPassword] = useState("");

   const generatePassword = () => {
      if (upercase || lowercase || numbers || symbols) {
         let finalPassword = "";
         let charSet = "";
         if (upercase) charSet += UC;
         if (lowercase) charSet += LC;
         if (numbers) charSet += NC;
         if (symbols) charSet += SC;
         for (let i = 0; i < plength; i++) {
            finalPassword += charSet.charAt(
               Math.floor(Math.random() * charSet.length)
            );
         }

         toast.success("Password Generated Successfully...");
         setPassword(finalPassword);
      } else {
         toast.error("Please Select One Checkbox...");
      }
   };
   let CopyPassword = () => {
       if(password.length >5){
          navigator.clipboard.writeText(password);
          toast.info("Password Copied Successfully...");
          document.getElementById("btn").style.backgroundColor = "green";
       }
       else{
          toast.error("Please Genrate the password...");
       }
   };
  

   return (
      <>
         <div className="App">
            <ToastContainer />
            <h2>Password Genrator</h2>
            <div className="password-div">
               <input
                  type="text"
                  readOnly
                  value={password}
                  onChange={() => setPassword()}
               />
               <button id="btn" onClick={CopyPassword}>Copy</button>
            </div>
            <div className="passwordBox-lable">
               <label htmlFor="" value={plength}>
                  {plength}
               </label>
               <input
                  type="range"
                  max={20}
                  min={7}
                  name="range"
                  value={plength}
                  onChange={(e) => setPlength(e.target.value)}
               />
            </div>
            <div className="upercase normal-div">
               <label htmlFor="">Include UperCase latter</label>
               <input
                  type="checkbox"
                  name="upper"
                  checked={upercase}
                  onChange={() => setUperCase(!upercase)}
               />
            </div>
            <div className="lowcase normal-div">
               <label htmlFor="">Include LowerCase latter</label>
               <input
                  type="checkbox"
                  name="lower"
                  checked={lowercase}
                  onChange={() => setLowercase(!lowercase)}
               />
            </div>
            <div className="numbers normal-div">
               <label htmlFor="">Include Numbers</label>
               <input
                  type="checkbox"
                  name="numbers"
                  checked={numbers}
                  onChange={() => setNumbers(!numbers)}
               />
            </div>
            <div className="symbols normal-div">
               <label htmlFor="">Include Symbols</label>
               <input
                  type="checkbox"
                  name="symbols"
                  checked={symbols}
                  onChange={() => setSymbols(!symbols)}
               />
            </div>
            <div className="btn-gen normal-div">
               <button onClick={generatePassword}>Generate Password</button>
            </div>
         </div>
      </>
   );
}

export default App;
