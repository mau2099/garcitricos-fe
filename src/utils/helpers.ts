import moment from 'moment';
import numbro from 'numbro';

export const currencyFormat = number => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
};

export const mapToLabelValue = array => {
  const mappedArray = array.map(option => {
    return {
      label: `${option.name}`,
      value: option.id,
    };
  });

  return mappedArray;
};

export const formatPriceHelper = price => {
  if (typeof price === 'number') {
    return price.toFixed(4);
  }

  return price;
};

export const accountingFormat = number => {
  return numbro(number).format({
    thousandSeparated: true,
    negative: 'parenthesis',
    mantissa: 0,
  });
};

export const createRangeCalendarOption = (
  startDate,
  endDate,
  name = '',
  labels = { startLabel: '', endLabel: '' },
) => {
  startDate = moment(startDate);
  endDate = moment(endDate);

  const startDateFormated = moment(startDate).format('MM/DD/YYYY');
  const endDateFormated = moment(endDate).format('MM/DD/YYYY');

  return {
    value: `${startDateFormated} - ${endDateFormated}`,
    label: `${name.toUpperCase()} -  
      ${labels.startLabel} ${startDateFormated} -  
      ${labels.endLabel} ${endDateFormated} `,
    startDate,
    endDate,
  };
};

export const decimalFormat = number => {
  return numbro(number).format({
    thousandSeparated: true,
    mantissa: 0,
  });
};

export const decimalSignFormat = number => {
  return numbro(number).format({
    thousandSeparated: true,
    mantissa: 0,
    forceSign: true,
  });
};

export const basisFormat = number => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  })
    .format(number)
    .replace(/^(\D+)/, '$1 ');
};

export const dateTimeFormat = date => {
  return moment(date).format('MM/DD/YY h:mm:ss');
};
