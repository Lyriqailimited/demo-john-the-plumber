import React from 'react';

const SERVICES = [
  'plumbing',
  'heating',
  'boiler repair',
  'boiler installation',
  'emergency callouts',
];

const FEATURES = [
  {
    icon: '🕐',
    title: '24/7 Availability',
    desc: 'Our AI receptionist answers calls around the clock — no missed opportunities.',
  },
  {
    icon: '📅',
    title: 'Instant Booking',
    desc: 'Customers can book appointments instantly without waiting on hold.',
  },
  {
    icon: '📞',
    title: 'Never Miss a Call',
    desc: 'Every enquiry is captured and responded to, day or night.',
  },
];

export default function Home() {
  const bookingLink = process.env.GOOGLE_CALENDAR_BOOKING_LINK || '#book';

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #23c0e0 0%, #1ba8c5 50%, #0f7a90 100%)',
          color: '#fff',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <img
          src="https://boilersleeds.co.uk/app/uploads/2016/03/john-the-plumber-logo-scaled.png"
          alt="John The Plumber logo"
          style={{ height: 64, objectFit: 'contain', marginBottom: 24 }}
        />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16 }}>John The Plumber</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: 600, margin: '0 auto 32px' }}>
          Leeds' trusted family plumbers with 25+ years experience in boilers, heating & emergency callouts
        </p>
        <a
          href="#widget"
          style={{
            display: 'inline-block',
            background: '#fff',
            color: '#23c0e0',
            padding: '14px 32px',
            borderRadius: 12,
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
          }}
        >
          Try AI Receptionist
        </a>
      </section>

      {/* Widget Section */}
      <section id="widget" style={{ padding: '60px 24px', maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, marginBottom: 32, color: '#1e293b' }}>
          Speak with Our AI Receptionist
        </h2>
        <iframe
          src="/widget.html"
          title="AI Voice Receptionist"
          width="100%"
          height="600"
          style={{ border: 'none', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
        />
      </section>

      {/* Services Grid */}
      <section style={{ padding: '60px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, marginBottom: 40, color: '#1e293b' }}>
            Our Services
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 24,
            }}
          >
            {SERVICES.map((service) => (
              <div
                key={service}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 12,
                  padding: 24,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: '#23c0e0',
                    margin: '0 auto 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: '#fff', fontSize: '1.2rem' }}>🔧</span>
                </div>
                <p style={{ fontWeight: 600, color: '#1e293b', textTransform: 'capitalize' }}>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section style={{ padding: '60px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, marginBottom: 12, color: '#1e293b' }}>
            Why an AI Receptionist?
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 40 }}>
            Stop losing leads to missed calls. Our AI handles every enquiry instantly.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {FEATURES.map((f) => (
              <div
                key={f.title}
                style={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 12,
                  padding: 32,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '80px 24px',
          background: 'linear-gradient(135deg, #23c0e0 0%, #0f7a90 100%)',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 16 }}>Ready to Never Miss a Call?</h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: 32 }}>
          Book a demo call and see the AI receptionist in action.
        </p>
        <a
          href={bookingLink}
          style={{
            display: 'inline-block',
            background: '#fff',
            color: '#23c0e0',
            padding: '16px 40px',
            borderRadius: 12,
            fontWeight: 700,
            fontSize: '1.1rem',
            textDecoration: 'none',
          }}
        >
          Book a Demo Call
        </a>
        <p style={{ marginTop: 24, opacity: 0.8 }}>
          📞 +44 7932 546929 · Leeds, UK
        </p>
      </section>
    </main>
  );
}
