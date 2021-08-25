import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_GOeybdYVc92VnRzyoJLEf";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! You will be contacted as soon as possible"
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>How can i help you?</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-mid-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter your name with fewer than 20 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>

              {/*PHONE INPUT */}
              <div className="text-center">
                <input
                  id="phone"
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  aria-invalid={errors.phone ? "true" : "false"}
                  {...register("phone", {
                    required: "please add you phone number",
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.phone && errors.phone.message}
                </span>
              </div>

              {/*EMAIL INPUT */}
              <div className="text-center">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "please provide your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/*SUBJECT INPUT */}

              <div className="text-center">
                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  aria-invalid={errors.subject ? "true" : "false"}
                  {...register("subject", {
                    required: "You forgot to tell me what!",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>

            <div className="col-md-6 col-xs-12">
              {/*DESCRIPTION  */}
              <div className="text-center">
                <textarea
                  id="description"
                  type="text"
                  className="form-control"
                  placeholder="message"
                  name="description"
                  aria-invalid={errors.description ? "true" : "false"}
                  {...register("description", {
                    required: "A sentence would be nice!",
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>

              <button className="btn-main-offer contact-btn" type="submit">
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
