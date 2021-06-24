const isNull = <T>(field: T | null): field is null => {
  return field === null;
};

export default isNull;