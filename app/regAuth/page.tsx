"use client"
import { useState } from 'react';
import '@assets/css/registration.css';
import Image from 'next/image';
import logo from '../../public/Svgs/Auth_logo.svg';
import Link from 'next/link';
import regImg2 from '../../public/Svgs/Auth_img2.svg';
import strike from '../../public/Svgs/Auth_strike.svg';
import { styleText } from 'util';
import { register } from 'module';


// Define TypeScript interface for form data
interface StudentFormData {
  nameOfSchool: string;
  location: string;
  phoneNumber: string;
  coachFullName: string;

}




const StudentRegistrationForm: React.FC = () => {
  // Form state management
  const [formData, setFormData] = useState<StudentFormData>({
    nameOfSchool: '',
    location: '',
    phoneNumber: '',
    coachFullName: '',

  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    const isValid = Object.values(formData).every(value => value.trim() !== '');

    if (isValid) {
      console.log('Submitted Form Data:', formData);
      // TODO: Implement API submission logic
      alert('Registration Successful!');
    } else {
      alert('Please complete all fields');
    }
  };



  return (
    <div className= "reg_section">
      <div className= "reg_row_1"><Image src={regImg2} alt='' /> </div>

      <div className="reg_row_2">
        <div className= "reg_row_col_1">
          <div className= "reg_top_text">
            <div>Welcome!</div>
            <div className='flex'>
              <Image className= "logo" src={logo} alt='' />
              <div className= "logo_group">
                <div >
                  {/* <Image className= {styles.strike} src={strike} alt='' /> */}
                </div>
              </div>
            </div>

          </div>
          <div className= "reg_middel_text">Register your pupils here</div>
        </div>


        <div className= "formContainer">
          <form onSubmit={handleSubmit} className= "registrationForm">

            <div className= "regAuth_title"> School Information</div>
            {/* Name of School Input */}
            <div className= "formGroup">
              <label htmlFor="nameOfSchool">Name of School</label>
              <input
                type="text"
                id="nameOfSchool"
                name="nameOfSchool"
                value={formData.nameOfSchool}
                onChange={handleChange}
                placeholder="Enter school name"
                required
              />
            </div>
            <div className= "reg_input_col">
              {/* School location */}
              <div className= "formGroup">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                  required
                />
              </div>


              {/* Phone Number Input */}
              <div className= "formGroup">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="000 0000 0000"
                  pattern="[0-9]{1}"
                  required
                />
              </div>
            </div>


            <div className= "regAuth_title"> Coach/Tutor's Information</div>

            {/* Coach's Input */}
            <div className= "formGroup">
              <label htmlFor="coachFullName">Full Name</label>
              <input
                type="text"
                id="coachFullName"
                name="coachFullName"
                value={formData.coachFullName}
                onChange={handleChange}
                placeholder="Enter Name"
                required
              />
            </div>
            {/* coach Number Input */}
            <div className= "formGroup">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="000 0000 0000"
                pattern="[0-9]{1}"
                required
              />
            </div>









            {/* Submit Button */}
            <Link href="#">
           <button type="submit" className= "submitButton">
              Register
            </button>
            </Link>
          </form>
        </div>

      </div>

    </div>
  )
}


export default StudentRegistrationForm;












