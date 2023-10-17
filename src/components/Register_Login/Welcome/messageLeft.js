
import React from 'react';
import fillybee from '../../../assets/img/bars.png';
import './Welcome.css'; // Import the CSS file for styling and animation

const Welcome = () => {
  return (
    <table cellSpacing="0" cellPadding="0" bgcolor="#f7f7f7" style={{ fontFamily: 'ApexRounded, Helvetica, Arial, sans-serif', fontSize: '12px', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', letterSpacing: 'normal', textAlign: 'start', textIndent: '0px', textTransform: 'none', whiteSpace: 'normal', wordSpacing: '0px', backgroundColor: 'rgb(247,247,247)', borderCollapse: 'collapse', display: 'table', padding: '60px 0px', maxWidth: '100% !important', width: '100% !important' }}>
      <tbody>
        <tr>
          <td align="center" valign="top" style={{ padding: '0px 20px' }}>
            <table cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse', display: 'table', width: '684px' }}>
              <tbody>
                <tr>
                  <td align="center" bgcolor="#887AFF" style={{ backgroundColor: 'rgb(136,122,255)', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', padding: '50px 0px', textAlign: 'center' }}>
                    <a href="https://diy.org/" style={{ color: 'rgb(136,122,255)', textDecoration: 'none' }} rel="noreferrer" target="_blank">
                      <img src={ fillybee}  className="logo-image" style={{ width: '130px' }} alt="Logo" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#fff" style={{ backgroundColor: 'rgb(255,255,255)', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderStyle: 'none', color: 'rgb(102,102,102)', padding: '0px 40px' }}>
                    <p align="left" style={{ color: 'rgb(65,76,82)', fontSize: '24px', fontWeight: 'bold', lineHeight: '36px', marginBottom: '50px', marginTop: '40px', textAlign: 'left' }}><u></u>Welcome to SECUREINMATE!<u></u></p>
                    <p align="left" style={{ color: 'rgb(117,125,127)', fontSize: '20px', lineHeight: '36px', marginBottom: '50px', textAlign: 'left' }}> SECUREINMATE web application is an efficient an intuitive inmate database management system designed for any correctional facility. Manage Inmates records, visits,inventory and so much more effortlessly.Interested? talk to us and Purchase free access for 30 days or our complete Yearly/Monthly plan</p>
                    <div>
                      <a href="/dashboard" style={{ backgroundColor: 'rgb(136,122,255)', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', borderBottomRightRadius: '12px', borderBottomLeftRadius: '12px', color: 'rgb(255,255,255)', display: 'block', fontSize: '24px', fontWeight: 'bold', marginBottom: '60px', marginLeft: 'auto', marginRight: 'auto', padding: '30px 0px', textAlign: 'center', textDecoration: 'none', width: '260px' }} target="_blank">Go To Dashboard</a>
                    </div>   
                  </td>
                </tr>
                <tr>
                  <td>
                    <table style={{ borderCollapse: 'collapse', display: 'table', marginTop: '0px', width: '684px' }}>
                      <tbody>
                        <tr>
                          <td align="left" style={{ color: 'rgb(196,203,204)', fontSize: '18px', lineHeight: '28px', paddingTop: '50px', textAlign: 'left', width: '340px' }}>
                            3360 20th Street
                            <br />
                            San Francisco, CA 94110
                            <br />
                            844-JOIN-DIY
                          </td>
                          <td align="right" style={{ marginLeft: '16px', textAlign: 'right' }}>
                            <a href="https://twitter.com/DIY" rel="noreferrer" style={{ color: 'rgb(136,122,255)', marginLeft: '16px', textDecoration: 'none' }} target="_blank">
                              <img src="https://diy-email.s3.amazonaws.com/email-twitter.png" style={{ width: '36px' }} alt="Twitter" />
                            </a>
                            <span> </span>
                            <a href="https://www.instagram.com/diyorg/" rel="noreferrer" style={{ color: 'rgb(136,122,255)', marginLeft: '16px', textDecoration: 'none' }} target="_blank">
                              <img src="https://diy-email.s3.amazonaws.com/email-instagram.png" style={{ width: '36px' }} alt="Instagram" />
                            </a>
                            <span> </span>
                            <a href="https://www.facebook.com/DIY" rel="noreferrer" style={{ color: 'rgb(136,122,255)', marginLeft: '16px', textDecoration: 'none' }} target="_blank">
                              <img src="https://diy-email.s3.amazonaws.com/email-facebook.png" style={{ width: '36px' }} alt="Facebook" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Welcome;
