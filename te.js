import React, { useState } from 'react';
import './App.css';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [section, setSection] = useState(null);
  const [subSection, setSubSection] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [sellerDetails, setSellerDetails] = useState(null);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleSectionClick = (value) => {
    setSection(value);
    setSubSection(null);
    setSelectedQuestion(null);
    setSellerDetails(null);
  };

  const handleSubSectionClick = (value) => {
    setSubSection(value);
    setSelectedQuestion(null);
    setSellerDetails(null);
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  const handleContactClick = (value) => {
    setSection('contact');
    setSubSection(value);
    setSelectedQuestion(null);
    setSellerDetails(null);
  };

  const handleSellerClick = (sellerName) => {
    setSellerDetails(sellerName);
  };

  const handleBackClick = () => {
    if (selectedQuestion) {
      setSelectedQuestion(null);
    } else if (subSection) {
      setSubSection(null);
    } else if (section === 'contact') {
      setSection(null);
    } else {
      setShowChat(false); // Hide the chat if none of the conditions above are met
    }
  };
  

  return (
    <div className="container">
      {/* Your contact form code */}
      {/* ... */}

      {/* Chat option */}
      <div className="app-container">
        <div className="chat-button" onClick={toggleChat}>
          <img src={chat} alt="chat" />
        </div>

        {showChat && (
          <div className="chat">
            <div className="chat-header">
              <h2>Quick Assist</h2>
            </div>
            <div className="chat-body">
              {!section && (
                <div>
                  <p>Select a section:</p>
                  <button onClick={() => handleSectionClick('web page')}>Web Page</button>
                  <button onClick={() => handleSectionClick('contact')}>Contact</button>
                  <button onClick={() => handleSectionClick('other')}>Other</button>
                </div>
              )}

              {section === 'web page' && !subSection && (
                <div>
                  <p>Select a sub-section:</p>
                  <button onClick={() => handleSubSectionClick('login')}>Login</button>
                  <button onClick={() => handleSubSectionClick('registration')}>Registration</button>
                  <button onClick={() => handleSubSectionClick('direct selling')}>Direct Selling</button>
                  <button onClick={() => handleSubSectionClick('bit selling')}>Bit Selling</button>
                  <button onClick={() => handleSubSectionClick('payment')}>Payment</button>
                </div>
              )}

              {section === 'web page' && subSection && !selectedQuestion && (
                <div>
                  <p>Select a question:</p>
                  {/* Add question buttons here */}
                  <button onClick={() => handleQuestionClick('Question 1')}>Question 1</button>
                  <button onClick={() => handleQuestionClick('Question 2')}>Question 2</button>
                  {/* ... */}
                  <button className="button-back" onClick={() => handleBackClick()}>Back</button>
                </div>
              )}

              {section === 'web page' && subSection && selectedQuestion && (
                <div>
                  <p>{selectedQuestion}</p>
                  {/* Add answer for the selected question here */}
                  <button onClick={() => handleBackClick()}>Back</button>
                </div>
              )}

              {section === 'contact' && !subSection && (
                <div>
                  <p>Select a contact:</p>
                  <button onClick={() => handleContactClick('seller')}>Seller</button>
                  <button onClick={() => handleContactClick('admin')}>Admin</button>
                </div>
              )}

              {section === 'contact' && subSection === 'seller' && !sellerDetails && (
                <div>
                  <p>Select a seller:</p>
                  {/* Add seller buttons here */}
                  <button onClick={() => handleSellerClick('Seller 1')}>Seller 1</button>
                  <button onClick={() => handleSellerClick('Seller 2')}>Seller 2</button>
                  {/* ... */}
                  <button onClick={() => handleBackClick()}>Back</button>
                </div>
              )}

              {section === 'contact' && subSection === 'seller' && sellerDetails && (
                <div>
                  <p>Seller details:</p>
                  <p>{sellerDetails}</p>
                  {/* Add seller details here */}
                  <button onClick={() => handleBackClick()}>Back</button>
                </div>
              )}

              {/* Add code for the 'other' section here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
