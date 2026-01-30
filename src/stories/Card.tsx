type Props = {
  hasImage?: boolean;
  imgUrl?: string;
  title: string;
  content: string;
  rounded?: boolean;
  hasShadow?: boolean;
  imagePosition: 'left' | 'right' | 'top' | 'bottom';
};

const Card = ({
  hasImage = true,
  imgUrl = '',
  title = 'Card Header',
  content = 'Card Content',
  rounded = true,
  hasShadow = true,
  imagePosition = 'left',
}: Props) => {
  const cardStyle = {
    display: 'flex',
    flexDirection:
      imagePosition === 'left'
        ? 'row'
        : imagePosition === 'right'
          ? 'row-reverse'
          : imagePosition === 'top'
            ? 'column'
            : 'column-reverse',
    gap: '1rem',
    padding: '1rem',
    border: '1px solid black',
    boxShadow: hasShadow ? '2px 2px 6px 1px #999' : 'none',
    borderRadius: rounded ? 20 : 0,
    width: '100%',
    maxWidth: 480,
    minHeight: 150,
  };

  return (
    <div style={cardStyle}>
      {hasImage && (
        <div>
          <img src={imgUrl || 'https://placehold.co/100x150'} />
        </div>
      )}
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
