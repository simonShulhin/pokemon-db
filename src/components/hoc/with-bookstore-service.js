import { BookstoreServiceConsumer } from '../bookstore-service-context';

export const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(value) => {
          return <Wrapped {...props} bookstoreService={value} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};
