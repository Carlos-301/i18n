import React from "react";
import {FormattedDate} from 'react-intl';
import { FormattedNumber } from "react-intl";

const Job = (props) => {

  const wordES  = props.offer.salary === 1 ? 'millon' : 'millones';
  const wordEN  = props.offer.salary === 1 ? 'millon' : 'millons';
  const browserLanguage = navigator.language || navigator.userLanguage;
  const word = browserLanguage.startsWith('es') ? wordES : wordEN;

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary} {word}</td>
      <td>{props.offer.city}</td>
      <td>
  <FormattedDate
    value={new Date(props.offer.date)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  />
</td>
<td><FormattedNumber value={props.offer.views}  /></td>
    </tr>
  );
};

export default Job;
