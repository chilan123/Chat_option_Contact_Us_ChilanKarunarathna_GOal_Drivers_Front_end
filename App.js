import React, { useState } from 'react';
import './App.css';
import FormImage from './personContact.jpg';
import chat from './chats.png';

//the useState is used to define and manage the state of three variables in a React functional component.
function App() {
  const [showChat, setShowChat] = useState(false);
  const [section, setSection] = useState(null);
  const [subSection, setSubSection] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleSubSectionClick = (questionId) => {
    setSelectedQuestion(questionId);
  };

  const renderAnswer = (questionId) => {
    switch (questionId) {
      case '01':
        return <div className="answer">If you forgot your password, click on the "Forgot Password" link on the login page. </div>;
        case '02':
          return <div className="answer">Yes, we take the security of your account information seriously.  </div>;
        case '03':
            return <div className="answer">full name, email address, password</div>;
        case '04':
            return <div className="answer">Yes </div>;
        case '05':
               return <div className="answer">No </div>;
        case '06':
              return <div className="answer">Yes</div>;
        case '07':
              return <div className="answer">navigate to the seller dashboard. From there, you can add product details </div>;
        case '08':
               return <div className="answer">we have guidelines regarding prohibited items </div>;
        case '09':
                return <div className="answer">Yes</div>;
        case '10':
                return <div className="answer">Select the product you're interested in and place your bid within the specified duration. </div>;
        case '11':
              return <div className="answer">cannot </div>;
        case '12':
                return <div className="answer">you will receive a notification</div>;
        case '13':
                return <div className="answer">credit/debit cards, online payment gateways, and cash on delivery</div>;
        case '14':
                return <div className="answer">Yes </div>;
        case '15':
              return <div className="answer">No</div>;
        case '16':
                return <div className="answer">You can send an email to your assigned seller or use the "Request Demo" form on our website</div>;                                                                                                             
        case '17':
              return <div className="answer">Absolutely!</div>; 
        case '18':
                return <div className="answer">No</div>;                                                                                                             
        case '19':
              return <div className="answer">Certainly! </div>;        
        case '20':
                return <div className="answer">can provide date,time platform </div>;       
       case '21':
                return <div className="answer">Zoom, Microsoft Teams, or Google Meet,physically</div>;             
      case '22':
                return <div className="answer">No</div>;    
      case '23':
                  return <div className="answer">Yes</div>; 
      case '24':
                return <div className="answer">Name : Shehan <br/> Phone Number :0771238569 <br/>Email: shehan12@gmail.com </div>;      
       case '25':
                  return <div className="answer">Connect seller and Buyer</div>;  
       case '26':
              return <div className="answer">Blue is often associated with trust, reliability, and professionalism, which are qualities we want to convey to our users. </div>;  
      case '27':
                return <div className="answer">english only</div>; 
      case '28':
                return <div className="answer">Yes</div>;  
      case '29':
                return <div className="answer">follow us on social media platforms</div>;    
      case '30':
                return <div className="answer">No</div>;                         
      case '31':
             return <div className="answer">Name : gihan <br/> Phone Number :0781238569 <br/>Email: gihanhand@gmail.com </div>; 
     
      default:
        return null;
    }
  };


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Wait for a moment');
    console.log(formData);
  };


  const toggleChat = () => {
    setShowChat(!showChat);//If showChat is false, the chat icon is rendered, and if it is true, nothing is rendered.
  }

  const handleSectionClick = (value) => { //function is triggered when a user clicks on one of the buttons 
    setSection(value);
    setSubSection(null);
  };


  const handleBackClick = () => {
    if (selectedQuestion) {
      setSelectedQuestion(null);
    } else if (subSection) {
      setSubSection(null);
    } else if (section) {
      setSection(null);
    } else {
      setShowChat(false); // Hide the chat if none of the conditions above are met
    }
  };
  

  


  

  return (
  /*contact us page  */
    <div className="container">
    <div className="image-container">
   
    <img src={FormImage} alt="form" />
    </div>
    <div className="form-container">
      <h1 className="form-title">CONTACT ME</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="input-label">First Name:</label> {/*feild of the form */}
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName" className="input-label">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="input-label">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject" className="input-label">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="message" className="input-label">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  

  {/*chat option  */ }
    <div className="app-container">
    

      <div className="chat-button" onClick={toggleChat}  > {/* it triggers the toggleChat function which toggles the value of the showChat state variable using the setShowChat function.*/ }
   
        <img src={chat} alt="chat" />
        </div>


      {showChat && (   //If showChat is false, then this <div> will not be rendered.
       <div className="chat">
       <div className="chat-header">
         <h2>Quick Assist</h2>
       </div>
       <div className="chat-body">
  {!section && (
    <div>
      <p>What type of question do you have?:</p>
      <button onClick={() => handleSectionClick('Details')}>Details</button>
      <button onClick={() => handleSectionClick('Log in')}>Log in</button>
      <button onClick={() => handleSectionClick('Registration')}>Registration</button>
      <button onClick={() => handleSectionClick('Direct product')}>Direct product</button>
      <button onClick={() => handleSectionClick('Bit Product')}>Bit Product</button>
      <button onClick={() => handleSectionClick('Payment')}>payment</button>
      <button onClick={() => handleSectionClick('Request demo')}>Request demo</button>
      <button onClick={() => handleSectionClick('Request meeting')}>Request meeting</button>
      <button onClick={() => handleSectionClick('Contacts')}>Contacts</button>
      <button onClick={() => handleSectionClick('Others')}>Others</button>
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
  )}
  {section === 'Log in' && (
    <div > 
      <button onClick={() => handleSubSectionClick('01')}>I forgot my password.How can reset?</button>
      <button onClick={() => handleSubSectionClick('02')}>Is my account information secure?</button>
      <div classname="ans-title">Answer</div>
      {selectedQuestion && renderAnswer(selectedQuestion)}
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
  )}
  {section === 'Registration' && (
    <div > 
      <button onClick={() => handleSubSectionClick('03')}>What information do I need to provide?</button>
      <button onClick={() => handleSubSectionClick('04')}>Can I register as a seller a buyer at the same time?</button>
      <button onClick={() => handleSubSectionClick('05')}>Is there a registration fee?</button>
      <button onClick={() => handleSubSectionClick('06')}>Can I change my registered information</button>
      <div classname="ans-title">Answer</div>
      
      {selectedQuestion && renderAnswer(selectedQuestion)}
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
  )}
  {section === 'Direct product' && (
    <div > 
      <button onClick={() => handleSubSectionClick('07')}>How can I list my products for direct selling?</button>
      <button onClick={() => handleSubSectionClick('08')}>Are there any restrictions for products?</button>
      <button onClick={() => handleSubSectionClick('09')}>Can I offer discounts for my direct selling products?</button>
     
      <div classname="ans-title">Answer</div>
      
      {selectedQuestion && renderAnswer(selectedQuestion)}
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
    
  )}

{section === 'Bit Product' && (
    <div > 
      <button onClick={() => handleSubSectionClick('10')}>How can I participate in a bid for a product?</button>
      <button onClick={() => handleSubSectionClick('11')}>Can I cancel my bid after placing it?</button>
      <button onClick={() => handleSubSectionClick('12')}>How will I know if I win a bid?</button>
     
      <div classname="ans-title">Answer</div>
      
      {selectedQuestion && renderAnswer(selectedQuestion)}
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
    
  )}
{section === 'Payment' && (
    <div > 
      <button onClick={() => handleSubSectionClick('13')}>What payment methods are accepted on the platform?</button>
      <button onClick={() => handleSubSectionClick('14')}>Is my payment information secure?</button>
      <button onClick={() => handleSubSectionClick('15')}> Are there any additional charges for using specific payment methods?</button>
     
      <div classname="ans-title">Answer</div>
      
      {selectedQuestion && renderAnswer(selectedQuestion)}
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
    
  )}
{section === 'Request demo' && (
    <div > 
      <button onClick={() => handleSubSectionClick('16')}>How can I request ?</button>
      <button onClick={() => handleSubSectionClick('17')}>Can I request a personalized demo ?</button>
      <button onClick={() => handleSubSectionClick('18')}>Is there a cost associated with it?</button>
      <button onClick={() => handleSubSectionClick('19')}>Can I request multiple demos ?</button>
      <div classname="ans-title">Answer</div>
      
      {selectedQuestion && renderAnswer(selectedQuestion)}
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
    
  )}

{section === 'Request meeting' && (
    <div > 
      <button onClick={() => handleSubSectionClick('20')}>How can I schedule a meeting with a seller?</button>
      <button onClick={() => handleSubSectionClick('21')}>What platforms are available?</button>
      <button onClick={() => handleSubSectionClick('22')}>Is there a cost associated with it?</button>
      <button onClick={() => handleSubSectionClick('23')}>Can I request more demos ?</button>
      <div classname="ans-title">Answer</div>
      
      {selectedQuestion && renderAnswer(selectedQuestion)}
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
    
  )}
  {section === 'Contacts' && (
    <div > 
      <button onClick={() => handleSubSectionClick('24')}>ADMIN DETAILS</button>
      <button onClick={() => handleSubSectionClick('31')}>Seller DETAILS</button> 
      <div classname="ans-title">Answer</div>
      
      {selectedQuestion && renderAnswer(selectedQuestion)}
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
    
  )}

{section === 'Details' && (
    <div > 
      <button onClick={() => handleSubSectionClick('25')}>What is the aim or purpose of creating this webpage?</button>
      <button onClick={() => handleSubSectionClick('26')}>Why was the color blue chosen for the webpage?</button>
      <button onClick={() => handleSubSectionClick('27')}>Is the website available only in English</button>
      <div classname="ans-title">Answer</div>
      
      {selectedQuestion && renderAnswer(selectedQuestion)}
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
    
  )}
 
 {section === 'Others' && (
    <div > 
      <button onClick={() => handleSubSectionClick('28')}>Are there any future features planned for the website?</button>
      <button onClick={() => handleSubSectionClick('29')}>How can customers stay updated on new features and updates?</button>
      <button onClick={() => handleSubSectionClick('30')}>Will there be any additional costs associated with future features?</button>
      <div classname="ans-title">Answer</div>
      
      {selectedQuestion && renderAnswer(selectedQuestion)}
      <button onClick={() => handleBackClick()}>Back</button>
    </div>
    
  )}
 
    </div>
    </div>
   )}
 </div>
 </div>
);
}

export default App;


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  














