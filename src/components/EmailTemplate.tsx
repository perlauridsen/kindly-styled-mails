const EmailTemplate = () => {
  return (
    <div
      style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        backgroundColor: '#f4f4f4',
        margin: 0,
        padding: '40px 0',
      }}
    >
      <table
        role="presentation"
        cellPadding={0}
        cellSpacing={0}
        style={{
          maxWidth: 600,
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: 8,
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}
        width="100%"
      >
        {/* Header */}
        <thead>
          <tr>
            <td
              style={{
                backgroundColor: '#0d1f17',
                padding: '32px 40px',
                textAlign: 'center',
              }}
            >
              <img
                src="/images/logo.png"
                alt="Altoure Automotive"
                width={220}
                style={{ display: 'block', margin: '0 auto' }}
              />
            </td>
          </tr>
        </thead>

        {/* Green accent bar */}
        <tbody>
          <tr>
            <td style={{ height: 4, backgroundColor: '#2ecc71' }} />
          </tr>

          {/* Body */}
          <tr>
            <td style={{ padding: '40px 40px 24px' }}>
              <h1
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  margin: '0 0 16px',
                }}
              >
                Hello, [Customer Name]
              </h1>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: '26px',
                  color: '#555555',
                  margin: '0 0 24px',
                }}
              >
                Thank you for choosing Altoure Automotive. We're writing to
                let you know that your request has been received and is being
                processed.
              </p>

              {/* CTA Button */}
              <table role="presentation" cellPadding={0} cellSpacing={0} style={{ margin: '0 auto' }}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#2ecc71',
                        borderRadius: 6,
                        textAlign: 'center',
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          display: 'inline-block',
                          padding: '14px 36px',
                          color: '#ffffff',
                          fontSize: 16,
                          fontWeight: 600,
                          textDecoration: 'none',
                          letterSpacing: '0.3px',
                        }}
                      >
                        View Details
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Info section */}
          <tr>
            <td style={{ padding: '0 40px 32px' }}>
              <table
                role="presentation"
                cellPadding={0}
                cellSpacing={0}
                width="100%"
                style={{
                  backgroundColor: '#f8faf9',
                  borderRadius: 6,
                  padding: '20px 24px',
                }}
              >
                <tbody>
                  <tr>
                    <td>
                      <p style={{ fontSize: 14, color: '#888', margin: '0 0 4px' }}>Reference Number</p>
                      <p style={{ fontSize: 16, color: '#1a1a1a', fontWeight: 600, margin: 0 }}>#ALT-2026-00421</p>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: 14, color: '#888', margin: '0 0 4px' }}>Date</p>
                      <p style={{ fontSize: 16, color: '#1a1a1a', fontWeight: 600, margin: 0 }}>Feb 25, 2026</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Divider */}
          <tr>
            <td style={{ padding: '0 40px' }}>
              <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: 0 }} />
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td
              style={{
                padding: '24px 40px 32px',
                textAlign: 'center',
              }}
            >
              <p style={{ fontSize: 13, color: '#999', margin: '0 0 8px', lineHeight: '20px' }}>
                If you have any questions, reply to this email or contact us at{' '}
                <a href="mailto:support@altoure.com" style={{ color: '#2ecc71', textDecoration: 'none' }}>
                  support@altoure.com
                </a>
              </p>
              <p style={{ fontSize: 12, color: '#bbb', margin: 0 }}>
                © 2026 Altoure Automotive. All rights reserved.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmailTemplate;
