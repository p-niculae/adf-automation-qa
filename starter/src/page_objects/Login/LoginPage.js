import form from './form';
import copyright from './copyright';

const LoginPage = {
    LoginForm: form,
    LoginCopyright: copyright,
    loginWith: (username, password) => {
        form.usernameField.fillWith(username);
        form.passwordField.fillWith(password);
        form.loginButton.click();
    },
};

export default LoginPage;
