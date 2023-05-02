import { Fragment } from 'react';

const SeasonRenderedItem = (props) => {
  <Fragment>
    <p>{props.item.name}</p>
    <p>{props.item.price}</p>
    <p>{props.item.description}</p>
    <p>{props.item.old_price}</p>
  </Fragment>;
};

export default SeasonRenderedItem;
