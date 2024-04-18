import { useState } from "react";
import "./OnBoarding.css";
import Navbar from "../../components/Navbar/Navbar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OnBoarding = () => {
  const [cookies, setCookie, removeCookie] = useCookies("[user]");
  const [formData, setFormData] = useState({
    user_id: cookies.UserId,
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: "false",
    gender_identity: "man",
    url: "",
    git_url: " ",
    linkedin_url: " ",
    class: "",
    look_for: " ",
    about: "",
    matches: [],
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("Submitted");
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8000/user", formData);
      const success = response.status === 200;
      //  console.log(response)
      if (success) navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formData);

  return (
    <>
      <Navbar minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required={true}
              value={formData.email}
              onChange={handleChange}
            />
            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />
              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>
            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="gender_identity"
                value="man"
                onChange={handleChange}
                checked={formData.gender_identity === "man"}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_identity === "woman"}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                id="more-gender-identity"
                type="radio"
                name="gender_identity"
                value="more"
                onChange={handleChange}
                checked={formData.gender_identity === "more"}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>

            <label htmlFor="show-gender">Show Gender on my Profile</label>
            <div className="multiple-input-container">
              <input
                id="show-gender"
                type="checkbox"
                name="show_gender"
                onChange={handleChange}
                checked={formData.show_gender}
              />
            </div>
            <label htmlFor="class">Class</label>
            <select className="drop_down class">
              <option value="none">Select</option>
              <option value="fe">First Year (FE)</option>
              <option value="se">Second Year (SE)</option>
              <option value="te">Third Year (TE)</option>
              <option value="be">Final Year (BE)</option>
            </select>

            <label htmlFor="looking_for">Looking For</label>
            <select className="drop_down look_for">
              <option value="none">Select</option>
              <option value="fe">Project Partners</option>
              <option value="be">Networking</option>
              <option value="be">Hackathon Teammates</option>
              <option value="be">Event Collaboration</option>
              <option value="be">Leadership Opportunities </option>
              <option value="be">Volunteer Opportunities </option>
            </select>

            {/* <label htmlFor="pre_projects">Previous Projects</label>
            <input
              id="pre_projects"
              type="text"
              name="pre_projects"
              required={true}
              placeholder="Language Learning Platform."
              onChange={handleChange}
              value={formData.pre_projects}
            /> */}

            <label htmlFor="social_media">GitHub link</label>
            <input
              type="git_url"
              name="git_url"
              id="git_url"
              onChange={open}
              required={true}
            />
            <label htmlFor="social_media">LinkedIn link</label>
            <input
              type="linkedin_url"
              name="linkedin_url"
              id="linkedin_url"
              onChange={open}
              required={true}
            />
          </section>
          <section>
            <label htmlFor="about">About me</label>
            <textarea
              rows="6"
              cols="8"
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I am a front-end developer."
              value={formData.about}
              onChange={handleChange}
            />
            <label htmlFor="about">Profile </label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container">
              {formData.url && (
                <img src={formData.url} alt="Profile Pic Preview" />
              )}
            </div>
            <input type="submit" />
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
