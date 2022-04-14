const Books = props => {
  const { items = [] } = props;

  return (
    <div className='books'>
      {items.map(book => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
};

const Book = props => {
  const { id, title, price } = props;

  return (
    <div className='book'>
      <h2>{title}</h2>
      <span>{price}</span>
      <button>Buy</button>
    </div>
  );
};
