export default interface SSOConfig {
  signUpAcceptOffersHtml: string;
  interests: { label: string, key: string }[];
  project: string;
  logoUrl: string;
  sloganHtml: string;
  showLoginFacebookButton: boolean;
  showLoginGoogleButton: boolean;
  showSignUpFacebookButton: boolean;
  showSignUpGoogleButton: boolean;
  showSignUPWithFields: boolean;
  showOffersOption: boolean;
  loginEmail: string;
  loginEmailHint: string;
  loginPasswordHint: string;
  signUpAcceptTermsHtml: string;
  loginFooterHtml: string;
  language: string;
  showCloseButton: boolean;
  showContainerBackground: boolean;
  reference: string;
  styles: string;
  showCPFInput: boolean;
}
