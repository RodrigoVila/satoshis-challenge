import { useState, useEffect } from "react";

const useModal = () => {
  const [isUserModalOpen, setUserModalOpen] = useState(false);

  const toggleUserModal = (): void => setUserModalOpen(!isUserModalOpen);

  //Avoid scrolling when modals are open
  useEffect(() => {
    if (isUserModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isUserModalOpen]);

  return {
    isUserModalOpen,
    toggleUserModal,
  };
};

export default useModal;
