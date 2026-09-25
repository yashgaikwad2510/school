import React from 'react';

const Contact = () => {
  return (
    <div className="section container">
      <h1 className="section-title">Contact Us</h1>
      
      <div className="grid-3">
        <div style={{ gridColumn: 'span 1', background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <h2>School Information</h2>
          <br/>
          <p><strong>Name:</strong> Shri Chhatrapati Shivaji Maharaj Mahanagarpalika Prathamik Shala</p>
          <br/>
          <p><strong>Address:</strong> Bhutkarwadi, Taluka Ahilyanagar, District Ahilyanagar</p>
          <br/>
          <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
          <br/>
          <p><strong>Email:</strong> info@bhutkarwadischool.edu</p>
          <br/>
          <p><strong>Office Timings:</strong> Mon - Sat: 9:00 AM - 5:00 PM</p>
        </div>

        <div style={{ gridColumn: 'span 2', background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <h2>Send us a Message</h2>
          <br/>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" style={{ padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid var(--border-color)' }} required />
            <input type="email" placeholder="Email" style={{ padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid var(--border-color)' }} required />
            <input type="text" placeholder="Phone (Optional)" style={{ padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid var(--border-color)' }} />
            <input type="text" placeholder="Subject" style={{ padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid var(--border-color)' }} required />
            <textarea placeholder="Message" rows="4" style={{ padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid var(--border-color)' }} required></textarea>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Submit</button>
          </form>
        </div>
      </div>

      <div style={{ marginTop: '3rem', background: '#e5e7eb', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem' }}>
        <h3>Google Maps Placeholder</h3>
      </div>
    </div>
  );
};

export default Contact;
