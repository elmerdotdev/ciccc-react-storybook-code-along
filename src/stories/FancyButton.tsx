type Props = {
  isDark?: boolean;
  label: string;
  isRounded: boolean;
  hasShadow: boolean;
  textColor: string;
  hasIcon: boolean;
  iconPosition: 'left' | 'right';
  onToggle: (status: boolean) => void;
};

const FancyButton = ({
  isDark = false,
  label = '',
  isRounded = true,
  hasShadow = true,
  textColor = '#000000',
  hasIcon = true,
  iconPosition = 'right',
  onToggle,
}: Props) => {
  const btnStyle = {
    backgroundColor: isDark ? 'black' : 'white',
    color: textColor,
    padding: '8px 16px',
    borderRadius: isRounded ? '20px' : 0,
    boxShadow: hasShadow ? '1px 3px 4px 0 #999' : 'none',
    fontWeight: 'bold',
  };

  return (
    <button style={btnStyle} onClick={() => onToggle(true)}>
      {iconPosition === 'right' ? (
        <span>
          {label} {hasIcon && '➡️'}
        </span>
      ) : (
        <span>
          {hasIcon && '➡️'} {label}
        </span>
      )}
    </button>
  );
};

export default FancyButton;
