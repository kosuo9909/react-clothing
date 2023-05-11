import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import FetchItem from '../api/fetchItemData';
import ShopEachItem from '../components/UI/seasonal-grid/ShopEachItem';
const ShopItemPage = () => {
  let { itemId } = useParams();
  const { isLoading, isError, data } = useQuery(['itemData'], () =>
    FetchItem(itemId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error occurred</div>;
  } else {
    return <ShopEachItem item={data} />;
  }

  // Do something with data
  // ...
};

export default ShopItemPage;
