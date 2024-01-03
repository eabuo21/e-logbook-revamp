import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import the default styles

const Login: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  // Login logic
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

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

    // Assuming somePromise is a function that returns a promise
    somePromise(inputValue)
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
        <TabList className="custom-tab w-auto rounded-md mx-auto flex flex-row justify-center items-center gap-8 pb-8 border-0 outline-none focus:outline-none">
          {["Admin Login", "User Login", "Register"].map((tab, index) => (
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
          ))}
        </TabList>

        <TabPanel className="flex flex-col justify-center items-center p-3 mx-auto">
          {/*tab1 items*/}
          <div className="form-container w-full h-[60vh] p-2 flex flex-col justify-center items-center  gap-2border border-opacity-20 border-black bg-gradient-to-br from-violet-950 to-red bg-opacity-40 shadow-current shadow-md rounded-md">
            <h2 className="text-white font-bold font-cur text-3xl text-center">
              LOG IN
            </h2>
            <form
              onSubmit={handleSubmit}
              className="admin-login-form w-[600px]  h-[40vh]  bg-white flex flex-col   gap-6  shadow-inherit shadow-md justify-center items-center   "
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
                {loading ? <b>Signing up ... </b> : <b>Sign in</b>}
              </button>
            </form>
          </div>
        </TabPanel>

        <TabPanel className="flex flex-col justify-center items-center p-3">
           <div className="form-container w-full h-[60vh] p-2 flex flex-col justify-center items-center  gap-2border border-opacity-20 border-black bg-gradient-to-br from-violet-950 to-red bg-opacity-40 shadow-current shadow-md rounded-md">
            <h2 className="text-white font-bold font-cur text-3xl text-center">
              LOG IN
            </h2>
            <form
              onSubmit={handleSubmit}
              className="admin-login-form w-[600px]  h-[40vh]  bg-white flex flex-col   gap-6  shadow-inherit shadow-md justify-center items-center   "
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
                {loading ? <b>Signing up ... </b> : <b>Sign in</b>}
              </button>
            </form>
          </div>
        </TabPanel>

        <TabPanel className="flex flex-col justify-center items-center p-3">
           <div className="form-container w-full h-[60vh] p-2 flex flex-col justify-center items-center  gap-2border border-opacity-20 border-black bg-gradient-to-br from-violet-950 to-red bg-opacity-40 shadow-current shadow-md rounded-md">
            <h2 className="text-white font-bold font-cur text-3xl text-center">
              LOG IN
            </h2>
            <form
              onSubmit={handleSubmit}
              className="admin-login-form w-[600px]  h-[40vh]  bg-white flex flex-col   gap-6  shadow-inherit shadow-md justify-center items-center   "
            >
              <input
                type="text"
                value={firstname}
                id="username"
                placeholder="username"
                onChange={(event) => setFirstName(event.target.value)}
                className="rounded-md border-b-violet-700 border-2 w-[70%] h-[60px] outline-none   "
                required
              />

                <input
                type="text"
                value={lastname}
                id="username"
                placeholder="username"
                onChange={(event) => setLastName(event.target.value)}
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
