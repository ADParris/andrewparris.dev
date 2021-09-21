import { useState } from 'react';

export const useDisclosure = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onClose = () => setIsOpen(false);
	const onOpen = () => setIsOpen(true);
	const toggleIsOpen = () => (isOpen ? onClose() : onOpen());

	return { isOpen, onClose, onOpen, toggleIsOpen };
};
