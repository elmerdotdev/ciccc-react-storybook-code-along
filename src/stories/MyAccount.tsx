import { useState, type SubmitEvent } from 'react';

type User = {
  username: string;
  password: string;
};

type Props = {
  isLoggedIn?: boolean;
  useModern?: boolean;
  backgroundColor: string;
  textColor: string;
  onLogin: (user: User) => void;
  onLogout: () => void;
};

const MyAccount = ({
  isLoggedIn = false,
  useModern = false,
  backgroundColor = 'transparent',
  textColor = '#000000',
  onLogin,
  onLogout,
}: Props) => {
  const [username, setUsernameInput] = useState<string>('');
  const [password, setPasswordInput] = useState<string>('');

  const modernInputStyle = {
    padding: '8px',
    borderRadius: '20px',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid black',
  };

  const oldButtonStyle = {
    backgroundColor: backgroundColor ?? 'transparent',
    color: textColor ?? 'black',
  };

  const modernButtonStyle = {
    padding: '8px 16px',
    borderRadius: '20px',
    fontFamily: 'Arial, sans-serf',
    fontWeight: 'bold',
    backgroundColor: backgroundColor ?? 'green',
    color: textColor ?? 'white',
    border: '1px solid black',
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin({
      username,
      password,
    });
  };

  return !isLoggedIn ? (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
    >
      <input
        aria-label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsernameInput(e.target.value)}
        placeholder="Enter username"
        style={useModern ? modernInputStyle : {}}
      />
      <input
        aria-label="Password"
        type="password"
        value={password}
        onChange={(e) => setPasswordInput(e.target.value)}
        placeholder="Enter password"
        style={useModern ? modernInputStyle : {}}
      />
      <button
        name="Log In"
        type="submit"
        style={useModern ? modernButtonStyle : oldButtonStyle}
      >
        Log In
      </button>
    </form>
  ) : (
    <div>
      <h2 style={{ fontFamily: useModern ? 'Arial, sans-serif' : 'serif' }}>
        Welcome!
      </h2>
      <button
        name="Log Out"
        onClick={onLogout}
        style={useModern ? modernButtonStyle : oldButtonStyle}
      >
        Log Out
      </button>
    </div>
  );
};

export default MyAccount;
