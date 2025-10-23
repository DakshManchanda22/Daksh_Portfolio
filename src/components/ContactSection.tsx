import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    // The form will handle the actual submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">GET IN TOUCH</h2>
        <p className="contact-subtitle">
          Have a question or want to work together? Drop me a message.
        </p>

        {submitted ? (
          <div className="contact-success">
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        ) : (
          <form 
            action="https://formspree.io/f/xeoryawz" 
            method="POST"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="contact-input"
            />
            <input 
              type="email" 
              name="_replyto" 
              placeholder="Your Email" 
              required 
              className="contact-input"
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              required 
              rows={6}
              className="contact-textarea"
            />
            <button 
              type="submit" 
              className="contact-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;

