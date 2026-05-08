import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
    const navigate = useNavigate();

    const contactDetails = [
        {
            icon: '📞',
            title: 'Phone',
            value: '+94 71 234 5678',
            link: 'tel:+94712345678',
        },
        {
            icon: '📧',
            title: 'Email',
            value: 'meedumhansama@gmail.com',
            link: 'mailto:meedumhansama@gmail.com',
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Colombo, Sri Lanka',
            link: 'https://maps.google.com/?q=Colombo,Sri+Lanka',
        },
        {
            icon: '🕐',
            title: 'Working Hours',
            value: 'Mon – Sat: 8am – 8pm',
            link: null,
        },
    ];

    const socials = [
        {
            name: 'Facebook',
            handle: 'Loveena Cakes',
            link: 'https://facebook.com',
            color: '#1877f2',
            bg: '#e7f0fd',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877f2">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            handle: '@loveena_cakes',
            link: 'https://instagram.com',
            color: '#e1306c',
            bg: '#fde8f0',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#e1306c">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            ),
        },
        {
            name: 'WhatsApp',
            handle: '+94 71 234 5678',
            link: 'https://wa.me/94712345678',
            color: '#25d366',
            bg: '#e8faf0',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#25d366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
        },
        {
            name: 'TikTok',
            handle: '@loveena_cakes',
            link: 'https://tiktok.com',
            color: '#010101',
            bg: '#f0f0f0',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#010101">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
            ),
        },
    ];

    return (
        <div style={styles.page}>
            <div style={styles.container}>

                {/* ── Hero ── */}
                <div style={styles.hero}>
                    <div style={styles.heroIcon}>🎂</div>
                    <h1 style={styles.heroTitle}>Loveena Cakes</h1>
                    <p style={styles.heroSubtitle}>Handcrafted with love · Colombo, Sri Lanka</p>
                    <p style={styles.heroDesc}>
                        We create custom cakes for every special occasion — from birthdays and weddings
                        to graduations and baby showers. Every cake is baked fresh and decorated with care,
                        just for you.
                    </p>
                </div>

                {/* ── Contact Cards ── */}
                <h2 style={styles.sectionTitle}>📬 Get in Touch</h2>
                <div style={styles.contactGrid}>
                    {contactDetails.map((c, i) => (
                        <div key={i} style={styles.contactCard}>
                            <div style={styles.contactIcon}>{c.icon}</div>
                            <p style={styles.contactTitle}>{c.title}</p>
                            {c.link ? (
                                <a href={c.link} target="_blank" rel="noreferrer" style={styles.contactValue}>
                                    {c.value}
                                </a>
                            ) : (
                                <p style={styles.contactValue}>{c.value}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* ── Social Media ── */}
                <h2 style={styles.sectionTitle}>🌸 Follow Us</h2>
                <div style={styles.socialGrid}>
                    {socials.map((s, i) => (
                        <a key={i} href={s.link} target="_blank" rel="noreferrer"
                            style={{ ...styles.socialCard, background: s.bg, textDecoration: 'none' }}>
                            <div style={styles.socialIcon}>{s.icon}</div>
                            <div>
                                <p style={{ ...styles.socialName, color: s.color }}>{s.name}</p>
                                <p style={styles.socialHandle}>{s.handle}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div style={styles.cta}>
                    <p style={styles.ctaText}>Ready to order your dream cake? 🎉</p>
                    <button style={styles.ctaBtn} onClick={() => navigate('/orderDetails')}>
                        Order Now 🎂
                    </button>
                </div>

            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 40%, #f3e5f5 100%)',
        fontFamily: "'Nunito', 'Segoe UI', sans-serif",
        padding: '40px 16px',
    },
    container: { maxWidth: 900, margin: '0 auto' },

    // Hero
    hero: {
        textAlign: 'center', marginBottom: 40,
        background: '#fff', borderRadius: 28,
        padding: '40px 32px',
        boxShadow: '0 8px 40px rgba(233,30,99,0.10)',
    },
    heroIcon: { fontSize: '4rem', marginBottom: 12 },
    heroTitle: {
        fontSize: '2.8rem', fontWeight: 300, color: '#4a0030',
        marginBottom: 6, letterSpacing: '-0.02em',
    },
    heroSubtitle: { fontSize: '0.9rem', color: '#e91e8c', marginBottom: 16, letterSpacing: '0.04em' },
    heroDesc: {
        fontSize: '1rem', color: '#6d4c61', lineHeight: 1.8,
        maxWidth: 560, margin: '0 auto',
    },

    // Section title
    sectionTitle: {
        fontSize: '1.1rem', fontWeight: 800, color: '#4a0030',
        marginBottom: 20, letterSpacing: '-0.01em',
    },

    // Contact cards
    contactGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 16, marginBottom: 40,
    },
    contactCard: {
        background: '#fff', borderRadius: 20, padding: '24px 16px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(233,30,99,0.08)',
    },
    contactIcon: { fontSize: '2rem', marginBottom: 10 },
    contactTitle: {
        fontSize: '0.75rem', fontWeight: 700, color: '#c2185b',
        textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6,
    },
    contactValue: {
        fontSize: '0.88rem', color: '#4a0030', fontWeight: 600,
        wordBreak: 'break-all', textDecoration: 'none',
    },

    // Social cards
    socialGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 16, marginBottom: 48,
    },
    socialCard: {
        display: 'flex', alignItems: 'center', gap: 14,
        borderRadius: 20, padding: '18px 20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        cursor: 'pointer',
    },
    socialIcon: { flexShrink: 0 },
    socialName: { fontWeight: 800, fontSize: '0.95rem', marginBottom: 2 },
    socialHandle: { fontSize: '0.78rem', color: '#888' },

    // CTA
    cta: {
        textAlign: 'center', background: '#fff',
        borderRadius: 28, padding: '36px 24px',
        boxShadow: '0 8px 40px rgba(233,30,99,0.10)',
        marginBottom: 40,
    },
    ctaText: { fontSize: '1.3rem', color: '#4a0030', fontWeight: 300, marginBottom: 20 },
    ctaBtn: {
        padding: '14px 40px', borderRadius: 50, border: 'none',
        background: 'linear-gradient(135deg, #e91e8c, #c2185b)',
        color: '#fff', fontWeight: 800, fontSize: '1rem',
        cursor: 'pointer', letterSpacing: '0.04em',
        boxShadow: '0 4px 20px rgba(233,30,140,0.35)',
        fontFamily: 'inherit',
    },
};