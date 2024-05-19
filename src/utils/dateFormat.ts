import dayjs from 'dayjs';

export const dateFormat = (date: string) => {
  return dayjs(date).format('DD MMMM YYYY, H:m');
};
