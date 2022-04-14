export const Books = props => {
  const { items = [], addToOrder } = props;

  return (
    <div className='books'>
      {items.map(book => (
        <Book key={book.id} addToOrder={addToOrder} {...book} />
      ))}
    </div>
  );
};

const Book = props => {
  const { id, title, price, addToOrder } = props;

  return (
    <div
      className='book'
      style={{ border: '1px solid #fff', margin: '10px 0', padding: '.5em' }}>
      <h2>{title}</h2>
      <span>{price}</span>
      <button onClick={() => addToOrder(id)}>Buy</button>
    </div>
  );
};
