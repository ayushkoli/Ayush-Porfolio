import React, { useRef, useState, useEffect } from 'react';
import '../index.css';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  // Initialize EmailJS
  useEffect(() => {
    // Load EmailJS script if not already loaded
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.onload = () => {
        window.emailjs.init('X5dUS7g6mIo0FUQR7'); // Your public key
      };
      document.head.appendChild(script);
    } else {
      window.emailjs.init('X5dUS7g6mIo0FUQR7');
    }
  }, []);

  // Form validation
  const validateForm = (data) => {
    const errors = {};
    let isValid = true;

    // Validate name
    if (!data.user_name || data.user_name.trim().length < 2) {
      errors.user_name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.user_email || !emailRegex.test(data.user_email)) {
      errors.user_email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate message
    if (!data.message || data.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  // Clear field error on input
  const clearFieldError = (fieldName) => {
    setFieldErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  // Send email function
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setFieldErrors({});

    // Get form data
    const formData = new FormData(form.current);
    const templateParams = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message'),
      to_email: 'ayushkoli0709@gmail.com' // Your email
    };

    // Validate form before sending
    if (!validateForm(templateParams)) {
      setIsLoading(false);
      return;
    }

    // Send email using EmailJS
    if (window.emailjs) {
      window.emailjs.send('service_02xkn13', 'template_a0hnpyp', templateParams)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessage('Message sent successfully! I\'ll get back to you soon.');
          setMessageType('success');
          form.current.reset();
        })
        .catch((error) => {
          console.error('FAILED...', error);
          setMessage('Failed to send message. Please try again later.');
          setMessageType('error');
        })
        .finally(() => {
          setIsLoading(false);
          // Clear message after 5 seconds
          setTimeout(() => {
            setMessage('');
            setMessageType('');
          }, 5000);
        });
    } else {
      // Fallback if EmailJS is not loaded
      setTimeout(() => {
        setMessage('EmailJS not loaded. Please refresh and try again.');
        setMessageType('error');
        setIsLoading(false);
        setTimeout(() => {
          setMessage('');
          setMessageType('');
        }, 5000);
      }, 1000);
    }
  };

  return (
    <>
      <style jsx>{`
        /* Form field error styles */
        .form-group.error input,
        .form-group.error textarea {
          border-color: #ff6b6b;
          background-color: rgba(255, 107, 107, 0.1);
        }

        .error-message {
          color: #ff6b6b;
          font-size: 0.9rem;
          margin-top: 5px;
          animation: slideIn 0.3s ease-out;
        }

        /* Status message styles */
        .status-message {
          margin-top: 1.5rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          text-align: center;
          font-weight: 600;
          animation: slideIn 0.3s ease-out;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .status-message.success {
          background: linear-gradient(135deg, #d4edda, #c3e6cb);
          color: #155724;
          border: 2px solid #28a745;
        }

        .status-message.error {
          background: linear-gradient(135deg, #f8d7da, #f5c6cb);
          color: #721c24;
          border: 2px solid #dc3545;
        }

        /* Loading state styles */
        .contact-form input:disabled,
        .contact-form textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          background-color: #6c757d;
        }

        .submit-btn:disabled:hover {
          background-color: #6c757d;
          transform: none;
        }

        /* Loading spinner */
        .loading-spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }

        /* Real-time validation feedback */
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent, #6cc644);
          box-shadow: 0 0 0 2px rgba(108, 198, 68, 0.2);
        }

        .form-group input:valid,
        .form-group textarea:valid {
          border-color: #28a745;
        }

        .form-group input:invalid:not(:placeholder-shown),
        .form-group textarea:invalid:not(:placeholder-shown) {
          border-color: #ff6b6b;
        }

        /* Animations */
        @keyframes spin {
          to { 
            transform: rotate(360deg); 
          }
        }

        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes slideOut {
          from { 
            opacity: 1; 
            transform: translateY(0); 
          }
          to { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
        }

        /* Success message enhancement */
        .status-message.success h3 {
          margin: 0 0 10px 0;
          font-size: 1.2rem;
        }

        .status-message.success p,
        .status-message.error p {
          margin: 0;
          font-weight: 400;
        }

        /* Responsive improvements */
        @media (max-width: 768px) {
          .status-message {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }
          
          .error-message {
            font-size: 0.8rem;
          }
        }
      `}</style>
      
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>
              I'm always excited to work on new projects and collaborate with amazing people.
              Let's create something incredible together!
            </p>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className={`form-group ${fieldErrors.user_name ? 'error' : ''}`}>
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Your Name" 
                  required 
                  disabled={isLoading}
                  onInput={() => clearFieldError('user_name')}
                />
                {fieldErrors.user_name && (
                  <div className="error-message">{fieldErrors.user_name}</div>
                )}
              </div>
              
              <div className={`form-group ${fieldErrors.user_email ? 'error' : ''}`}>
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Your Email" 
                  required 
                  disabled={isLoading}
                  onInput={() => clearFieldError('user_email')}
                />
                {fieldErrors.user_email && (
                  <div className="error-message">{fieldErrors.user_email}</div>
                )}
              </div>
              
              <div className={`form-group ${fieldErrors.message ? 'error' : ''}`}>
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  required
                  disabled={isLoading}
                  onInput={() => clearFieldError('message')}
                ></textarea>
                {fieldErrors.message && (
                  <div className="error-message">{fieldErrors.message}</div>
                )}
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
            
            {/* Status message */}
            {message && (
              <div className={`status-message ${messageType}`}>
                {messageType === 'success' && (
                  <>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out! I'll get back to you soon.</p>
                  </>
                )}
                {messageType === 'error' && (
                  <>
                    <h3>Failed to Send Message</h3>
                    <p>Please try again later or contact me directly.</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;