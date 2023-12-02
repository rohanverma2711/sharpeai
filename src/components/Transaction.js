import React, { useState } from "react";
import {  collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function Transaction() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    address: "",
    amount: 0,
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisable,setsubmitbuttondisable]=useState(false);
;
  const validateAddress = (value) => {
    if (!value) {
      return "Wallet Address is required";
    }
    if (!/^0x[a-fA-F0-9]{40}$/.test(value)) {
      return "Invalid Ethereum address format";
    }
    return true;
  };

  const handleSubmission = async () => {
    if (!values.address || !values.amount) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (values.amount < 0 || values.amount > 10000) {
      setErrorMsg("Please enter amount in a range of 0 - 10000");
      return;
    }
    const addressValidationResult = validateAddress(values.address);
    if (addressValidationResult !== true) {
      setErrorMsg(addressValidationResult);
      return;
    }

    setErrorMsg("");

    try {
       setsubmitbuttondisable(true);

      // Firestore setup and adding a document
   

      const docRef = await addDoc(collection(db, "transactions"), values);
      console.log("Document written", docRef.id)
      alert("Document written Successfully ");
      setsubmitbuttondisable(false);
    } catch (error) {
       setsubmitbuttondisable(false);
      setErrorMsg("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  return (

    <>
    <div className=" hidden sm:block w-4/5 my-4 py-4 rounded-xlg border-1  shadow-navShadow mx-auto ">
        <div className="flex flex-row justify-between mx-20">
          <div className="bg-navButton bg-opacity-40 p-1 rounded-md w-40 h-10">
            <img src="https://framerusercontent.com/images/N3k1tIRG4uhESUSkdVeg8QbCjg.png" />
          </div>
          <div className="flex flex-row pt-2">
            <a
              onClick={() => navigate("/")}
              className="mx-4 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => navigate("/transaction")}
              className="mx-4 cursor-pointer"
            >
              Transaction
            </a>
            <a
              onClick={() => navigate("/data")}
              className="mx-4 cursor-pointer"
            >
              Data
            </a>
            
          </div>
        </div>
      </div>
   
    <div className="flex lg:flex-row flex-col bg-admin-whiteSmokeLight h-screen">
      <div className="w-full mt-20 ">
        <div className=" lg:mx-96  mx-10 my-10 ">
          <p className="font-monste font-bold  text-4xl text-center mb-10">
            Transaction Values
          </p>

          <div className="bg-white p-8 rounded-2.5xl">
            <div class="space-y-6">
              <div>
                <p class="text-start  font-lato text-sm font-medium  text-gray-900">
                  {" "}
                  Address
                </p>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class=" p-3 border-1 rounded-xlg block w-full h-10 bg-admin-whiteSmokeLight"
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        address: event.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block font-lato text-sm font-medium leading-6 text-gray-900"
                  >
                    Amount
                  </label>
                </div>
                <div class="my-2 ">
                  <input
                    id="password"
                    name="password"
                    type="number"
                    autocomplete="current-password"
                    required
                    class=" p-3 border-1 rounded-xlg block w-full h-10 bg-admin-whiteSmokeLight placeholder:text-admin-whisper-1 "
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        amount: event.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <b className="  text-coralRed font-normal text-sm">{errorMsg}</b>

              <div>
                <button
                  type="submit"
                  class="flex font-montse w-full text-white  h-10 justify-center rounded-xlg bg-black px-3 py-1.5 text-base font-bold disabled:!bg-gray-300 "
                  onClick={handleSubmission}
                  disabled={submitButtonDisable}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Transaction;
