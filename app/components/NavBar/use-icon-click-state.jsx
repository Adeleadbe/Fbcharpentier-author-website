import { useState } from 'react';

const useIconClickState = (initialState) => {
  const [isIconClicked, setIsIconClicked] = useState(initialState);

  const handleIconClicked = () => {
    setIsIconClicked(!isIconClicked);
  };

  return [ isIconClicked, handleIconClicked ];
};

export default useIconClickState;