import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useFormStore } from '../store/useFormStore';

const Contact = () => {
  const { submitForm, isLoading } = useFormStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Validation function
  const validateForm = () => {
    // Name validation (only letters and spaces)
    if (!formData.name.trim() || !/^[A-Za-z\s]+$/.test(formData.name)) {
      toast.error('Please enter a valid name (only letters and spaces)');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    // Phone validation (exactly 10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error('Phone number must be exactly 10 digits');
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Specific validation for phone field
    if (name === 'phone') {
      // Only allow numbers and limit to 10 digits
      const phoneValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: phoneValue }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      const result = await submitForm(formData);
      if (result) {
        toast.success('Form submitted successfully!');
        // Reset form data after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        // Reset form element itself
        e.target.reset();
      }
    } catch (err) {
      console.error('Form submission failed:', err);
      toast.error('Form submission failed. Please try again.');
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-transparent mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl">

          {/* Right Side: Contact Form */}
          <div className="right w-full lg:w-[55%]">
            <fieldset className="p-6 w-full">

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input w-full  text-white focus:outline-none poppins-light"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full text-white focus:outline-none poppins-light"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input input-bordered w-full text-white focus:outline-none poppins-light"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    placeholder="Write your message..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full text-white focus:outline-none poppins-light  min-h-[100px] max-h-[200px] resize-y"
                    rows="4"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button className="btn bg-yellow-400 hover:bg-yellow-500 text-gray-900 w-full" type="submit" disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </fieldset>
          </div>

          {/* Left Side: Contact Information */}
          <div className="left w-full lg:w-[45%]">
            <div className="flex flex-col items-start">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold poppins-medium mb-2 ml-4 relative before:content-['—'] before:mr-1 before:text-emerald-500">
                Contact Us
              </p>
              <h1 className="mb-2 poppins-regular text-5xl">Let’s Chat 👋 Consultation Is Free!</h1>
              <p className="font-poppins mb-5 poppins-extralight text-lg">
                Click Aarambh, Digital marketing agency near me. We partner with B2B, B2C, D2C, and startup businesses, for brand design, user experience, and digital product design.
              </p>

              {/* Contact Links */}
              <div className="flex flex-col gap-4">
                <div className="phone-contact flex items-center gap-7">
                  <Link
                    to="#"
                    className="text-yellow-400 bg-gray-800 p-3 rounded-full hover:text-black hover:bg-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out"
                  >
                    <FaPhoneAlt className="text-3xl" />
                  </Link>
                  <div className="phone-content">
                    <p className="poppins-semibold">Phone</p>
                    <p className="poppins-light text-blue-300">+91-9967993939</p>
                  </div>
                </div>
                <div className="phone-contact flex items-center gap-7">
                  <Link
                    to="#"
                    className="text-yellow-400 bg-gray-800 p-3 rounded-full hover:text-black hover:bg-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out"
                  >
                    <MdOutlineMail className="text-3xl" />
                  </Link>
                  <div className="phone-content">
                    <p className="poppins-semibold">Email</p>
                    <p className="poppins-light text-blue-300">support@rahul.com</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;
