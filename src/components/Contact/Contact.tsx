import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { contactInfo } from '../../config/snigdha';
import './Contact.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const infoItems = [
    { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: 'Phone', value: contactInfo.phone },
    { icon: MapPin, label: 'Location', value: contactInfo.location },
    { icon: Linkedin, label: 'LinkedIn', value: 'View Profile', href: contactInfo.linkedinUrl },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <h2 className="section-title">Let's Connect</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-info-desc">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <ul className="contact-info-list">
              {infoItems.map((item) => (
                <li key={item.label} className="contact-info-item">
                  <span className="contact-info-icon">
                    <item.icon size={20} />
                  </span>
                  <div>
                    <span className="contact-info-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="contact-info-value contact-info-link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-info-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-primary contact-form-submit">
              Send Message
            </button>
            {submitted && (
              <p className="contact-form-success">Opening your email client to send the message!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
