"use client"
import { useState } from 'react';
import styles from '../Style/registrationPage.module.css';
import Image from 'next/image';
import logo from '../../public/Svgs/Auth_logo.svg';
import regImg from '../../public/Svgs/Auth_image1.svg';
import strike from '../../public/Svgs/Auth_strike.svg';
import { styleText } from 'util';
import { register } from 'module';


// Define TypeScript interface for form data
interface StudentFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  sex: string;
  class: string;
  category: string;
}

// Predefined options for dropdowns
const CLASS_OPTIONS = [
  'Elementary 1',
  'Elementary 2',
  'Elementary 3',
  'Elementary 4',
  'Elementary 5',
  'Elementary 6',
  'JSS 1',
  'JSS 2',
  'JSS 3',
  'SSS 1',
  'SSS 2',
  'SSS 3',
];

const CATEGORY_OPTIONS = [
  'Early Speller ( Pry 1 & 2)',
  'Upper Primary (Primary 3 - 6)',
  'Junior Secondary (JSS 1 - 3)',
  'Senior Secondary (SSS 1 -3)',
];

const SEX_OPTIONS = [
  'Male',
  'Female',
  'Other'
];

const StudentRegistrationForm: React.FC = () => {
  // Form state management
  const [formData, setFormData] = useState<StudentFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    sex: '',
    class: '',
    category: ''
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
    <div className={styles.reg_section}>
      <div className={styles.reg_row_1}><Image src={regImg} alt='' /> </div>

      <div className={styles.reg_row_2}>
        <div className={styles.reg_row_col_1}>
          <div className={styles.reg_top_text}>
            <div>Welcome!</div>
            <div className='flex'>
                <Image className={styles.logo} src={logo} alt='' />
              <div className={styles.logo_group}>
                <div >
                  {/* <Image className= {styles.strike} src={strike} alt='' /> */}
                </div>
              </div>
            </div>

          </div>
          <div className={styles.reg_middel_text}>Register your pupils here</div>
        </div>


        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.registrationForm}>


            {/* Full Name Input */}
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="First, Middle, Last Name"
                required
              />
            </div>

            {/* Email Input */}
            <div className={styles.reg_input_col}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div className={styles.formGroup}>
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

            {/* Date of Birth Input */}

            <div className={styles.formGroup}>
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                max={new Date().toISOString().split('T')[0]} // Prevent future dates
                required
              />
            </div>

            {/* Sex Dropdown */}
            <div className={styles.formGroup}>
              <label htmlFor="sex">Gender</label>
              <div className={styles.selectWrapper}>
                <select
                  id="sex"
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender </option>
                  {SEX_OPTIONS.map(sexOption => (
                    <option key={sexOption} value={sexOption}>
                      {sexOption}
                    </option>
                  ))}
                </select>
                <div className={styles.selectArrow}></div>
              </div>
            </div>


            {/* Class Dropdown */}
            <div className={styles.formGroup}>
              <label htmlFor="class">Class</label>
              <div className={styles.selectWrapper}>
                <select
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Class</option>
                  {CLASS_OPTIONS.map(classOption => (
                    <option key={classOption} value={classOption}>
                      {classOption}
                    </option>
                  ))}
                </select>
                <div className={styles.selectArrow}></div>
              </div>
            </div>

            {/* Category Dropdown */}
            <div className={styles.formGroup}>
              <label htmlFor="category">Category</label>
              <div className={styles.selectWrapper}>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  {CATEGORY_OPTIONS.map(categoryOption => (
                    <option key={categoryOption} value={categoryOption}>
                      {categoryOption}
                    </option>
                  ))}
                </select>
                <div className={styles.selectArrow}></div>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton}>
              Next
            </button>
          </form>
        </div>

      </div>

    </div>
  )
}


export default StudentRegistrationForm;












