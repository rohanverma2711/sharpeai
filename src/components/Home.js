import React from 'react'
import Footer from './Footer'
import { Resources } from '../Resources'

function Home() {
  return (
    <>
    <div className=" hidden sm:block w-4/5 my-4 py-4 rounded-xlg border-1  shadow-navShadow mx-auto ">
        <div className="flex flex-row justify-between mx-20">
          <div className='bg-navButton rounded-md w-40 h-10'>
            <img src="https://framerusercontent.com/images/N3k1tIRG4uhESUSkdVeg8QbCjg.png" />
          </div>
          <div className="flex flex-row pt-2">
            
            <a className="mx-4">Transaction</a>
            <a className="mx-4">Data</a>
            
          </div>
          <div>
            <div className="border-navButton text-navButton border-2 rounded-md">
              <p className="py-2 px-8">Sign In</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row mx-auto w-64/100 my-20">
        <span className="text-4.5xl font-semibold text-heading">
          Self serve infrastructure platform for{" "}
          <span className="text-4.5xl font-semibold text-navButton">
            scaling teams
          </span>{" "}
        </span>
      </div>

      <div className="flex flex-row w-8.5/12 mx-auto justify-between ">
        <div className="shadow-tileShadow flex flex-row rounded-2xl p-4 w-120">
          <div className=" h-18 w-18 rounded-2xl flex  justify-center items-center shadow-custom">
            <img className="w-10 h-10" src={Resources.images.infrastructure} />
          </div>
          <div className="items-center justify-center my-auto ml-5">
            <p className="text-2xl font-semibold text-tileColortext text-left">
              Infrastructure
            </p>
            <p className="text-base font-normal text-tileSubText text-left">
              Automated Cloud Infrastructure Workflow
            </p>
          </div>
        </div>
        <div className="shadow-tileShadow flex flex-row rounded-2xl p-4 w-120">
          <div className=" h-18 w-18 rounded-2xl flex  justify-center items-center shadow-custom">
            <img className="w-10 h-10" src={Resources.images.cybersecurity} />
          </div>
          <div className="items-center justify-center my-auto ml-5">
            <p className="text-2xl font-semibold text-tileColortext text-left">
              Security
            </p>
            <p className="text-base font-normal text-tileSubText text-left">
              Modern Secure Infrastructure Approach
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-8.5/12 mx-auto justify-between my-15">
        <div className="shadow-tileShadow flex flex-row rounded-2xl p-4 w-120">
          <div className=" h-18 w-18 rounded-2xl flex  justify-center items-center shadow-custom">
            <img className="w-10 h-10" src={Resources.images.nueral} />
          </div>
          <div className="items-center justify-center my-auto ml-5">
            <p className="text-2xl font-semibold text-tileColortext text-left">
              Networking
            </p>
            <p className="text-base font-normal text-tileSubText text-left">
              Flexible Secure Application Connectivity
            </p>
          </div>
        </div>
        <div className="shadow-tileShadow flex flex-row rounded-2xl p-4 w-120 ">
          <div className=" h-18 w-18 rounded-2xl flex  justify-center items-center shadow-custom">
            <img className="w-10 h-10" src={Resources.images.development} />
          </div>
          <div className="items-center justify-center my-auto ml-5">
            <p className="text-2xl font-semibold text-tileColortext text-left">
              Applications
            </p>
            <p className="text-base font-normal text-tileSubText text-left">
              Automate Application Deployment for Agility
            </p>
          </div>
        </div>
      </div>
      <div className="bg-newsLetter mt-20 rounded-xxlg">
            <div className=" flex justify-center items-center py-10">
              <img src={Resources.images.letter} />
            </div>
            <div className="text-4.5xl font-semibold mt-5 text-center leading-15">
              <p className="text-newLetterText mx-52">
                Subscribe To Our Newsletter & Get The Coupon Code.
              </p>
            </div>
            <div className="text-xl font-normal py-10 leading-9">
              <p className="text-tileColortext">
                All your information is completely confidential
              </p>
            </div>

            <div className="flex flex-row w-1/2 mx-auto  pb-24 mt-5">
              <input
                type="email"
                id="email"
                class="mr-3 w-8.75/12 bg-gray-50 border leading-10 border-gray-300 text-gray-900 text-xl rounded-xlg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type your mail"
                required
              ></input>

              <button
                type="submit"
                class="w-3.25/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extrabold rounded-xlg text-2xl  sm:w-auto px-10 py-5 text-center "
              >
                Subscribe
              </button>
            </div>
          </div>
      <Footer/>
      </>
  )
}

export default Home