import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import the default styles
import "../../App.css";
const Login: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  /*the  general loginc for new registratio, login for bothe 
  admins and studentss  along side the staff and itf staff login goes 
  in this piefce of code doen here */

  // Login logic FOR administrator

  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //login logic for students login
  const [matno, setMatNo] = useState<string>("");
  const [studentpassword, setStudentPassword] = useState<string>("");
  const [dob, setDOB] = useState <string>("");
  const [gender, setGeder] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [phone, setPhone] = useState("");

  const [level, setLevel] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  //login to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Registration logic
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phonenumber, setPhoneNumber] = useState<string>("");

  // Loading simulation
  const [loading, setLoading] = useState<boolean>(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  // Assuming authenticateUser is a function that returns a promise
  authenticateUser(username, password)
    .then((response) => {
      setLoading(false);
      console.log("Login success");
    })
    .catch((error) => {
      setLoading(false);
      console.log("Login failed. Please check details and try again.", error);
    });
};


  return (
    <>
      <Tabs
        className="flex flex-col justify-center items-center mx-auto pt-6"
        selectedIndex={activeTab}
        onSelect={(index) => handleTabClick(index)}
      >
        <TabList
          className="custom-tab w-auto justify-between  rounded-md mx-auto flex flex-row   items-center
         gap-8 pb-8 border-0 outline-none focus:outline-none "
        >
          {["Admin Login", "Student Login", "ITF Official", "Register"].map(
            (tab, index) => (
              <Tab
                key={index}
                className={`custom-tab ${
                  activeTab === index
                    ? "active-tab border-b-violet-700 border-b-2"
                    : ""
                }`}
              >
                <button className="bg-gradient-to-br from-white via-white to green-950 border-2 text-black font-bold font-sans p-2 w-fixed">
                  {tab}
                </button>
              </Tab>
            )
          )}
        </TabList>

        {/*login form for admins*/}

        <TabPanel className="flex flex-col justify-center items-center p-3 mx-auto">
          {/*tab1 items*/}

          <div className="form-container w-full h-[60vh] p-2 flex flex-col justify-center items-center  gap-2 border border-opacity-20 border-black bg-gradient-to-br from-violet-950 to-red bg-opacity-40 shadow-current shadow-md rounded-md">
            <h2 className="text-white font-bold font-cur text-3xl text-center">
              ADMIN LOG IN
            </h2>
            <form 
              data-aos="flip-left"
              data-aos-easing="ease-in linear"
              data-aos-duration="2000"
              data-aos-mirror="true"
              data-aos-delay="10"
              data-aos-anchor-placement="bottom center"
              onSubmit={handleSubmit}
             
              className="admin-login-form w-[300px]  h-[40vh]  bg-white flex flex-col   gap-6  shadow-inherit shadow-md justify-center items-center    md:w-[600px]  "
            >
              <input
                type="text"
                value={username}
                id="username"
                placeholder="username"
                onChange={(event) => setUserName(event.target.value)}
                className="rounded-md border-b-violet-700 border-2 w-[70%] h-[60px] outline-none   "
                required
              />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="rounded-md border-b-violet-700 border-2 w-[70%] h-[60px] outline-none   "
                required
              />
              <button onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"} Password
              </button>

              <button
                type="submit"
                className=" border-b-2 border-b-black  text-violet-700  rounded-md tet-white font-bold text-xl  font-dm w-[20vh]"
              >
                {loading ? <b className="animate-pulse">Signing in ... </b> : <b>Sign in</b>}
              </button>
            </form>
          </div>
        </TabPanel>

        {/*login form for students*/}

        <TabPanel className="flex flex-col justify-center items-center p-3">
          <div className="form-container w-full h-[60vh] p-2 flex flex-col justify-center items-center  gap-2border border-opacity-20 border-black bg-gradient-to-br from-violet-950 to-red bg-opacity-40 shadow-current shadow-md rounded-md">
            <h2 className="text-white font-bold font-cur text-3xl text-center">
              STUDENTS LOG IN
            </h2>
            <form
              data-aos="flip-left"
              data-aos-easing="ease-in linear"
              data-aos-duration="2000"
              data-aos-mirror="true"
              data-aos-delay="10"
              data-aos-anchor-placement="bottom center"
              onSubmit={handleSubmit}
              className="admin-login-form w-[300px]  h-[40vh]  bg-white flex flex-col   gap-6  shadow-inherit shadow-md justify-center items-center    md:w-[600px]  "
            >
              <input
                type="text"
                value={matno}
                id="username"
                placeholder="Matric Number"
                onChange={(event) => setUserName(event.target.value)}
                className="rounded-md border-b-violet-700 border-2 w-[70%] h-[60px] outline-none   "
                required
              />

              <input
                type={showPassword ? "text" : "password"}
                value={studentpassword}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="rounded-md border-b-violet-700 border-2 w-[70%] h-[60px] outline-none   "
                required
              />
              <button onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"} Password
              </button>

              <button
                type="submit"
                className=" border-b-2 border-b-black  text-violet-700  rounded-md tet-white font-bold text-xl  font-dm w-[20vh]"
              >
                {loading ? <b>Signing up ... </b> : <b>Sign in</b>}
              </button>
            </form>
          </div>
        </TabPanel>

        {/*sign up form for  new registration*/}

        <TabPanel className="flex flex-col justify-center items-center p-3">
         
          <div className="form-container w-full h-[60vh] p-2 flex flex-col justify-center items-center  gap-2 border border-opacity-20 border-black bg-gradient-to-br from-violet-950 to-red bg-opacity-40 shadow-current shadow-md rounded-md">
            <h2 className="text-white font-bold font-cur text-3xl text-center">
              ITF LOG IN
            </h2>
            <form
              data-aos="flip-left"
              data-aos-easing="ease-in linear"
              data-aos-duration="2000"
              data-aos-mirror="true"
              data-aos-delay="10"
              data-aos-anchor-placement="bottom center"
              onSubmit={handleSubmit}
              className="admin-login-form w-[300px]  h-[40vh]  bg-white flex flex-col   gap-6  shadow-inherit shadow-md justify-center items-center    md:w-[600px]  "
            >
              <input
                type="text"
                value={firstname}
                id="username"
                placeholder="firstname"
                onChange={(event) => setFirstName(event.target.value)}
                className="rounded-md border-b-violet-700 border-2 w-[70%] h-[60px] outline-none   "
                required
              />

              <input
                type={showPassword ? "text" : "password"}
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="lastnname"
                className="rounded-md border-b-violet-700 border-2 w-[70%] h-[60px] outline-none   "
                required
              />
              <button onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"} Password
              </button>

              <button
                type="submit"
                className=" border-b-2 border-b-black  text-violet-700  rounded-md tet-white font-bold text-xl  font-dm w-[20vh]"
              >
                {loading ? <b>Signing up ... </b> : <b>Sign in</b>}
              </button>
            </form>
          </div>
        </TabPanel>

        <TabPanel className="flex flex-col justify-center items-center p-3">
           <div className="form-container w-full h-[60vh] p-2 flex flex-col justify-center items-center  gap-2border border-opacity-20 border-black bg-gradient-to-br from-violet-950 to-red bg-opacity-40 shadow-current shadow-md rounded-md">
            <h2 className="text-white font-bold font-cur text-3xl text-center">
              NEW REGISTRATION
            </h2>
            <form
              data-aos="flip-left"
              data-aos-easing="ease-in linear"
              data-aos-duration="2000"
              data-aos-mirror="true"
              data-aos-delay="10"
              data-aos-anchor-placement="bottom center"
              onSubmit={handleSubmit}
              className="admin-login-form w-[300px]  h-[40vh]  bg-white flex flex-row flex-wrap   gap-6  shadow-inherit shadow-md justify-center items-center    md:w-[600px]  "
            >
              <input
                type="text"
                value={firstname}
                id="username"
                placeholder="fist anme"
                onChange={(event) => setFirstName(event.target.value)}
                className="rounded-md border-b-violet-700 border-2 w-[30%] h-[60px] outline-none   "
                required
              />

              <input
                type="text"
                value={lastname}
                id="last name"
                placeholder="last name"
                onChange={(event) => setLastName(event.target.value)}
                className="rounded-md border-b-violet-700 border-2 w-[30%] h-[60px] outline-none   "
                required
              />

              <input
                type="date"
                value={dob}
                id="db"
                onChange={(event) => setDOB(event.target.value)}
                className="rounded-md border-b-violet-700 border-2 w-[30%] h-[60px] outline-none   "
                required
              />

              <select
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                className="rounded-md border-b-violet-700 border-2 w-[30%] h-[60px] outline-none   "
                required
              >
                <option disabled value="select department">
                  {" "}
                  select department{" "}
                </option>

                <option value="Computer Science"> Computer Science </option>

                <option value="Civil Engineering"> Civil Engineering</option>

                <option value="Mechanical Engineering">
                  {" "}
                  Mechanical Engineering
                </option>
                <option value="Electrical Engineering">
                  {" "}
                  Electrical Engineering
                </option>
                <option value="Chemical Engineering">
                  {" "}
                  Chemical Engineering
                </option>
                <option value="Software Engineering">
                  {" "}
                  Software Engineering
                </option>
                <option value="Biological Science"> Biological Science</option>
              </select>

              <input
                type="text"
                value={level}
                id="username"
                placeholder="Level"
                onChange={(event) => setLevel(event.target.value)}
                className="rounded-md border-b-violet-700 border-2 w-[30%] h-[60px] outline-none   "
                required
              />

              <input
                type="tel"
                value={matno}
                id="matno"
                placeholder="Matric Number"
                onChange={(event) => setMatNo(event.target.value)}
                className="rounded-md border-b-violet-700 border-2 w-[30%] h-[60px] outline-none   "
                required
              />

              <input
                type="email"
                value={email}
                id="email"
                placeholder="email"
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-md border-b-violet-700 border-2 w-[30%] h-[60px] outline-none   mr-auto px-4 "
                required
              />
              <button
                type="submit"
                className=" border-b-2 border-b-black  text-violet-700  rounded-md tet-white font-bold text-xl  font-dm w-[20vh]"
              >
                {loading ? <b>Signing up ... </b> : <b>Sign Up</b>}
              </button>
            </form>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Login;
