import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

// ─── EMAILJS CONFIG ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_tk209ga';
const EMAILJS_TEMPLATE_ID = 'template_ib7282h';
const EMAILJS_PUBLIC_KEY = 'KgMr9KSuOjD7-Fc3U';
// ────────────────────────────────────────────────────────────────

const CAKES = [
    { value: 'VelvetDream', label: 'Velvet Dream', occasion: 'Birthday', basePrice: 2800, emoji: '🎂' },
    { value: 'PearlElegance', label: 'Pearl Elegance', occasion: 'Wedding', basePrice: 8500, emoji: '💍' },
    { value: 'ChocoLove', label: 'Choco Love', occasion: 'Anniversary', basePrice: 3200, emoji: '🍫' },
    { value: 'LittleSurprise', label: 'Little Surprise', occasion: 'Gender Reveal', basePrice: 4500, emoji: '🎀' },
    { value: 'SmartTreat', label: 'Smart Treat', occasion: 'Graduation', basePrice: 3800, emoji: '🎓' },
    { value: 'ForeverSweet', label: 'Forever Sweet', occasion: 'Engagement', basePrice: 5500, emoji: '💝' },
    { value: 'TinyJoy', label: 'Tiny Joy', occasion: 'Baby Shower', basePrice: 3500, emoji: '🍼' },
    { value: 'SugarSwirls', label: 'Sugar Swirls', occasion: 'Cup Cake', basePrice: 1800, emoji: '🧁' },
    { value: 'VelvetCocoa', label: 'Velvet Cocoa', occasion: 'Eggless', basePrice: 3000, emoji: '🌿' },
];

const SIZES = [
    { value: '500g', label: '500g', multiplier: 1, serves: 'Serves 4–6' },
    { value: '1kg', label: '1 kg', multiplier: 1.8, serves: 'Serves 10–12' },
    { value: '2kg', label: '2 kg', multiplier: 3.2, serves: 'Serves 20–25' },
    { value: '3kg', label: '3 kg', multiplier: 4.5, serves: 'Serves 30–35' },
];

const SLOTS = ['Morning (9am–12pm)', 'Afternoon (12pm–4pm)', 'Evening (4pm–7pm)'];

const minDate = new Date();
minDate.setDate(minDate.getDate() + 2);
const minDateStr = minDate.toISOString().split('T')[0];

