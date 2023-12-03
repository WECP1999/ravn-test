const formatDate = (date: Date) => {
  const currentDate = new Date();

  const _date = new Date(date);

  const yesterday = new Date();
  yesterday.setDate(currentDate.getDate() - 1);

  if (
    _date.getDate() === currentDate.getDate() &&
    _date.getMonth() === currentDate.getMonth() &&
    _date.getFullYear() === currentDate.getFullYear()
  ) {
    return 'today';
  }

  if (
    _date.getDate() === yesterday.getDate() &&
    _date.getMonth() === yesterday.getMonth() &&
    _date.getFullYear() === yesterday.getFullYear()
  ) {
    return 'yesterday';
  }

  const month = _date.toLocaleString('en-US', { month: 'long' });
  const year = _date.getFullYear();
  const day = _date.getDate();

  return `${day} ${month}, ${year}`;
};

export default formatDate;
