import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { submitEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isBtnDisabled: true,
  };

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.verifyBtn());
  };

  verifyBtn = () => {
    const { email, password } = this.state;
    const minPass = 5;
    const emailRegex = /\S+@\S+\.\S+/;
    const checkEmail = emailRegex.test(email);
    const checkPassword = password.length > minPass;
    this.setState({ isBtnDisabled: !(checkEmail && checkPassword) });
  };

  onHandleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(submitEmail(email));
    history.push('/carteira');
  };

  render() {
    const { isBtnDisabled } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            onChange={ this.onHandleChange }
            name="email"
            type="email"
            data-testid="email-input"
          />
        </label>

        <label htmlFor="password-input">
          Senha:
          <input
            onChange={ this.onHandleChange }
            data-testid="password-input"
            name="password"
            type="password"
          />
        </label>
        <button
          onClick={ this.onHandleClick }
          disabled={ isBtnDisabled }
          type="button"
        >
          Entrar

        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropType.func.isRequired,
  history: PropType.object,
}.isRequired;
export default connect()(Login);