export default function OrderPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        cakeType: 'VelvetDream',
        size: '1kg',
        quantity: 1,
        deliveryDate: '',
        timeSlot: SLOTS[0],
        message: '',
    });

    const [coupon, setCoupon] = useState('');
    const [couponApplied, setCouponApplied] = useState(false);
    const [couponError, setCouponError] = useState('');

    // ── Email states ──
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState('');
    const [refNumber, setRefNumber] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const selectedCake = params.get('cake');
        if (selectedCake) setFormData(prev => ({ ...prev, cakeType: selectedCake }));
    }, [location.search]);

    const selectedCake = CAKES.find(c => c.value === formData.cakeType) || CAKES[0];
    const selectedSize = SIZES.find(s => s.value === formData.size) || SIZES[1];
    const unitPrice = Math.round(selectedCake.basePrice * selectedSize.multiplier);
    const subtotal = unitPrice * formData.quantity;
    const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
    const total = subtotal - discount;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'quantity' ? Math.max(1, parseInt(value) || 1) : value,
        }));
    };

    const applyCoupon = () => {
        if (coupon.trim().toUpperCase() === 'SWEET10') {
            setCouponApplied(true);
            setCouponError('');
        } else {
            setCouponError('Invalid coupon code.');
            setCouponApplied(false);
        }
    };

    // ── THIS IS THE FIXED handleSubmit — actually calls EmailJS ──
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setSendError('');

        const ref = `LVC-${Date.now().toString().slice(-6)}`;

        const templateParams = {
            ref_number: ref,
            customer_name: formData.name,
            customer_phone: formData.phone,
            customer_address: formData.address,
            cake_name: selectedCake.label,
            cake_occasion: selectedCake.occasion,
            cake_size: selectedSize.label,
            quantity: formData.quantity,
            delivery_date: formData.deliveryDate,
            time_slot: formData.timeSlot,
            cake_message: formData.message || 'None',
            subtotal: `Rs. ${subtotal.toLocaleString()}`,
            discount: `Rs. ${discount.toLocaleString()}`,
            total: `Rs. ${total.toLocaleString()}`,
        };

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );
            setRefNumber(ref);
            setSubmitted(true);
        } catch (err) {
            console.error('EmailJS error:', err);
            setSendError('Failed to send order. Please try again or contact us directly.');
        } finally {
            setSending(false);
        }
    };

    // ── Confirmation Screen ──
    if (submitted) {
        return (
            <div style={styles.page}>
                <div style={styles.successCard}>
                    <div style={styles.successIcon}>🎂</div>
                    <h2 style={styles.successTitle}>Order Confirmed!</h2>
                    <p style={styles.successRef}>Reference: <strong>{refNumber}</strong></p>
                    <p style={styles.successMsg}>
                        Thank you, <strong>{formData.name}</strong>! Your{' '}
                        <strong>{selectedCake.label}</strong> ({selectedSize.label} × {formData.quantity}) will be
                        delivered on <strong>{formData.deliveryDate}</strong> during the{' '}
                        <strong>{formData.timeSlot}</strong>.
                    </p>
                    <p style={styles.successNote}>📧 A confirmation has been sent to our team.</p>
                    <p style={styles.successTotal}>
                        Total Paid: <span style={styles.successPrice}>Rs. {total.toLocaleString()}</span>
                    </p>
                    <button style={styles.backBtn} onClick={() => navigate('/')}>Back to Home</button>
                </div>
            </div>
        );
    }

    // ── Order Form ──
    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h1 style={styles.pageTitle}>Place Your Order</h1>
                <p style={styles.pageSubtitle}>Handcrafted with love · Delivered fresh · Orders need 2 days advance</p>

                <div style={styles.layout}>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} style={styles.form}>

                        {/* Personal Details */}
                        <section style={styles.section}>
                            <h3 style={styles.sectionTitle}>👤 Personal Details</h3>
                            <div style={styles.row}>
                                <div style={styles.field}>
                                    <label style={styles.label}>Full Name</label>
                                    <input style={styles.input} type="text" name="name" required
                                        value={formData.name} onChange={handleChange}
                                        placeholder="Deenu Hansama" />
                                </div>
                                <div style={styles.field}>
                                    <label style={styles.label}>Phone Number</label>
                                    <input style={styles.input} type="tel" name="phone" required
                                        value={formData.phone} onChange={handleChange}
                                        placeholder="+94 77 123 4567"
                                        pattern="(\+94|0)[0-9]{9}"
                                        title="Enter a valid Sri Lankan phone number" />
                                </div>
                            </div>
                        </section>

                        {/* Cake Selection */}
                        <section style={styles.section}>
                            <h3 style={styles.sectionTitle}>🎂 Cake Selection</h3>
                            <div style={styles.field}>
                                <label style={styles.label}>Select Your Cake</label>
                                <select style={styles.input} name="cakeType" value={formData.cakeType} onChange={handleChange}>
                                    {CAKES.map(c => (
                                        <option key={c.value} value={c.value}>
                                            {c.emoji} {c.label} ({c.occasion})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div style={styles.row}>
                                <div style={styles.field}>
                                    <label style={styles.label}>Size</label>
                                    <div style={styles.sizeGrid}>
                                        {SIZES.map(s => (
                                            <button type="button" key={s.value}
                                                style={{ ...styles.sizeBtn, ...(formData.size === s.value ? styles.sizeBtnActive : {}) }}
                                                onClick={() => setFormData(prev => ({ ...prev, size: s.value }))}>
                                                <span style={styles.sizeName}>{s.label}</span>
                                                <span style={styles.sizeServes}>{s.serves}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ ...styles.field, maxWidth: 120 }}>
                                    <label style={styles.label}>Quantity</label>
                                    <div style={styles.qtyRow}>
                                        <button type="button" style={styles.qtyBtn}
                                            onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}>−</button>
                                        <span style={styles.qtyVal}>{formData.quantity}</span>
                                        <button type="button" style={styles.qtyBtn}
                                            onClick={() => setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }))}>+</button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Delivery Details */}
                        <section style={styles.section}>
                            <h3 style={styles.sectionTitle}>🚚 Delivery Details</h3>
                            <div style={styles.field}>
                                <label style={styles.label}>Delivery Address</label>
                                <input style={styles.input} type="text" name="address" required
                                    value={formData.address} onChange={handleChange}
                                    placeholder="No. 12, Flower Road, Colombo" />
                            </div>
                            <div style={styles.row}>
                                <div style={styles.field}>
                                    <label style={styles.label}>Delivery Date</label>
                                    <input style={styles.input} type="date" name="deliveryDate" required
                                        min={minDateStr} value={formData.deliveryDate} onChange={handleChange} />
                                    <span style={styles.hint}>Minimum 2 days in advance</span>
                                </div>
                                <div style={styles.field}>
                                    <label style={styles.label}>Time Slot</label>
                                    <select style={styles.input} name="timeSlot" value={formData.timeSlot} onChange={handleChange}>
                                        {SLOTS.map(s => <option key={s}>{s}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div style={styles.field}>
                                <label style={styles.label}>Special Message (Optional)</label>
                                <input style={styles.input} type="text" name="message"
                                    value={formData.message} onChange={handleChange}
                                    placeholder="Happy Birthday Mom! 🎉" />
                            </div>
                        </section>

                        {/* Coupon */}
                        <section style={styles.section}>
                            <h3 style={styles.sectionTitle}>🏷️ Promo Code</h3>
                            <div style={styles.couponRow}>
                                <input style={{ ...styles.input, flex: 1 }} type="text" value={coupon}
                                    onChange={e => { setCoupon(e.target.value); setCouponError(''); setCouponApplied(false); }}
                                    placeholder="Enter code (try SWEET10)" />
                                <button type="button" style={styles.applyBtn} onClick={applyCoupon}>Apply</button>
                            </div>
                            {couponApplied && <p style={styles.couponSuccess}>✅ 10% discount applied!</p>}
                            {couponError && <p style={styles.couponErr}>{couponError}</p>}
                        </section>

                        {/* Send Error */}
                        {sendError && (
                            <div style={styles.errorBox}>
                                ⚠️ {sendError}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            style={{ ...styles.submitBtn, opacity: sending ? 0.7 : 1 }}
                            disabled={sending}>
                            {sending ? '📨 Sending Order...' : 'Confirm Order →'}
                        </button>
                    </form>

                    {/* ORDER SUMMARY */}
                    <aside style={styles.summary}>
                        <div style={styles.summarySticky}>
                            <h3 style={styles.summaryTitle}>Order Summary</h3>
                            <div style={styles.summaryItem}>
                                <span style={styles.summaryEmoji}>{selectedCake.emoji}</span>
                                <div>
                                    <p style={styles.summaryName}>{selectedCake.label}</p>
                                    <p style={styles.summaryOccasion}>{selectedCake.occasion}</p>
                                </div>
                            </div>
                            <div style={styles.divider} />
                            <div style={styles.summaryRow}><span>Size</span><span>{selectedSize.label} ({selectedSize.serves})</span></div>
                            <div style={styles.summaryRow}><span>Unit Price</span><span>Rs. {unitPrice.toLocaleString()}</span></div>
                            <div style={styles.summaryRow}><span>Quantity</span><span>× {formData.quantity}</span></div>
                            <div style={styles.summaryRow}><span>Subtotal</span><span>Rs. {subtotal.toLocaleString()}</span></div>
                            {couponApplied && (
                                <div style={{ ...styles.summaryRow, color: '#e91e8c' }}>
                                    <span>Discount (10%)</span><span>− Rs. {discount.toLocaleString()}</span>
                                </div>
                            )}
                            <div style={styles.divider} />
                            <div style={styles.totalRow}>
                                <span>Total</span>
                                <span style={styles.totalPrice}>Rs. {total.toLocaleString()}</span>
                            </div>
                            {formData.deliveryDate && (
                                <>
                                    <div style={styles.divider} />
                                    <div style={styles.summaryRow}><span>📅 Date</span><span>{formData.deliveryDate}</span></div>
                                    <div style={styles.summaryRow}><span>🕐 Slot</span><span style={{ fontSize: '0.75rem' }}>{formData.timeSlot}</span></div>
                                </>
                            )}
                            {formData.message && (
                                <div style={styles.messageBox}>
                                    <p style={styles.messageLabel}>Message on cake:</p>
                                    <p style={styles.messageText}>"{formData.message}"</p>
                                </div>
                            )}
                        </div>
                    </aside>
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
    container: { maxWidth: 1100, margin: '0 auto' },
    pageTitle: {
        textAlign: 'center', fontSize: '2.4rem', fontWeight: 300,
        color: '#4a0030', marginBottom: 6, letterSpacing: '-0.02em',
    },
    pageSubtitle: {
        textAlign: 'center', color: '#c2185b', fontSize: '0.85rem',
        marginBottom: 36, letterSpacing: '0.03em',
    },
    layout: { display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' },
    form: {
        flex: '1 1 560px', background: '#fff',
        borderRadius: 24, padding: '32px 28px',
        boxShadow: '0 8px 40px rgba(233,30,99,0.10)',
    },
    section: { marginBottom: 28 },
    sectionTitle: {
        fontSize: '0.85rem', fontWeight: 700, color: '#c2185b',
        textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14,
    },
    row: { display: 'flex', gap: 16, flexWrap: 'wrap' },
    field: { flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: 6 },
    label: { fontSize: '0.8rem', fontWeight: 600, color: '#6d4c61' },
    hint: { fontSize: '0.72rem', color: '#e91e8c', marginTop: 2 },
    input: {
        width: '100%', padding: '11px 14px', borderRadius: 14,
        border: '1.5px solid #f8bbd9', background: '#fff9fc',
        fontSize: '0.9rem', color: '#4a0030', outline: 'none',
        transition: 'border 0.2s', boxSizing: 'border-box',
        fontFamily: 'inherit',
    },
    sizeGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 2 },
    sizeBtn: {
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '10px 8px', borderRadius: 12, border: '1.5px solid #f8bbd9',
        background: '#fff9fc', cursor: 'pointer', transition: 'all 0.2s',
    },
    sizeBtnActive: { border: '1.5px solid #e91e8c', background: '#fce4ec' },
    sizeName: { fontWeight: 700, fontSize: '0.9rem', color: '#4a0030' },
    sizeServes: { fontSize: '0.68rem', color: '#c2185b', marginTop: 2 },
    qtyRow: { display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 },
    qtyBtn: {
        width: 34, height: 34, borderRadius: '50%', border: 'none',
        background: '#fce4ec', color: '#e91e8c', fontSize: '1.2rem',
        cursor: 'pointer', fontWeight: 700, lineHeight: 1,
    },
    qtyVal: { fontSize: '1.2rem', fontWeight: 700, color: '#4a0030', minWidth: 24, textAlign: 'center' },
    couponRow: { display: 'flex', gap: 10, alignItems: 'center' },
    applyBtn: {
        padding: '11px 20px', borderRadius: 14, border: 'none',
        background: '#e91e8c', color: '#fff', fontWeight: 700,
        fontSize: '0.85rem', cursor: 'pointer', whiteSpace: 'nowrap',
        fontFamily: 'inherit',
    },
    couponSuccess: { fontSize: '0.8rem', color: '#2e7d32', marginTop: 6 },
    couponErr: { fontSize: '0.8rem', color: '#c62828', marginTop: 6 },
    errorBox: {
        background: '#fff3f3', border: '1px solid #ffcdd2', borderRadius: 12,
        padding: '12px 16px', color: '#c62828', fontSize: '0.85rem', marginBottom: 12,
    },
    submitBtn: {
        width: '100%', padding: '15px', borderRadius: 50, border: 'none',
        background: 'linear-gradient(135deg, #e91e8c, #c2185b)',
        color: '#fff', fontWeight: 800, fontSize: '1rem',
        cursor: 'pointer', marginTop: 8, letterSpacing: '0.04em',
        boxShadow: '0 4px 20px rgba(233,30,140,0.35)',
        transition: 'opacity 0.2s', fontFamily: 'inherit',
    },
    summary: { flex: '0 0 300px', minWidth: 260 },
    summarySticky: {
        position: 'sticky', top: 24, background: '#fff',
        borderRadius: 24, padding: '24px 20px',
        boxShadow: '0 8px 40px rgba(233,30,99,0.12)',
    },
    summaryTitle: {
        fontSize: '1rem', fontWeight: 800, color: '#4a0030',
        marginBottom: 16, letterSpacing: '-0.01em',
    },
    summaryItem: { display: 'flex', gap: 12, alignItems: 'center', marginBottom: 4 },
    summaryEmoji: { fontSize: '2.2rem' },
    summaryName: { fontWeight: 700, color: '#4a0030', fontSize: '1rem' },
    summaryOccasion: { fontSize: '0.75rem', color: '#c2185b' },
    divider: { height: 1, background: '#fce4ec', margin: '12px 0' },
    summaryRow: {
        display: 'flex', justifyContent: 'space-between',
        fontSize: '0.82rem', color: '#6d4c61', marginBottom: 6,
    },
    totalRow: {
        display: 'flex', justifyContent: 'space-between',
        fontWeight: 800, fontSize: '1rem', color: '#4a0030',
    },
    totalPrice: { color: '#e91e8c', fontSize: '1.2rem' },
    messageBox: {
        marginTop: 12, background: '#fce4ec', borderRadius: 12,
        padding: '10px 12px',
    },
    messageLabel: { fontSize: '0.7rem', color: '#c2185b', fontWeight: 700, marginBottom: 3 },
    messageText: { fontSize: '0.85rem', color: '#4a0030', fontStyle: 'italic' },
    successCard: {
        maxWidth: 480, margin: '80px auto', background: '#fff',
        borderRadius: 28, padding: '48px 36px', textAlign: 'center',
        boxShadow: '0 16px 60px rgba(233,30,99,0.15)',
    },
    successIcon: { fontSize: '4rem', marginBottom: 16 },
    successTitle: { fontSize: '2rem', fontWeight: 300, color: '#4a0030', marginBottom: 8 },
    successRef: { fontSize: '0.8rem', color: '#c2185b', marginBottom: 16, letterSpacing: '0.05em' },
    successMsg: { fontSize: '0.9rem', color: '#6d4c61', lineHeight: 1.7, marginBottom: 8 },
    successNote: { fontSize: '0.8rem', color: '#c2185b', marginBottom: 16 },
    successTotal: { fontSize: '1rem', color: '#4a0030', marginBottom: 28 },
    successPrice: { color: '#e91e8c', fontWeight: 800, fontSize: '1.3rem' },
    backBtn: {
        padding: '12px 32px', borderRadius: 50, border: 'none',
        background: 'linear-gradient(135deg, #e91e8c, #c2185b)',
        color: '#fff', fontWeight: 700, fontSize: '0.9rem',
        cursor: 'pointer', fontFamily: 'inherit',
    },
};
