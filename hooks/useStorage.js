const useStorage = () => {
  const getItem = (propertyName) => {
    return localStorage.getItem(propertyName);
  };

  const setItem = (propertyName, value) => {
    return localStorage.setItem(propertyName, JSON.stringify(value));
  };

  return { getItem, setItem };
};

export default useStorage;
