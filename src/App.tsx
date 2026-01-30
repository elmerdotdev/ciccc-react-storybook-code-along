import FancyButton from './stories/FancyButton';

const App = () => {
  return (
    <div>
      <h1>Storybook Practice</h1>
      <FancyButton
        hasIcon
        hasShadow={false}
        iconPosition="left"
        isDark
        isRounded={false}
        label="Log In"
        onToggle={() => {}}
        textColor="#ffffff"
      />
    </div>
  );
};

export default App;
