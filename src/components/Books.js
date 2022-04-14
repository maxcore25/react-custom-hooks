export const Books = props => {
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
  const { title, price } = props;

  return (
    <div
      className='book'
      style={{ border: '1px solid #fff', margin: '10px 0', padding: '.5em' }}>
      <h2>{title}</h2>
      <span>{price}</span>
      <button>Buy</button>
    </div>
  );
};
