import React from "react"
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";
const Contacts = () => {
  if(false){
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors} = useForm();
  
  const serviceID = "service_ID";
  const templateID = "template_ID";
  /*const userID = "add user id" */;

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
      )
      r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {

    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
          setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error('Something went wrong ${err}'));
  }

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
      <h1>contact me</h1>
      <p>Please fill out the form to reach out to me!</p>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* Name input */}
            <div className="text-center">
            <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            ref={
              register({
                required: "please enter your name",
                
                maxLength: {
                  value: 30,
                  message: "Please enter a name with fewer than 30 characters"
                }
              })
            }
            />
            <div className="line"></div>
            </div>
            <span className="error-message">
              {errors.name && errors.name.message}
            </span>
            {/* Phone input */}
            <div className="text-center">
            <input
            id="phone"
            type="text"
            className="form-control"
            placeholder="Phone Number"
            name="phone"
            />
            <div className="line"></div>
            </div>
            {/* Email input */}
            <div className="text-center">
            <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            />
            <div className="line"></div>
            </div>
            {/* Subject input */}
            <div className="text-center">
            <input
            id="subject"
            type="text"
            className="form-control"
            placeholder="Subject"
            name="subject"
            />
            <div className="line"></div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            {/* Description*/ }
            <div className="text-center">
            <textarea
              id="description"
              type="text"
              className="form-control"
              placeholder="Please describe what you wish to talk about..."
              name="description"
            ></textarea>
            <div className="line"></div>
            </div>
            <button className="btn-main-offer contact-btn" type="submit">contact me</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}
}

export default Contacts
